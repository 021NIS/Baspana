import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

class ListItem extends Component {
  onPress = () => {
    this.props.onPressItem(this.props.index);
  };

  render() {
    const item = this.props.item;
    return (
      <TouchableHighlight onPress={this.onPress} underlayColor="#dddddd">
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.title} numberOfLines={1}>
                {item.title}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

export default ListItem;
