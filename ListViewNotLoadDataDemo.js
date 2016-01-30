'use strict'
var React = require('react-native');
var {
  View,
  Text,
  ListView,
  AppRegistry,
  StyleSheet,
} = React;

var DataArray = ["row1", "row2", "row3", "row4", "row5", "row6", "row7"];

var ListViewNotLoadDataDemo = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: function(row1, row2) {
          return row1 !== row2;
        },
      })
    }
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(DataArray),
    });
  },

  render: function() {
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderCell}
      />
    );
  },

  renderCell: function(data) {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>{data}</Text>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  listView: {
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  separator: {
    height: 1.0,
    backgroundColor: '#A0A0A0'
  },
  text: {
    fontSize: 18,
  }
});

module.exports = ListViewNotLoadDataDemo;
// AppRegistry.registerComponent('ListViewNotLoadDataDemo', () => ListViewNotLoadDataDemo);
