import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Avenir' || 'System',
  },
  general: {
    fontFamily: 'Avenir' || 'System',
  },
  spacer: {
    padding: 5,
  },
  bigSpacer: {
    padding: 10,
  },
  logo: {
    width: 170,
    height: 170,
  },
  footer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    bottom: 28,
    padding: 5,
  }
});