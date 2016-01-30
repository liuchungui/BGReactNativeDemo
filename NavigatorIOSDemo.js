'use strict';

var React = require('react-native');
var {
  View,
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
} = React;

var listPageComponent = require('./ListViewDemo');
// var imageComponent = require('./ImageDemo');

var NavigatorDemo = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        // translucent={false}
        titleTextColor={'#FF0000'}
        initialRoute={{
          title: 'ListViewDemo',
          component: listPageComponent,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    //此处设置flex为1才显示
    flex: 1,
    backgroundColor: 'white',
  },
});

// AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
module.exports = NavigatorDemo;
