import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Tinder from './components/Tinder';

const mydata = [
  { id: 1, text: 'card 1', uri: 'https://source.unsplash.com/RDcEWH5hSDE/600*500' },
  { id: 2, text: 'card 2', uri: 'https://source.unsplash.com/pJqfhKUpCh8' },
  { id: 3, text: 'card 3', uri: 'https://source.unsplash.com/H601tyBZy8U/600*500' },
  { id: 4, text: 'card 4', uri: 'https://source.unsplash.com/CE9YG0_Mzlw' },
  { id: 5, text: 'card 5', uri: 'https://source.unsplash.com/-_C4UZRpoQc' },
  { id: 6, text: 'card 6', uri: 'https://source.unsplash.com/RfoISVdKM4U' },
];


class App extends React.Component {
  renderCard(item){
    return(
      <View style={{margin:10}} key={item.id}>
        <Card>
          <Card.Title title={item.text} />
          <Image source={{ uri: item.uri }} style={{height:300}} />
          <Card.Actions>
            <Button>like</Button>
            <Button>unlike</Button>
          </Card.Actions>
        </Card>
      </View>
    )
  }

  renderNoMoreCards() {
      return(
        <View style={{margin:10}}>
          <Card>
            <Card.Title title="No more cards" />
          </Card>
        </View>
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <Tinder 
          data={mydata}
          renderCards={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
