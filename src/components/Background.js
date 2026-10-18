import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Background = ({ children }) => (
  <ImageBackground
    source={require("../assets/background_dot2x.png")}
    style={{
      width: '90%',
      flex: 1,
      backgroundColor: "#FFFFFF",
      borderRadius: wp(5),
      elevation: 10,
      marginVertical: '5%',
      marginLeft: '5%'
    }}
    imageStyle={{
      resizeMode: "repeat",
      overflow: "visible",
      backfaceVisibility: "visible",
    }}
  >
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    // paddingTop: -wp(3),
    flex: 1,
    // padding: 20,
    width: "100%",
    // maxWidth: 340,
    // alignSelf: "center",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default memo(Background);
