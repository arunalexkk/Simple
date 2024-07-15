// screens/Settings.js
import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import {View, Text, StyleSheet, Button} from 'react-native';
import { change } from './redux/action';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = ({navigation}) => {
    const dispatch = useDispatch();
    const changeMode = mode => dispatch(change(mode));

  return (
    <SafeAreaView style={styles.container}> 
       <View style={styles.subcontainer}>
      <Button title='Dark Mode' color={"black"} onPress={()=>changeMode('dark')}></Button>
      <Button title='Light Mode' color={"grey"} onPress={()=>changeMode('light')}></Button>
    </View>
      <Button title='Logout' color={"red"} onPress={()=>navigation.navigate('LoginScreen')}></Button>
    </SafeAreaView>


  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Settings;