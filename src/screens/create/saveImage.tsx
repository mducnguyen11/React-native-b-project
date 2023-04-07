import React from "react";
import { View, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const images = [
  { id: "1", uri: "https://images.pexels.com/photos/927497/pexels-photo-927497.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: "2", uri:  "https://images.pexels.com/photos/1068554/pexels-photo-1068554.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: "3", uri: "https://images.pexels.com/photos/2578370/pexels-photo-2578370.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=252&fit=crop&h=408" },
  { id: "4", uri: "https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2" },
  { id: "5", uri: "https://images.pexels.com/photos/1904354/pexels-photo-1904354.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2" },
  { id: "6", uri: "https://media.istockphoto.com/id/1170804921/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-r%C3%B9a-v%E1%BB%9Bi-tr%C6%B0%E1%BB%9Dng-c%C3%A1.jpg?b=1&s=612x612&w=0&k=20&c=KJdt2nxHUjVjZ0BGp3MAdEVNnlAlfhWBpLVImaZXznw=" },
];

const SaveImage = () => {

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  imageContainer: {
    flex: 1,
    margin: 2.5,
    aspectRatio: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default SaveImage;
