import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
  
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
  
        <TouchableOpacity style={styles.loginButton} onPress={() => console.log("Login pressed")}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => console.log("Forgot Password pressed")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
      padding: 20,
    },
    title: {
      fontSize: 32,
      marginBottom: 30,
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      height: 50,
      borderColor: "#ddd",
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 15,
      paddingHorizontal: 10,
      backgroundColor: "#fff",
    },
    loginButton: {
      backgroundColor: "#007bff",
      paddingVertical: 15,
      borderRadius: 8,
      width: "100%",
      alignItems: "center",
    },
    loginButtonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    forgotPassword: {
      marginTop: 15,
      color: "#007bff",
      fontSize: 16,
    },
  });
  
  export default LoginScreen;
  