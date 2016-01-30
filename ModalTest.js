'use strict'
var React = require('react-native');
var View = React.View;
var StyleSheet = React.StyleSheet;
var Modal = React.Modal;
var TouchableHighlight = React.TouchableHighlight;
var Text = React.Text;
var Navigator = React.Navigator;

var NavigatorDemo = require('./NavigatorDemo');
var ListPageComponent = require('./ListViewDemo');

var ModalTest = React.createClass({
  getInitialState: function() {
    return {
      visible: false,
    }
  },

  _presentModal: function() {
    this.setState({
      visible: true,
    });
  },

  _disMissModal: function() {
    this.setState({
      visible: false,
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Modal visible={this.state.visible} animated={true}>
          <ListPageComponent isModal={true} disMissModal={this._disMissModal.bind(this, false)} />
        </Modal>

        <TouchableHighlight underlayColor='#A0A0A0' onPress={ () => this._presentModal()}
        style={styles.button}>
          <Text> presentModal </Text>
        </TouchableHighlight>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    marginTop: 64,
    backgroundColor: '#FFFFF',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
    // marginLeft: 20,
    // marginRight: 20,
  }
});

module.exports = ModalTest;
