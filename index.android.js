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
  Navigator,
  ListView,
} from 'react-native';

import MyScene from './pages/MyScene.js';

//定义格式
var MOCKED_MOVIES_DATA = [
  {title: '标题', year:'2015', posters:{thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class MicekingProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movies: null,//初始化state变量值

        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),

        loaded: false,
    };

    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
          //注意这里使用this, 为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
          this.setState({
            movies: responseData.movies,
            dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
            loaded: true,
          });
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
        throw error;
      });

  }

renderLoadingView(movie) {
  return (
      <View style={styles.container}>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
    );
}

renderMovie(movie) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: movie.posters.thumbnail}}
        style={styles.thumbnail}/>
    
    <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
    </View>

    </View>
  );
}

  render() {
    if(!this.state.movies) {
      return this.renderLoadingView();
    } 

    //使用listview展示数据
    //var movie = this.state.movies[0];
    //return this.renderMovie(movie);

    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderMovie}
        style = {styles.ListView}/>
    );


    //let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
    // var movie = MOCKED_MOVIES_DATA[0];
    // return (
    //   <View style={styles.container}>
    //     <Image source={{uri: movie.posters.thumbnail}}
    //      style={styles.thumbnail}/>

    //   <View style={styles.rightContainer}>
    //     <Text style={styles.title}>{movie.title}</Text>
    //     <Text style={styles.year}>{movie.year}</Text>
    //   </View>
    //   </View>
    // );
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

  ListView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
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