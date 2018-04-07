import React, { Component } from 'react';
import { StyleSheet, Image, View, ScrollView, Text } from 'react-native';

class PropertyView extends Component {
  static navigationOptions = {
    title: 'Описание'
  };

  render() {
    const { params } = this.props.navigation.state;
    const { title, price, description, image } = params.property;

    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={image} resizeMode="contain" />
        <View style={styles.heading}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.separator} />
        </View>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#F8F8F8'
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});

export default PropertyView;
