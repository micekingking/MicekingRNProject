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

export default class MicekingProject extends Component {
  render() {

    let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};

    return (
       <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

        <Image source={pic} style={{width: 193, height:110}}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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