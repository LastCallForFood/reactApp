import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CardList } from 'react-native-card-list';

export default class OfferListScreen extends React.Component {

  static navigationOptions = {
    title: 'Available Meals',
  };

  render() {
    return (
      <View style={styles.container}>
        <CardList cards={cards} />
      </View>
    );
  }
}

const cards = [
  {
    id: '0',
    title: 'Starry Night',
    picture: require('../../assets/images/last-call-logo.png'),
    content: <Text>Starry Night</Text>
  },
  {
    id: '1',
    title: 'Wheat Fiel',
    picture: require('../../assets/images/last-call-logo.png'),
    content: <Text>Wheat Field with Cypresses</Text>
  },
  {
    id: '2',
    title: 'Bedroom in Arles',
    picture: require('../../assets/images/last-call-logo.png'),
    content: <Text>Bedroom in Arles</Text>
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
