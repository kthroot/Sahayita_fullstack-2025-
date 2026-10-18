import { View, Text, Platform, TouchableOpacity, Alert, Image } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  Appbar,
  Avatar,
  Button,
  Card,
  Icon,
  IconButton,
  TextInput,
  useTheme,
} from "react-native-paper";
import * as ImagePicker from "expo-image-picker"; // Import Image Picker
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useUser } from "../../config/firebaseConfig";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const AddIssueScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [issue, setIssue] = useState("");
  const [imageBase64, setImageBase64] = useState(null);
  const theme = useTheme();
  const user = useUser(); // Get current user

  // Function to pick an image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true, // Convert to Base64
      quality: 0.8, // Adjust quality if needed
    });

    if (!result.canceled) {
      setImageBase64(result.assets[0].base64);
    }
  };

  // Function to create an issue
  const handleCreateIssue = async () => {
    if (!title || !issue) {
      Alert.alert("Error", "Please fill all fields before submitting.");
      return;
    }

    if (!user) {
      Alert.alert("Error", "User not authenticated.");
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        userId: user.uid,
        title,
        description: issue,
        imageBase64, // Store Base64 string in Firestore
        location: "Not provided",
        status: "pending",
        createdAt: serverTimestamp(),
      });

      Alert.alert("Success", "Issue created successfully!");
      navigation.goBack(); // Navigate back
    } catch (error) {
      Alert.alert("Error", "Failed to create issue: " + error.message);
    }
  };

  return (
    <View style={{ width: wp(100), height: hp(100) }}>
      <Appbar.Header>
        <Appbar.Content title="Add Issue" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>

      {/* ISSUE FORM */}
      <View style={{ width: wp(90), alignSelf: "center", gap: wp(5) }}>
        {/* TITLE */}
        <TextInput label="Title" value={title} onChangeText={(text) => setTitle(text)} />

        {/* IMAGE UPLOAD */}
        <Card>
          <Card.Title
            title="Upload Issue Image"
            subtitle="Choose an image from gallery"
            left={(props) => <Avatar.Icon {...props} icon="file-upload" />}
          />
          <TouchableOpacity onPress={pickImage} style={{ alignSelf: "center" }}>
            {imageBase64 ? (
              <Image
                source={{ uri: `data:image/jpeg;base64,${imageBase64}` }}
                style={{ width: wp(80), height: wp(50), borderRadius: 10 }}
              />
            ) : (
              <Icon source="file-image-marker-outline" color={theme.colors.primary} size={wp(15)} />
            )}
          </TouchableOpacity>
        </Card>

        {/* ISSUE DESCRIPTION */}
        <TextInput label="Write down your issue." value={issue} onChangeText={(value) => setIssue(value)} />

        {/* BUTTONS */}
        <View style={{ flexDirection: "row", gap: wp(3), justifyContent: "flex-end" }}>
          <Button icon="delete-empty" mode="contained" buttonColor={theme.colors.error} onPress={() => setImageBase64(null)}>
            Discard Image
          </Button>
          <Button icon="check-bold" mode="contained" buttonColor={theme.colors.primary} onPress={handleCreateIssue}>
            Create Issue
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AddIssueScreen;
