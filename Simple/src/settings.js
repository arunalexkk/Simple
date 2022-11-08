// screens/Settings.js
import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import {View, Text, StyleSheet, Button} from 'react-native';
import { change } from './redux/action';

const Settings = () => {
    const dispatch = useDispatch();
    const changeMode = mode => dispatch(change(mode));

  return (
    <View style={styles.container}>
      <Button title='Dark Mode' color={"black"} onPress={()=>changeMode('dark')}></Button>
      <Button title='Light Mode' color={"grey"} onPress={()=>changeMode('light')}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Settings;