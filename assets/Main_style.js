import { StyleSheet, Dimensions} from 'react-native';

const x = Math.round(Dimensions.get('window').width);
const y = Math.round(Dimensions.get('window').height);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: x,
    height: y
  },
  wallpaper: {
    width:x,
    height:y
  },
  form: {
    position:'absolute',
    top: y/4,
    paddingLeft: 20,
    width:x/1.1,
    height: y,
    // background: 'rgba(255,255,255, 0.8)'
  }
});
