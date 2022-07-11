import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <Register />    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
