import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { Button } from "../Button";

import { styles } from "./style";


export const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <TextInput style={styles.input} placeholder='Type something.....' selectionColor={theme.colors.primary} />
        <View style={styles.buttonContainer}>
          <Button title="Search" onPress={() => {
            console.log('Search');
          }} />
        </View>
      </View>
    </View >
  )
}
