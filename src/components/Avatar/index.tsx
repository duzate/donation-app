import React from "react";
import { Image, View } from "react-native";
import { styles } from "./style";

export const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.container} source={{ uri: 'https://github.com/duzate.png' }} />
    </View>
  )
}
