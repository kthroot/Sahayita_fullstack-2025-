import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colorPallet } from "../utils/colorPallet";
// import { IconButton } from "react-native-paper";

const SuperAppbar = ({ title }) => {
  return (
    <View
      style={{
        // width: wp(100),
        // backgroundColor: "pink",
        height: wp(15),
        alignItems: "center",
        marginHorizontal: wp(5),
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      {/* <IconButton
        icon="arrow-left-thick"
        iconColor={colorPallet.PRIMARY_COLOR}
        size={20}
        onPress={() => console.log("Pressed")}
        style={{
          width: wp(8),
          height: wp(8),
          borderWidth: wp(0.4),
          borderRadius: wp(2),
          borderColor: colorPallet.PRIMARY_COLOR,
        }}
      /> */}
      <Text
        style={{
          fontWeight: "bold",
          fontSize: wp(4.5),
          textAlign: 'center',
          alignSelf: 'center',
          // color: colorPallet.PRIMARY_COLOR,
        }}
      >
        {title || `Personal Lobby`}
      </Text>
    {/* 
      <IconButton
        icon="close-thick"
        iconColor={colorPallet.PRIMARY_COLOR}
        size={20}
        onPress={() => console.log("Close")}
        style={{
          width: wp(8),
          height: wp(8),
          borderWidth: wp(0.4),
          borderRadius: wp(2),
          borderColor: colorPallet.PRIMARY_COLOR,
        }}
      /> */}
    </View>
  );
};

export default SuperAppbar;
