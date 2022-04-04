import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";

export const Wallet = () => {

  return (
    <View style={styles.container}>
      <Ionicons name="wallet" style={styles.icon} />
      <Text style={styles.cash}>
        $365.04
      </Text>
    </View>
  );
}
