import React,{useState} from 'react'
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {fetchUsers} from '../redux/actions'

function Login({fetchUsers}) {

  const [username,setusername] =useState("admin");
  const [password,setpassword] =useState("goodluck");

    return (
        <View style={styles.container}>
          <Text style={{color:'#fff', fontSize:20}}>Welcome to my App</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Username"
            placeholderTextColor="#ffffff"
            value={username}
            onChangeText={(username) => setusername(username)}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            placeholderTextColor="#ffffff"
            secureTextEnter={true}
            value={password}
            onChangeText={(password) => setpassword(password)}
          />
          <TouchableOpacity style={styles.button} onPress={() => fetchUsers(username,password)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity> 
        </View>
      );
    }
      
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#455A64',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputBox: {
        width:300,
        height:50,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical:10,
      },
      buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center',
      },
      button:{
        width:300,
        marginVertical:10,
        backgroundColor:'#1c313a',
        borderRadius:25,
        paddingHorizontal:20,
        paddingVertical:15
      },
    });
  
  const mapDispatchToProps = dispatch => {
      return {
          fetchUsers: (username,password) => dispatch(fetchUsers(username,password))
      }
  }
  
  export default connect(null,mapDispatchToProps)(Login)
