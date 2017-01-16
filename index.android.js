/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';

import MyScene from './pages/MyScene.js';

//定义格式
var MOCKED_MOVIES_DATA = [
  {title: '标题', year:'2015', posters:{thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

export default class MicekingProject extends Component {
  render() {

    //let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Image source={{uri: movie.posters.thumbnail}}
         style={styles.thumbnail}/>

      <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  rightContainer: {
    flex: 1,
  },

  thumbnail: {
    width: 53,
    height: 81,
  },

  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },

  year: {
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('MicekingProject', () => MicekingProject);

/**
 *       <Navigator initialRoute={{ title: 'My Initial Scene', index : 0}}
        renderScene={(route, navigator) => {return <MyScene title={route.title}

          //Function to call when a new scene should be displayed
          onForward={() => {
            const nextIndex = route.index + 1;
            navigator.push({
              title: 'Scene ' + nextIndex,
              index: nextIndex,
            });
          }}
        
        //function to call to go back to the previous scene
        onBack={() => {
          if(route.index > 0) {
            navigator.pop();
          }
        }}
        
         />}}/>
 */