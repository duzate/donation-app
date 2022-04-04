import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: theme.colors.primary,
    fontSize: 24
  },
  cash: {
    fontSize: 22,
    fontFamily: theme.fonts.text500
  }
})
