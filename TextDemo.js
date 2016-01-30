'use strict';

var React = require('react-native');
var REQUEST_URL = 'http://172.16.4.115/app/BGNetwork/demo.php';

var {
  AppRegistry,
  Text,
  StyleSheet,
} = React;

var TextDemo = React.createClass({
  getInitialState: function() {
    return {
      loaded: false,
    }
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      // console.log(responseData);
      this.setState({
        loaded: true,
      });
    })
    .done();
  },

  render: function() {
    if(this.state.loaded) {
    return (
        <Text style={styles.text} onPress={this.press}> {'loaded'} </Text>
      );
    }
    else {
      return (
        <Text style={styles.text} onPress={this.press}> not load </Text>
      );
    }
  },

  press: function() {
    // console.log('press function');
    this.setState({
      loaded: !this.state.loaded,
    });
    console.log(this.state.loaded);
  }
});

var styles = StyleSheet.create({
  text: {
    width: 100,
    height: 100,
    fontSize: 18,
    backgroundColor: '#F5F5F5',
    color: '#000000',
    top: 100,
    left: 100,
  },
});

// AppRegistry.registerComponent('TextDemo', () => TextDemo);
module.exports = TextDemo;
