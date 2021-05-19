import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [inputText, setInputText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={inputText}
        onChangeText={(val) => setInputText(val)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 40,
    margin: 15,
    borderColor: "grey",
    borderWidth: 1,
  },
});

export default TextScreen;
