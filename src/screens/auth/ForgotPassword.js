import { View, Text, ImageBackground, Image } from "react-native";
import React, { useState } from "react";
import { Button, TextInput, withTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Background from "../../components/Background";
import { useTheme } from "react-native-paper";
import { colorPallet } from "../../utils/colorPallet";

const ForgotPassword = ({ navigation }) => {
  const [text, setText] = useState("");
  const theme = useTheme();

  return (
    <Background>
      <View
        style={{
          // backgroundColor: "mediumpurple",
          width: wp(85),
          alignSelf: 'center',
          // marginHorizontal: wp(15),
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
            // color: colorPallet.PRIMARY_COLOR,
            marginBottom: wp(3),
          }}
        >
          Forgot Password
        </Text>
        <TextInput
          label="Email"
          value={text}
          mode="outlined"
          style={{
            width: wp(70),
          }}
          onChangeText={(text) => setText(text)}
        />

        <Button
          // icon="camera"
          mode="contained"
          style={{
            width: wp(70),
            borderRadius: wp(2),
            marginTop: wp(6),
            paddingVertical: wp(1),
            backgroundColor: colorPallet.PRIMARY_COLOR
          }}
          onPress={() => console.log("Pressed")}
        >
          Reset Password
        </Button>

        <Text
        onPress={() => navigation.navigate('LoginScreen', {})}
          style={{
            fontSize: wp(3.2),
            marginRight: wp(7),
            marginTop: wp(3),
            color: theme.colors.gray,
          }}
        >
          Already have an account? <Text style={{
            fontWeight: 'bold',
            // color: colorPallet.PRIMARY_COLOR,
          }}>Sign In</Text> 
        </Text>
      </View>
    </Background>
  );
};

export default ForgotPassword;
