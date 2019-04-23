import React, {Component} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import styles from './styles';

class Home extends Component{
    render(){
        const {heading, input} = styles
        return(
            <View>
                <Text style={heading}>Login into the appliation</Text>
                <TextInput style={input}/>
                <TextInput style={input} secureTextEntry={true}/>

                <Button style={input} title={'Login'}/>
            </View>
        )
    }
}

export default Home