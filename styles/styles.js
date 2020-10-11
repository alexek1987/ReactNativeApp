
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    color: '#000000',
    fontSize: 25,
    borderWidth: .3,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255, 255, 255, .1)',
    borderColor: '#000000'
  },
  headerTwo: {
    fontSize: 24,
    marginTop: 50
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
    justifyContent: 'center'
   },
   menuContainer: {
    height: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap'
   },
   text: {
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
   }

});
