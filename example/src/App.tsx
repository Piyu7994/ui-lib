import { View, StyleSheet, Platform, ToastAndroid } from 'react-native';
import BasicButton from '../../src/components/atoms/BasicButton';

export default function App() {
  return (
    <View style={styles.container}>
      <BasicButton
        text="Click Here"
        onClick={() => {
          if (Platform.OS === 'android')
            ToastAndroid.show('Button Clicked', ToastAndroid.SHORT);
          else console.log('Clicked');
        }}
        styles={styles.box}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 'auto',
    height: 'auto',
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'pink',
  },
});
