import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  shadow: {
    borderRadius: 18,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    marginBottom: 30
  },
  container: {
    height: 258,
    flex: 1,
    alignItems: 'center',
    borderRadius: 20,
  },
  imageContainer: {
    width: '100%',
    height: 173,
    borderRadius: 20,
  },
  title: {
    width: '80%',
    fontFamily: theme.fonts.text500,
    color: theme.colors.black,
    fontSize: 17,
    marginTop: 8
  },
  foundationContainer: {
    width: '80%',
    height: 29,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7
  },
  foundationTitle: {
    fontFamily: theme.fonts.text600,
    color: theme.colors.black,
    fontSize: 15,
    marginLeft: 6
  },
  buttonContainer: {
    width: 84
  }
})
