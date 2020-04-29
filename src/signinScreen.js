import React from 'react';
import {Text,View, TextInput, TouchableOpacity} from 'react-native';

const SigninScreen = (props) =>{
    return(
        <View style={{flex:1, paddingLeft:20, paddingRight:20, backgroundColor:"#FDF1F2"}}>
        <View style={{paddingTop:"60%"}}>
            <Text style={{fontSize:40}}>Sign in</Text>
        </View>
        <View style={{paddingTop:30}}>
            <View>
            <Text>USERNAME OR EMAIL</Text>
            <TextInput style={{padding:10, borderBottomColor:"#E7DCDA", borderBottomWidth:1}}
            placeholder="Enter name"
            />
            </View>
            
            <View style={{paddingTop:30}}>
            <Text>PASSWORD</Text>
            <TextInput style={{padding:10, borderBottomColor:"#E7DCDA", borderBottomWidth:1}}
            placeholder="Enter password"
            />
            </View>
        </View>
        <View style={{paddingTop:90}}>
            <TouchableOpacity style={{height:62, borderRadius:30, backgroundColor:"#EC65B0", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"white"}}>SIGN IN</Text>
            </TouchableOpacity>

            
        </View>








     </View>
    );
}

export default SigninScreen;