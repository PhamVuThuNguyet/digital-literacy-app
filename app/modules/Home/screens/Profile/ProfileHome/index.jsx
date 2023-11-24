import CustomColor from "@app/assets/colors";
import { logout } from "@app/redux/slices/authSlice";
import asyncStorageService from "@app/services/async-storage.service.js";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";

export default function ProfileHome({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await asyncStorageService.clearAll();
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View style={styles.nameWrap}>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.name}>
            {user.name || "Chưa hoàn thiện thông tin"}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
        <View style={styles.item}>
          <Icon
            color={CustomColor.lightGrayColor}
            name="person-outline"
            size={24}
            type="ionicon"
            onPress={() => setShowPassword(!showPassword)}
          />
          <Text style={styles.itemText}>Cập nhật thông tin cá nhân</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <View style={styles.item}>
          <Icon
            color={CustomColor.lightGrayColor}
            name="log-out-outline"
            size={24}
            type="ionicon"
            onPress={() => setShowPassword(!showPassword)}
          />
          <Text style={styles.itemText}>Đăng xuất</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
