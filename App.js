import React from 'react';
import { StyleSheet} from 'react-native';
import { BottomTab } from './src/screens/BottomTabs';

export default function App({ navigation }) {
  
  return (
    <BottomTab/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
