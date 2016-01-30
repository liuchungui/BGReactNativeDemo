'use strict'

var React = require('react-native');
var {
  ListView,
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
} = React;

var DemoNameArray = ["Text", "ListView", "NavigatorIOS", "Modal", "Navigator"];

var BGMainContentPage = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    }
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    // var dataArr = DemoNameArray;
    // console.log(dataArr);
    console.log(this.state.dataSource);
    /*
    此处是设置状态值，需要传递一个对象过去
    */
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(DemoNameArray),
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
    // console.log("#####renderCell: "+data);
    return (
      <TouchableHighlight onPress={() => this.onPressCell(data)}>
      <View>
        <View style={styles.container}>
          <Text>{data}</Text>
        </View>
        <View style={styles.separator} />
      </View>
      </TouchableHighlight>
    );
  },

  onPressCell: function(data) {
    console.log("点击cell");
    var index = DemoNameArray.indexOf(data);
    var component;
    console.log(index);
    // alert(index);
    switch (index) {
      case 0: {
        component = require('./TextDemo');
      }
        break;
      case 1: {
        component = require('./ListViewNotLoadDataDemo');
      }
        break;
      case 2:
        break;
      case 3: {
        // component = require('./ModalDemo');
        component = require('./ModalTest');
      }
        break;
      case 4: {
        component = require('./NavigatorDemo');
      }
        break;
      default:
    }
    this.props.navigator.push({
      title: data,
      component: component
    });
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',

    //点击颜色
    backgroundColor: '#F5FCFF',
    height: 80,
    padding: 10,
  },
  listView: {
    flex: 1,
    flexDirection: 'column',
    // marginTop: 64,
    // marginBottom: 64,
    // backgroundColor: '#FF0000',
  },
  view: {

  },
  text: {
    height: 100,
  },
  separator: {
    height: 0.5,
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
  }

});

module.exports = BGMainContentPage;
