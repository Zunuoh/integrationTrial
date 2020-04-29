import React from 'react';
import {Text,View, TextInput, TouchableOpacity} from 'react-native';

const SignupScreen = (props) =>{
    return(
        <View style={{flex:1, paddingLeft:20, paddingRight:20, backgroundColor:"#FDF1F2"}}>
           <View style={{paddingTop:"60%"}}>
               <Text style={{fontSize:40}}>Sign up</Text>
           </View>
           <View style={{paddingTop:30}}>
               <View>
               <Text>FULL NAME</Text>
               <TextInput style={{padding:10, borderBottomColor:"#E7DCDA", borderBottomWidth:1}}
               placeholder="Enter name"
               />
               </View>
              
               <View style={{paddingTop:30}}>
               <Text>EMAIL ADDRESS</Text>
               <TextInput style={{padding:10, borderBottomColor:"#E7DCDA", borderBottomWidth:1}}
               placeholder="Enter email address"
               />
               </View>
               
               <View style={{paddingTop:30}}>
               <Text>PASSWORD</Text>
               <TextInput style={{padding:10, borderBottomColor:"#E7DCDA", borderBottomWidth:1}}
               placeholder="Enter password"
               />
               </View>

              <View style={{paddingTop:30}}>
              <Text>CONFIRM PASSWORD</Text>
               <TextInput style={{padding:10, borderBottomColor:"#E7DCDA", borderBottomWidth:1}}
               placeholder="Enter password again"
               />
              </View>
           </View>
           <View style={{paddingTop:60}}>
               <TouchableOpacity style={{height:62, borderRadius:30, backgroundColor:"#EC65B0", display:"flex", justifyContent:"center", alignItems:"center"}}>
               <Text style={{color:"white"}}>SIGN UP</Text>
               </TouchableOpacity>

               <View style={{paddingTop:30, display:"flex", justifyContent:"center", alignItems:"center"}}>
                   <Text>Have an account?<Text onPress={()=>{props.navigation.push("Signin")}} style={{color:"#F5C1DB", paddingLeft:10}}>Log in</Text></Text>
               </View>
           </View>








        </View>
    );
}

export default SignupScreen;