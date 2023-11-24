import authApi from "@app/api/auth.api";
import { login } from "@app/redux/slices/authSlice";
import AsyncStorageService from "@app/services/async-storage.service";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import styles from "../../styles";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const createAlert = (description) =>
    Alert.alert("Thông báo", description, [{ text: "OK" }]);

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const { data } = await authApi.login({ ...formData, role: "user" });
      const timeOut = setTimeout(() => {
        setLoading(false);
      }, 1500);
      clearTimeout(timeOut);
      if (data.accessToken) {
        AsyncStorageService.setToken({
          accessToken: data.accessToken,
          user: data.user,
        });
        dispatch(login(data.user));
      } else {
        setLoading(false);
        createAlert("Thông tin đăng nhập không chính xác!");
      }
    } catch (error) {
      setLoading(false);
      createAlert("Thông tin đăng nhập không chính xác");
    }
  };

  const handlePressRegisterScreen = () => {
    navigation.navigate("Register");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>ĐĂNG NHẬP</Text>
        </View>
        <View style={styles.formGroup}>
          <Controller
            control={control}
            style={styles.inputGroup}
            rules={{
              maxLength: 100,
            }}
            name="username"
            render={({ field: { onChange, value } }) => (
              <View style={styles.inputGroup}>
                <TextInput
                  style={styles.inputElement}
                  onChangeText={onChange}
                  value={value}
                />
                <Text style={styles.inputLabel}>Tên đăng nhập</Text>
              </View>
            )}
          />

          <Controller
            control={control}
            style={styles.inputGroup}
            rules={{
              maxLength: 100,
            }}
            name="password"
            render={({ field: { onChange } }) => (
              <View style={styles.inputGroup}>
                <TextInput
                  style={[styles.inputElement, styles.inputPasswordElement]}
                  secureTextEntry={!showPassword}
                  keyboardType="default"
                  onChangeText={onChange}
                />
                <Text style={styles.inputLabel}>Mật khẩu</Text>
                <View style={styles.inputIconPassword}>
                  <Icon
                    color="#fff"
                    name={showPassword ? "visibility-off" : "visibility"}
                    size={20}
                    type="material"
                    onPress={() => setShowPassword(!showPassword)}
                  />
                </View>
              </View>
            )}
          />

          <View style={styles.forgotPasswordGroup}>
            <TouchableOpacity activeOpacity={1}>
              <Text style={styles.forgotPasswordLabel}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={1}
            style={styles.buttonGroup}
            onPress={handleSubmit(onSubmit)}
          >
            {loading && <ActivityIndicator size={24} color="#FFFFFF" />}
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>

          <View style={styles.switchPageGroup}>
            <Text>Chưa có tài khoản? </Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={handlePressRegisterScreen}
            >
              <Text style={styles.switchPageButton}>Đăng ký ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
