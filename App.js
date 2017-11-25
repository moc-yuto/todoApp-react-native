/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Demo extends Component {
  render() {
    let pic = {
      uri: 'https://nekogazou.com/wp-content/uploads/2015/10/4ab5442a6d977922bcbe8850ff4b40bc.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
          ゆうとだよーん！！
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Greeting name='Yuto' />
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

class Todo extends Component {
  render(){
    return (
      <View>
        <Text style={styles.title}>
          Todo App
        </Text>
        <TodoList />
      </View>
    )
  }
}

class TodoList extends Component {
  _onPressButton() {
    Alert.alert('終わった！！')
  }
  render() {
    return (
      <FlatList
      data = {[{"key":"皿洗い"},{"key":"ゴミ捨て"}]}
      renderItem={({item}) => <Text style={styles.item} onPress={this._onPressButton}>{item.key}</Text>}
      />
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <Todo />
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',

  },
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
