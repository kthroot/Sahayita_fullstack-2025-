import React, { useState, useEffect, useContext } from "react";
import { ScrollView } from "react-native";
import { TextInput, Button, Title, Snackbar } from "react-native-paper";
// import { doc, getDoc, setDoc } from "firebase/firestore"; 
// import { db } from "./../../config/firebaseConfig"; 
// import { AuthContext } from "../../state/AuthProvider";

const EditProfileScreen = () => {
  // const { user } = useContext(AuthContext); 
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Fetch user profile data when the component is mounted
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     if (user && user.uid) {
  //       try {
  //         const userDocRef = doc(db, "users", user.uid); 
  //         const userDoc = await getDoc(userDocRef);

  //         if (userDoc.exists()) {
  //           const data = userDoc.data();
  //           setName(data.name || "");
  //           setAge(data.age ? data.age.toString() : ""); // Convert age to string for TextInput
  //           setAboutMe(data.aboutMe || "");
  //         } else {
  //           setSnackbarMessage("User profile not found.");
  //           setSnackbarVisible(true);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching profile data:", error.message);
  //         setSnackbarMessage("Failed to load profile data.");
  //         setSnackbarVisible(true);
  //       }
  //     }
  //   };

  //   fetchUserData();
  // }, [user]);

  // Handle profile update (save)
  // const handleSave = async () => {
  //   if (!user || !user.uid) {
  //     setSnackbarMessage("User not authenticated.");
  //     setSnackbarVisible(true);
  //     return;
  //   }

  //   // Validate inputs
  //   if (!name || !age || !aboutMe) {
  //     setSnackbarMessage("Please fill in all fields.");
  //     setSnackbarVisible(true);
  //     return;
  //   }

  //   const parsedAge = parseInt(age);
  //   if (isNaN(parsedAge)) {
  //     setSnackbarMessage("Age must be a valid number.");
  //     setSnackbarVisible(true);
  //     return;
  //   }

  //   const userDocRef = doc(db, "users", user.uid); 
    
  //   try {
  //     // Save or update profile information
  //     await setDoc(userDocRef, {
  //       name,
  //       age: parsedAge,
  //       aboutMe,
  //     }, { merge: true }); // Merge updates with existing fields
      
  //     setSnackbarMessage("Profile updated successfully!");
  //   } catch (error) {
  //     console.error("Error updating profile:", error.message);
  //     setSnackbarMessage("Error updating profile. Please try again.");
  //   } finally {
  //     setSnackbarVisible(true);
  //   }
  // };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Title>Edit Profile</Title>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={{ marginBottom: 15 }}
      />
      <TextInput
        label="Age"
        value={age}
        keyboardType="numeric"
        onChangeText={setAge}
        style={{ marginBottom: 15 }}
      />
      <TextInput
        label="About Me"
        value={aboutMe}
        onChangeText={setAboutMe}
        multiline
        numberOfLines={4}
        style={{ marginBottom: 15 }}
      />
      <Button mode="contained" onPress={{}}>
        Save Changes
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        {snackbarMessage}
      </Snackbar>
    </ScrollView>
  );
};

export default EditProfileScreen;
