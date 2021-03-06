import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Flag from './Flag';

export default props =>{
  return(
    <View style={styles.container}>
      <View style={styles.flagContainer}/>
        <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
          <Flag bigger/>
          <Text style={styles.flagLeft}> ={props.flagsLeft}</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
          <Text style={styles.buttonLabel}>Novo jogo</Text>
        </TouchableOpacity>   
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  flagContainer:{
    flexDirection: 'row',
  },
  flagButton:{
    marginTop:12,
    minWidth: 30,
  },
  flagLeft:{
    fontSize:30,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  button:{
    marginTop: 20,
    backgroundColor: '#999',
  },
  buttonLabel:{
    fontSize: 20,
    color:'#ddd',
    fontWeight: 'bold',
  }
})