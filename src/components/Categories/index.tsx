import React from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export const Category = ({ title, icon: Icon, checked = false, ...rest }: Props) => {
  return (
    <RectButton {...rest} >
      <View style={styles.container}>
        <View style={checked ? styles.checked : styles.check}>
          <Icon color={checked ? theme.colors.white : theme.colors.primary} />
        </View>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </RectButton>
  )
}
