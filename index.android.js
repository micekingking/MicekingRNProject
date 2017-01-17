/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ListView,
  BackAndroid,
  ToolbarAndroid,
} from 'react-native';

import nativeImageSource from 'nativeImageSource';
import MyScene from './pages/MyScene.js';
import MovieScreen from './pages/MovieScreen.js';
import SearchScreen from './pages/SearchScreen.js';

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().lenght > 1) {
    _navigator.pop();
    return true;
  }

  return false;
});

var RouteMapper = function (route, navigationOperations, onComponentRef) {
  _navigator = navigationOperations;
  if (route.name === 'search') {
    return (<SearchScreen navigator={navigationOperations} />
    );
  } else if (route.name === 'movie') {
    return (
      <View style={{ flex: 1 }}>
        <ToolbarAndroid
          actions={[]}
          navIcon={nativeImageSource({
            android: 'android_back_white',
            width: 96, height: 96
          })}
          onIconClicked={navigationOperations.pop}
          style={styles.toolbar}
          titleColor="white"
          title={route.movie.title} />

        <MovieScreen
          style={{ flex: 1 }}
          navigator={navigationOperations}
          movie={route.movie} />
      </View>
    );
  }
};

export default class MicekingProject extends Component {

  render() {
    var initialRoute = { name: 'search' };
    return (
      <Navigator
        style={styles.container}
        initialRoute={initialRoute}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={RouteMapper}
        />
    );
  }
}

//样式表
var styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    toolbar: {
      backgroundColor: '#a9a9a9',
      height: 56,
    },
  }
);

AppRegistry.registerComponent('MicekingProject', () => MicekingProject);