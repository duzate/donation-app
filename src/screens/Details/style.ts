import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 365,
    borderRadius: 40,
    marginTop: 10,
    alignItems: 'center'
  },
  action: {
    width: '90%',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  background: {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(255,255,255,.5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  title: {
    width: '82%',
    fontFamily: theme.fonts.text500,
    color: theme.colors.black,
    fontSize: 18,
    marginTop: 15,
  },
  foundationContainer: {
    width: '82%',
    height: 29,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  foundationTitle: {
    fontFamily: theme.fonts.text600,
    color: theme.colors.black,
    fontSize: 18,
    marginLeft: 12,
  },
  description: {
    width: '82%',
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'justify',
    marginTop: 10
  },
  donateContainer: {
    width: '82%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  donate: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15
  },
  buttonContainer: {
    width: '82%',
    height: 56,
    bottom: '3%',
    position: 'absolute'
  }
})
