import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(val) => setPassword(val)}
      />
      {password.length < 4 ? (
        <Text style={styles.errorStyle}>Password must be 4 characters</Text>
      ) : null}
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
  errorStyle: {
    fontSize: 18,
    marginLeft: 15,
    color: "red",
  },
});

export default TextScreen;
