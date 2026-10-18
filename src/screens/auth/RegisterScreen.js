// RegisterScreen.js
import React, { useState } from "react";
import { View, Text, Alert, Image } from "react-native";
import { Button, TextInput, useTheme, Switch } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Background from "../../components/Background";
import { colorPallet } from "../../utils/colorPallet";
import { registerUser } from "../../config/firebaseConfig";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
// import { auth, db } from "../../config/firebaseConfig"; // Firebase config
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("e8@e.com");
  const [password, setPassword] = useState("123456789");
  const [name, setName] = useState("namexyz");
  const [role, setRole] = useState(isSwitchOn ? "civilian" : "ngo");
  const theme = useTheme();

  const handleSignup = async () => {
    if (!email || !password || !name || !role) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    setLoading(true);
    
    try {
      const userCredential = await registerUser(email, password, name, role);
      const user = userCredential.user;
  
      // Determine the collection based on the role
      const collectionName = role === "ngo_admin" ? "ngo_admins" : "civilians";
  
      // Save additional user details in Firestore
      await setDoc(doc(db, collectionName, user.uid), {
        name,
        role,
        email: user.email,
        createdAt: serverTimestamp(), // ✅ More accurate timestamp
      });
  
      setLoading(false);
      Alert.alert("Success", "User registered successfully!");
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", error.message);
    }
  };
  

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setRole(isSwitchOn ? "ngo_admin" : "civilians");
  };

  return (
    <Background>
      <View
        style={{
          width: wp(85),
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Image
          style={{
            width: wp(25),
            height: wp(25),
            marginBottom: wp(7),
          }}
          resizeMode="contain"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatCL_l2rGvxrcvwOdKovCTZucZWVkZjOVtQ&s",
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: wp(7),
            alignSelf: "center",
            marginBottom: wp(3),
          }}
        >
          Create Account
        </Text>
        <TextInput
          label="Name"
          value={name}
          mode="outlined"
          style={{
            width: wp(70),
            marginBottom: wp(5),
          }}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          style={{
            width: wp(70),
          }}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          style={{
            width: wp(70),
            marginTop: wp(5),
          }}
          onChangeText={(text) => setPassword(text)}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: wp(70),
            justifyContent: 'space-between',
            paddingHorizontal: wp(10),
          }}
        >
          <Text
            style={{
              fontSize: wp(3),
              fontWeight: '800',
              color: !isSwitchOn ? theme.colors.primary : colorPallet.gray,
            }}
          >
            NGO Admin
          </Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          <Text
            style={{
              fontSize: wp(3),
              fontWeight: '800',
              color: isSwitchOn ? theme.colors.primary : colorPallet.gray,
            }}
          >
            Civilians
          </Text>
        </View>

        <Text
          onPress={() => navigation.navigate("ForgotPassword")}
          style={{
            fontSize: wp(3.2),
            alignSelf: "flex-end",
            marginRight: wp(7),
            marginTop: wp(2),
            color: theme.colors.gray,
          }}
        >
          Forgot password
        </Text>

        <Button
          loading={loading}
          mode="contained"
          style={{
            width: wp(70),
            borderRadius: wp(2),
            marginTop: wp(6),
            paddingVertical: wp(1),
            // backgroundColor: colorPallet.PRIMARY_COLOR,
          }}
          onPress={handleSignup}
        >
          Register
        </Button>

        <Text
          onPress={() => navigation.navigate("LoginScreen")}
          style={{
            fontSize: wp(3.2),
            marginRight: wp(7),
            marginTop: wp(3),
            color: theme.colors.gray,
          }}
        >
          Already have an account?{" "}
          <Text
            style={{
              fontWeight: "bold",
              // color: colorPallet.PRIMARY_COLOR,
            }}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </Background>
  );
};

export default RegisterScreen;
