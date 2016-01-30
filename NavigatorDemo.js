'use strict'
var React = require('react-native');
var {
  Navigator,
  StyleSheet,
  AppRegistry,
  View,
  Text,
  NavigationBarRouteMapper,
} = React;

var ListPageComponent = require('./ListViewDemo');

var NavigatorDemo = React.createClass({
  getRouteMapper: function() {

  },
  render: function() {
    return (
      <Navigator
        initialRoute={
          {name: 'My First Scene', index: 0, component: ListPageComponent}
        }
        navigationBar={
          <Navigator.NavigationBar
          />
        }
        renderScene={(route, navigator) =>
          <route.component
          title={route.title}
          navigator={navigator}
          name={route.name}
          onForward={() => {
            var nextIndex = route.index + 1;
            navigator.push({
              name: 'Scene ' + nextIndex,
              index: nextIndex,
            });
          }}
          onBack={() => {
            if (route.index > 0) {
              navigator.pop();
            }
          }}
          />
        }
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#FF0000',
  }
});

AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
module.exports = NavigatorDemo;
