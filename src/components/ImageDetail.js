import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} style={styles.imageSource} />
      <Text style={styles.textStyle}>{title}</Text>
      <Text style={styles.textStyle}>Image - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  imageSource: {
    width: 100,
    height: 100,
  },
});

export default ImageDetail;
