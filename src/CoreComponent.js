/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {View, Text, Image, ScrollView, TextInput} from "react-native";
import cat from "./assets/image/cat.png";

const CoreComponent = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View style={{flexDirection: "row"}}>
        <Text>Some more text</Text>
        <Image source={cat} style={{width: 200, height: 200}} />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default CoreComponent;
