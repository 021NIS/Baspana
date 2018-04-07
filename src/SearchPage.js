import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const houses = [
  {
    city: 'london',
    title: 'Ауезова 165',
    price: '20 000 000 тг',
    description: 'Прекрасный дом'
  },
  {
    city: 'london',
    title: 'Жамбыла 159',
    price: '30 000 000 тг',
    description: 'Магазин рядом'
  },
  {
    city: 'almaty',
    title: 'Дом в Алматы',
    price: '10 000 000 тг',
    description: 'Отличное КСК'
  }
];

class SearchPage extends Component {
  static navigationOptions = {
    title: 'Baspana'
  };

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london'
    };
  }

  onSearchTextChanged = event => {
    this.setState({ searchString: event.nativeEvent.text });
  };

  onSearchPressed = () => {
    this.props.navigation.navigate('Results', {
      listings: houses.filter(house =>
        house.city.includes(this.state.searchString.toLowerCase())
      )
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Найдите дом своей мечты!</Text>
        <Text style={styles.description}>Искать по городу</Text>
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged}
            placeholder="Искать по имени города"
          />
          <Button
            onPress={this.onSearchPressed}
            color="#48BBEC"
            title="Найти"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  }
});

export default SearchPage;
