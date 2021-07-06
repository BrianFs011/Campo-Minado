import React from 'react';
import {View, StyleSheet} from 'react-native';

export default (props)=>{
  return(
    <View style={styles.container}>
      <View style={[styles.flagpole, props.bigger? styles.flagpoleBigger:null]}/>
      <View style={[styles.flag, props.bigger?styles.flagBigger:null] }/>
      <View style={[styles.base1, props.bigger?styles.base1Bigger:null]}/>
      <View style={[styles.base2, props.bigger?styles.base2Bigger:null]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:6
  },
  flagpole:{
    position: 'absolute',
    height:24,
    width:4,
    backgroundColor: "#222",
    marginLeft: 18,
  },
  flag:{
    position: 'absolute',
    height: 10,
    width: 12,
    backgroundColor: '#f22',
    marginLeft: 6,
  },
  base1:{
    position:'absolute',
    height:4,
    width:8,
    backgroundColor:'#222',
    marginTop:24,
    marginLeft: 16,
  },
  base2:{
    position:'absolute',
    height:4,
    width:10,
    backgroundColor: '#222',
    marginLeft:15,
    marginTop:28,
  },
  flagpoleBigger:{
    height:34,
    width:5,
    marginLeft:16,
  },
  flagBigger:{
    height: 10,
    width: 14,
    marginLeft:3
  },
  base1Bigger:{
    height: 4,
    width:12,
    marginTop:27,
    marginLeft:12,
  },
  base2Bigger:{
    height: 4,
    width:20,
    marginLeft: 8,
    marginTop: 30,
  }
})