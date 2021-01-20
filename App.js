import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';

export default function App() {

  const [num, setNum] = useState(0);

  const onPressIncrement = () => {
    setNum(num + 1);
  }
  const onPressDecrement = () => {
    if (num > 0)
      setNum(num - 1);
  }
  const onPressReset = () => {
    setNum(0);
  }
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 40, color: 'white' }}>React Native</Text>
        <Text style={styles.btnTxt}>{num}</Text>
      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.btn} onPress={onPressDecrement}><Text style={styles.btnTxt}>Decrement</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onPressIncrement}><Text style={styles.btnTxt}>Increment</Text></TouchableOpacity>
      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.btn} onPress={onPressReset}><Text style={styles.btnTxt}>Reset</Text></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#483d8b',
    height: '100%'

  },
  btncontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'center',
  },
  btn: {
    flex: 1,
    backgroundColor: '#8a2be2',
    marginHorizontal: 5,
    padding: 5,
	alignItems: 'center',
	borderWidth:2,
	borderColor:'blue'
  },
  btnTxt: {
    color: 'white',
	fontSize: 25,
  }
});
