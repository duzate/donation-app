import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 56,
    backgroundColor: 'rgba(205,205,205,0.2)',
    borderRadius: 12,
    marginTop: '7%'
  },
  searchView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10
  },
  input: {
    flex: 1,
    height: 36,
    width: '100%',
    marginRight: 10,
    color: theme.colors.heading,
  },
  buttonContainer: {
    width: '25%',
  },
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
