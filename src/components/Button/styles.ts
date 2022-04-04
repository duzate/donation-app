import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    color: theme.colors.white,
    fontFamily: theme.fonts.text700
  }
})
