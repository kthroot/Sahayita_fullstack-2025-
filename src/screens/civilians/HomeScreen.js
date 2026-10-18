import { View, StyleSheet, ScrollView, Alert, Image } from "react-native";
import React, { useState, useCallback } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Text, Avatar, Button, Card, FAB } from "react-native-paper";
import { collection, getDocs } from "firebase/firestore";
import { db, logoutUser } from "../../config/firebaseConfig";
import { useFocusEffect } from "@react-navigation/native"; // Auto-refresh feature

// IssueCardComponent
const IssueCardComponent = ({ post }) => {
  return (
    <Card style={{ paddingHorizontal: wp(3), marginHorizontal: wp(2), marginTop: wp(4) }}>
      <Card.Title
        title={post.title}
        subtitle={post.userName || "Anonymous"}
        titleStyle={{ fontWeight: "bold" }}
        subtitleStyle={{ fontStyle: "italic" }}
        left={(props) =>
          post.imageBase64 ? (
            <Avatar.Image {...props} source={{ uri: `data:image/jpeg;base64,${post.imageBase64}` }} />
          ) : (
            <Avatar.Icon {...props} icon="image-off" />
          )
        }
      />
      <Card.Content>
        <Text variant="titleLarge">{post.title}</Text>
        <Text variant="bodyMedium">{post.description}</Text>
      </Card.Content>
      {post.imageBase64 && (
        <Card.Cover
          source={{ uri: `data:image/jpeg;base64,${post.imageBase64}` }}
          style={{ marginVertical: wp(3) }}
        />
      )}
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

// HomeScreen Component
const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]); // State to store fetched posts

  const handleLogOut = async () => {
    try {
      await logoutUser();
      console.log("Logged Out Successfully");
    } catch (error) {
      Alert.alert("Error occurred", error.message);
    }
  };

  // Fetch posts from Firestore
  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const fetchedPosts = querySnapshot.docs.map((doc) => doc.data()); // Extract data
      setPosts(fetchedPosts);
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  // Auto-refresh the screen when navigating back
  useFocusEffect(
    useCallback(() => {
      fetchPosts();
    }, [])
  );

  return (
    <>
      <ScrollView contentContainerStyle={{}}>
        {/* Dynamically render IssueCardComponent for each post */}
        {posts.map((post, index) => (
          <IssueCardComponent key={index} post={post} />
        ))}
      </ScrollView>

      <FAB icon="plus" style={styles.fab} onPress={() => navigation.navigate("AddIssueScreen")} />
      <FAB icon="exit-run" style={styles.fabLeft} onPress={handleLogOut} />
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 20,
  },
  fabLeft: {
    position: "absolute",
    margin: 16,
    left: 0,
    bottom: 20,
  },
});

export default HomeScreen;
