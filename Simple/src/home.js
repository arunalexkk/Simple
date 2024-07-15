import React ,{useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector ,useDispatch} from 'react-redux';
import { change } from './redux/action';

const Home = () => {

    const modeState = useSelector(state => state.HomeReducer);
    const [mode,changeMode] =useState("light")

    useEffect(() => {
        console.log('render!',modeState);
        changeMode(modeState.modeState)
        return () => console.log('unmounting...');
      })
    

  return (
    <View style={[styles.container,{ backgroundColor: mode =='dark' ? "black" : "white"}]}>
      <Text style={[styles.hometext,{color: mode =='dark' ? "white" : "black"}]}>{modeState?modeState.modeState:"No msg"}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hometext:{
    color:"white"
  }
});
export default Home;