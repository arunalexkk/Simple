
import React, { useState ,useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,Pressable,
  KeyboardAvoidingView,
} from 'react-native';
 
const DATA = ['1234','123456','123']
//   {
//     id: 'vineetha',
//     name: 'vineetha',
//   },
//   {
//     id: 'anita',
//     name: 'anita',
//   },
//   {
//     id: 'manu',
//     name: 'manu',
//   },
// ];
 
const LoginScreen = ({navigation}) => {
const [username,setusername] = useState() 
const [pass,setpass] = useState() 

useEffect(() => {

  return () => {
    // setusername(null),
    // setpass(null)
  }
})

  const login_Names =(name)=>{
    console.log("data",name)
 
      return DATA.find(data => data == name ?navigation.navigate('Tab')
        :alert("Invalid password"));
     }; 

 
  return (
    <View style={styles.dataBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
             
            </View>
            <View style={styles.Header}>
              <TextInput
                style={styles.dataStyle}
                onChangeText={(text) =>
                  setusername(text)
                }
                placeholder="Name"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.Header}>
              <TextInput
                style={styles.dataStyle}
                onChangeText={(text) =>
                    setpass(text)
                }
                autoCapitalize="none"
                placeholder="Password"
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                returnKeyType="next"
              />
            </View>
            
            <Pressable
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={()=>login_Names(pass)}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </Pressable>
           
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;
 
const styles = StyleSheet.create({
  dataBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  Header: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: 'red',
    borderWidth: 0,
    color: '#0000',
    borderColor: '#red',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  dataStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },

});
