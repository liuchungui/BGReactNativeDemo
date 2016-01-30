'use strict';

var React = require('react-native');
var {
  View,
  Image,
  StyleSheet,
} = React;

var ImageDemo = React.createClass({
  render: function() {
    return (
      <View style={styles.view}>
        <Image source={require('./xingkong.jpeg')} style={styles.image} />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  view: {
    width: 300,
    height: 300,
  },
  image: {
    width: 300,
    height: 300,
  }
});

module.exports = ImageDemo;
