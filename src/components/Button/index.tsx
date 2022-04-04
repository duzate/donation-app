import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string,
}

export const Button = ({ title, ...rest }: Props) => {
  return (
    <TouchableOpacity  {...rest}>
      <LinearGradient colors={[theme.colors.primary, theme.colors.primary70]} style={styles.button}>
        <Text style={styles.title}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
