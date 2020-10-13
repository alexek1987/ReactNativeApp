
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    color: '#000000',
    fontSize: 20,

    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: -169

  },
  headerTwo: {
    fontSize: 18,
    marginTop: 140,
    alignItems: 'flex-start',
    marginLeft: 6,

  },
  pagesHeader: {
    fontSize: 20
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
   overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47, 163, 218, .4)'

  },
  top: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  menuContainer: {
    height: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  text: {
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
});
