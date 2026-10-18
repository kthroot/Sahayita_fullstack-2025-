import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react';

const RegisterScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Register</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#666"
          value={name}
          onChangeText={setName}
        />
  
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
  
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#666"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
  
        <TouchableOpacity 
          style={styles.registerButton} 
          onPress={() => console.log("Register Pressed")}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
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
    registerButton: {
      backgroundColor: "#28a745",
      paddingVertical: 15,
      borderRadius: 8,
      width: "100%",
      alignItems: "center",
      marginTop: 10,
    },
    registerButtonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  
  export default RegisterScreen;
  