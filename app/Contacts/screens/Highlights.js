import React, { Component } from 'react';
import { 
  Container, Content, Card, CardItem, Body,
  List, ListItem, Text, Spinner, Thumbnail, Button, Rigth, Left } from 'native-base';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { allHighlights } from '../actions';

class Highlights extends Component{
  
  componentDidMount(){
    this.props.dispatch(allHighlights())
  }

  render(){
    return(
        <Card style={{marginBottom: 20}}>
          <List>
            <Text note style={{marginTop: 10, marginLeft: 10, marginBottom: 10}}>HighLights</Text>
            {this.props.highlightsReducer.isLoading ? ( <Spinner color='steelblue'/> ) 
            : (
              this.props.highlightsReducer.highlights.map((highlight)=>(
                <ListItem key={highlight.objectId} avatar style={{marginTop: 10}}>
                  <Left>
                    <Thumbnail source={require('../assets/1.jpg')} />
                  </Left>
                  <Body>
                    <Text>{highlight.title}</Text>
                    <Text note>{highlight.subtitle}</Text>
                  </Body>
                </ListItem>
              ))
            )}
          </List>
        </Card>
    )
  }

}

const mapStateTopProps = (state) => ({
  highlightsReducer: state.highlightsReducer
})

export default connect(mapStateTopProps)(Highlights)

const styles = StyleSheet.create({
    thumbnail:{
      alignSelf: 'center',
      marginTop: 10
    }
})