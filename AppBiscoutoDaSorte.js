import React, { Component } from 'react';
import {
  View,
   Text, 
   Image,
   TouchableOpacity,
   StyleSheet} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase : '',
      img: require('./srs/biscoito.png'),

    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
         'Siga os bons e aprenda com eles.', 
        'O bom-senso vale mais do que muito conhecimento.', 
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
    ];



  }

  quebraBiscoito() {

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./srs/biscoitoAberto.png')
    })
    
  }



render(){
    return(
      <View style={styles.container}>

      <Image 
      source={this.state.img}
      style={styles.img}
      />        

      <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={ styles.botao} onPress={ () => this.quebraBiscoito()} >
      <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
      </View>
        </TouchableOpacity>

      </View>
      );
    }

  }


export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
  },
  botao:{
    borderWidth: 2,
    borderRadius: 25,
    width: 230,
    height: 50,
    borderColor: '#dd7b22'
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})