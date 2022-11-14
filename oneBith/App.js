//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from '../oneBith/src/components/title'
import Form from './src/components/form';


export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5', //cinza claro
    paddingTop: 80
  },
});
