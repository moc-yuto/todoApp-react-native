/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Image
} from 'react-native';

class TodoView extends Component {
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

class Todo extends Component {
  _onPressButton() {
    Alert.alert('終わったわい！！')
  }
  render() {
    return (
      <Text style={styles.item} onPress={this._onPressButton}>
        {this.props.todo.id}: {this.props.todo.text}
      </Text>
    )
  }
}
// Todo.propTypes = {
//   todo: PropTypes.shape({
//     text: PropTypes.string.isRequired    
//   })
// }

class TodoList extends Component {

  render() {
    return (
      <FlatList
      data = {[{"id":1,"text":"皿洗い"},{"id":2,"text":"ゴミ捨て"}]}
      renderItem={({item}) => <Todo style={styles.item} todo={item} />}
      />
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <TodoView />
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center'
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
