import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './ListItem';

class SearchResults extends Component {
  static navigationOptions = {
    title: 'Результаты'
  };

  onPressItem = index => {
    console.log('Pressed row: ', index);
    // TODO: Перенаправить в новый компонент
  };

  keyExtractor = (item, index) => index;

  renderItem = ({ item, index }) => (
    <ListItem item={item} index={index} onPressItem={this.onPressItem} />
  );

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { params } = this.props.navigation.state;
    return (
      <FlatList
        data={params.listings}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        separator={this.renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});

export default SearchResults;
