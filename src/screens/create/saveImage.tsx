import React from "react";
import { View, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const images = [
  {
    title: 'The lizard is staring at something',
    image: 'https://images.pexels.com/photos/927497/pexels-photo-927497.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: '2 pandas accidentally got lost in my garden',
    image:
      'https://c1danghaihp.edu.vn/wp-content/uploads/2022/12/1671646095_410_Hinh-anh-Gau-Truc-cute-de-thuong-dep-nhat.jpg',
  },
  {
    title: 'I just took a picture of this creature, is it a dragon?',
    image:
      'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xMDQ1NjEzMy9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTcyNTczMjIwNX0.hf9VoE2E76CzGVDBxfrmRxMUxX_vvTHIiIUk-_LuRuU/img.jpg?width=400&height=209',
  },
  {
    title: 'I feel sad every time it rains',
    image: 'https://danviet.mediacdn.vn/thumb_w/650/296231569849192448/2023/1/24/base64-16745651304841054353937.png',
  },
];

const SaveImage = () => {

  const renderItem = ({ item } : {item : {title : string, image : string}}) => (
    <TouchableOpacity style={styles.imageContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.title}
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
