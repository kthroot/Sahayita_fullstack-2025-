import { View, Text } from "react-native";
import React from "react";
import RootStack from "./RootStack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { lightTheme } from "../utils/colorPallet";
import { AuthProvider } from "../context/AuthProvider";
// import AddIssueScreen from "../screens/civilians/AddIssueScreen";

const RootScreen = () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <PaperProvider theme={lightTheme}>
            <NavigationContainer>
              <RootStack />
              {/* <AddIssueScreen /> */}
            </NavigationContainer>
          </PaperProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </AuthProvider>
  );
};

export default RootScreen;
