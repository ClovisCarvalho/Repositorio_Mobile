import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';

class App extends Component {
  render(){
    let img = 'https://sujeitoprogramador.com/steve.png';
    let nome = 'Jobinhu'
    return(
      <View>
        <Text>Olá Mundo!</Text>
        <Text style={{color: '#836FFF', fontSize: 25, margin: 10}}>Quem está de niver amanhã ? 19?</Text>

        <Image
      source={{uri: img }}
      style={{width: 250, height:250}}
      
      />
      <Text style={{fontSize:25}}> {nome} </Text>

      </View>
      
    );
  }
}

export default App;