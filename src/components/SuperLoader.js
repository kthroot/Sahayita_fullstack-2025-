import { View, Text } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { colorPallet } from '../utils/colorPallet';



const SuperLoader = () => {
    const [loading, setLoading] = useState(false)
  return (
    <View style={{
        width: wp(100),
        height: hp(100),
        // backgroundColor: colorPallet.PRIMARY_COLOR,
        opacity: 0.5,
    }}>
      <Text>SuperLoader</Text>
    </View>
  )
}

export default SuperLoader