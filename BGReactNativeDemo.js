'use strict'

var React = require('react-native');
var {
  View,
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = React;

// console.log("&&&&&&&&&&&&&&&&");
// console.log(React);

var MainContentPage = require('./BGMainContentPage');

var BGReactNativeDemo = React.createClass({
  render: function() {
    return (
      <NavigatorIOS style={styles.container} titleTextColor={'#202020'}
        initialRoute={{
          title: 'BGReactNativeDemo',
          component: MainContentPage,
          translucent: false,
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
  }
});

// console.log("&&&&&&&&&&&&&&&&");
// console.log(BGReactNativeDemo);

// AppRegistry.registerComponent('BGReactNativeDemo', () => BGReactNativeDemo);
AppRegistry.registerComponent('BGReactNativeDemo', function() {
  return BGReactNativeDemo
});
module.exports = BGReactNativeDemo;
