import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Appbar, Avatar, Button, IconButton } from "react-native-paper";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colorPallet } from "../../utils/colorPallet";

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Appbar */}
      {/* <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="Profile" />
        <IconButton icon="cog-outline" size={28} onPress={() => {}} color="#FFFFFF" />
      </Appbar.Header> */}

      {/* Cover Image */}
      <Image
        source={{ uri: "https://media.istockphoto.com/id/941370476/photo/winning-success-man-happy-ecstatic-celebrating-being-a-winner-dynamic-energetic-image-of-male.jpg?s=612x612&w=0&k=20&c=b2IGqs2D1LHfPQjebPOMWiy2KZW6nnXYnaSFJqe-WFE=" }} 
        style={styles.coverImage}
      />

      {/* Profile Avatar */}
      <View style={styles.profileSection}>
        <Avatar.Image 
          size={120} 
          source={{ uri: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" }} 
          style={styles.avatar} 
        />
        <Text style={styles.name}>John Doe, 25</Text>
        <Text style={styles.bio}>
          Love hiking, coffee, and spontaneous road trips. Let's swipe right on adventure!
        </Text>
      </View>

      {/* Edit Profile and Settings Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("EditProfileScreen")}
          labelStyle={styles.buttonText}
          style={styles.button}
        >
          Edit Profile
        </Button>
        <Button
          mode="outlined"
          onPress={() => {}}
          labelStyle={styles.buttonText}
          style={styles.buttonOutlined}
        >
          Settings
        </Button>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FFFFFF", // White background for the main view
  },
  appbar: {
    // backgroundColor: "#FF5864", // Tinder red
    elevation: 0,
  },
  coverImage: {
    width: wp('100%'),
    height: hp('35%'),
    resizeMode: 'cover', // Ensures the image covers the area without stretching
  },
  profileSection: {
    alignItems: "center",
    marginTop: -50, // Overlaps the cover image
  },
  avatar: {
    // backgroundColor: "#FFFFFF", // White background for the avatar
    borderWidth: 4,
    borderColor: "#FF5864", // Tinder red for the avatar border
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333", // Dark text for better contrast
  },
  bio: {
    fontSize: 16,
    color: "#666666", // Softer gray for bio text
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    // backgroundColor: "#FF5864", // Tinder red for the main button
    width: wp("40%"),
  },
  buttonOutlined: {
    // color: colorPallet.colors.primary,
    // borderColor: "#FF5864", // Tinder red for the outlined button border
    width: wp("40%"),
  },
  buttonText: {
    color: "#FFFFFF", // White text for buttons
  },
});
