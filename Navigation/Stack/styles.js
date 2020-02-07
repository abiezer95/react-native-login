import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'


export default styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 22,
    flex: 1,
    justifyContent: 'center',
    width: wp('90%')
  },
  icon: {
    marginHorizontal: wp('5%')
  }
})
