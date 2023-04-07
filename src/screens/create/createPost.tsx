import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Image } from "react-native";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleChooseImage = async () => {

  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.imagePicker}>
        <Button title="Choose Image" onPress={handleChooseImage} />
        {image && <Image source={{ uri: image }} style={styles.previewImage} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%",
  },
  imagePicker: {
    alignItems: "center",
    marginBottom: 10,
  },
  previewImage: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});

export default CreatePost;
