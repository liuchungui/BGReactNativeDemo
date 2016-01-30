'use strict';

var React = require('react-native');
var ImageDemo = require('./ImageDemo');
var REQUEST_URL = 'http://localhost/app/BGNetwork/demo.php';

var {
  AppRegistry,
  Image,
  ListView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} = React;

var ListViewDemo = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    }
  },

  componentDidMount: function() {
    console.log("componentDidMount *****");
    // console.log(this.getInitialState);
    // console.log("$$$$$$$$$$$$$$");
    // console.log(typeof(this.render()));
    this.fetchData();
  },

  fetchData: function() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      // console.log(responseData);
      // console.log("fetchData******");
      // console.log(this.state.dataSource);
      // console.log(responseData.result.list);
      /**
      取出list数组中的数据
      */
      var listArr = responseData.result.list;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(listArr),
        loaded: true,
      });
    })
    .done();
  },

  render: function() {
    //加载完数据，则渲染列表视图
    if(this.state.loaded) {
      //是否为模态弹出，模态弹出，则顶部显示关闭按钮
      if(this.props.isModal) {
        return (
          <View style={styles.outCotainer}>
            <TouchableHighlight style={styles.button} underlayColor='#E0E0E0' onPress={() => this._closeAction()}>
              <Text>close</Text>
            </TouchableHighlight>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderContentCell}
            automaticallyAdjustContentInsets={true}
            style={styles.listView}
            />
          </View>
        );
      }
      else {
        return (
          <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderContentCell}
          automaticallyAdjustContentInsets={true}
          style={styles.listView}
          />
        );
      }
    }
    else {
      return this.renderLoadingView();
    }
  },

  renderLoadingView: function() {
    return (
      <View style={styles.loading}>
        <Text> Loading ... </Text>
      </View>
    );
  },

  renderContentCell: function(model) {
    // console.log(model);
    var sex = '男';
    sex = model.sex == 1 ? '男' : '女';
    sex = '性别: ' + sex;
    return (
      <TouchableHighlight onPress={() => this.pressRow(model)}>
        <View>
          <View style={styles.container}>
            <Text style={styles.name}>{'姓名: ' + model.name}</Text>
            <Text style={styles.age}>{'年龄: ' + model.age}</Text>
            <Text style={styles.sex}>{sex}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  },

  pressRow: function(model) {
    console.log('点击某一个cell');
    console.log(this.props.test);
    this.props.navigator.push({
      title:'图片',
      component: ImageDemo,
    });
  },

  _closeAction: function() {
    this.props.disMissModal();
  },
});

var styles = StyleSheet.create({
  outCotainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFF',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  innerContainer: {
    flex: 1,
    // height: 100,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#FF0000',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',

    //点击颜色
    backgroundColor: '#F5FCFF',
    height: 100,
    padding: 10,
  },

  loading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  listView: {
    flex: 1,
    flexDirection: "column",
    // marginTop: 64,
    // marginBottom: 64,
    backgroundColor: '#FF0000',
  },
  text: {
    width: 100,
    height: 100,
    fontSize: 18,
    backgroundColor: '#F5F5F5',
    color: '#000000',
    top: 100,
    left: 100,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  age: {
    // height: 30,
  },
  name: {
    // height: 30,
  },
  sex: {
    // height: 30,
  },
  closeText: {

  },
  button: {
    flex: 0,
    height: 64,
    flexDirection: 'column',
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
module.exports = ListViewDemo;
