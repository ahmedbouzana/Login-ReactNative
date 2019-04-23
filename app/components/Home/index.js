import React, {Component} from 'react'
import {View, Text, TextInput, Button, Alert} from 'react-native'
import styles from './styles';

class Home extends Component{

state={username:"", password:""}

checkLogin(){
    const {username, password} = this.state
    if(username == 'admin' && password == 'admin'){
        console.warn("Login is Ok")
        this.props.navigation.navigate('dashboard')
    }else{
        Alert.alert('Error', 'Username/Password mismatch', [{text:"Okay"}])
    }
}

    render(){
        const {heading, input, parent} = styles
        return(
            <View style={parent}>
                <Text style={heading}>Login into the appliation</Text>
                <TextInput style={input} placeholder="Username" onChangeText={text=> this.setState({username:text})}/>
                <TextInput style={input} secureTextEntry={true} placeholder="Password" onChangeText={text=> this.setState({password:text})}/>

                <Button style={input} title={'Login'} onPress={_ => this.checkLogin()}/>
            </View>
        )
    }
}

export default Home