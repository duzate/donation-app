import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: theme.colors.primary07,
    width: 68,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  check: {
    width: 68,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    marginTop: 4,
    fontSize: 12
  }
})
