import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import cloudinaryApi from "@app/api/cloudinary.api";
import userApi from "@app/api/user.api";
import asyncStorageService from "@app/services/async-storage.service.js";
import { setUser } from "@app/redux/slices/authSlice";

export default function EditProfile() {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const handlePressAvatar = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const userData = { ...formData };
      if (image) {
        const photo = {
          uri: image,
          type: "image/jpeg",
          name: `${user.username}_${new Date().getTime()}.jpg`,
        };

        const { data } = await cloudinaryApi.uploadImage(photo);
        userData.avatar = data.url;
      }
      await userApi.updateUserProfile(user._id, userData);
      const newUser = { ...user, ...userData };
      asyncStorageService.setUserInfo(newUser);
      dispatch(setUser(newUser));
      setLoading(false);
      alert("Cập nhật thông tin cá nhân thành công");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thông tin cá nhân</Text>
      <TouchableOpacity onPress={handlePressAvatar}>
        <View style={styles.avatarWrap}>
          <Image source={{ uri: image || user.avatar }} style={styles.avatar} />
        </View>
      </TouchableOpacity>
      <View style={styles.formGroup}>
        <Controller
          control={control}
          style={styles.inputGroup}
          rules={{
            maxLength: 100,
          }}
          name="name"
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.inputElement}
                onChangeText={onChange}
                value={value}
                defaultValue={user.name}
              />
              <Text style={styles.inputLabel}>Họ và tên</Text>
            </View>
          )}
        />

        <Controller
          control={control}
          style={styles.inputGroup}
          rules={{
            maxLength: 100,
          }}
          name="birthday"
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.inputElement}
                onChangeText={onChange}
                value={value}
                defaultValue={user.birthday}
              />
              <Text style={styles.inputLabel}>Ngày tháng năm sinh</Text>
            </View>
          )}
        />

        <Controller
          control={control}
          style={styles.inputGroup}
          rules={{
            maxLength: 100,
          }}
          name="email"
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.inputElement}
                onChangeText={onChange}
                value={value}
                defaultValue={user.email}
                keyboardType="email-address"
              />
              <Text style={styles.inputLabel}>Email</Text>
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.buttonGroup}
          onPress={handleSubmit(onSubmit)}
        >
          {loading && <ActivityIndicator size={24} color="#FFFFFF" />}
          <Text style={styles.buttonText}>Hoàn tất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
