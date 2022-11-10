
import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,Pressable,
  KeyboardAvoidingView,
} from 'react-native';
 

 
const LoginScreen = ({navigation}) => {

 
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
                  console.log(text)
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
                    console.log(text)
                }
                placeholder="Password"
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                returnKeyType="next"
              />
            </View>
            
            <Pressable
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={()=>navigation.navigate('Tab')}>
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
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },

});
