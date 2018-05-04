import React, { Component } from 'react';
import { 
  Container, Content, Card, CardItem, Body, Icon,
  List, ListItem, Text, Spinner, Thumbnail, Button, Rigth, Left } from 'native-base';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import Highlights from './Highlights'
import axios from 'axios'

export default class Profile extends Component{
  
  state = {
    profile: {}
  }

  allProfile(){
    const {id} = this.props.navigation.state.params
    axios.get(`https://api.backendless.com/115DC970-7689-C50E-FF6B-5F94AFFFA900/0A3575C9-7BEF-4CBA-FF55-7C5806658300/data/profiles/${id}`).then(result=>{
        this.setState({
            profile: result.data
        })
    })
  }

  componentDidMount(){
    this.allProfile()
  }

  render(){
    const {name, note, position, region, university} = this.state.profile
    return(
        <Container style={styles.container}>
          <Content style={{padding: 10}}>
            <Card style={styles.card}>
              <Thumbnail large source={require('../assets/1.jpg')} style={styles.thumbnail}/>
              <CardItem style={{padding: 25}}>
                <Body style={{padding: 30}}>
                   <Text style={styles.textName}>{name}</Text>
                   <Text style={styles.textPosition}>{position} Of</Text>
                   <Text note style={styles.textPosition}>{university}</Text>
                   <Text note style={styles.textPosition}>{region}</Text>
                   <View style={{flex: 1, flexDirection: 'row'}}>
                      <Button bordered info style={{alignSelf: 'center', marginTop: 10, marginLeft: 27}}><Text>Message</Text></Button>
                      <Button info style={{alignSelf: 'center', marginTop: 10, marginLeft: 10}}><Text>Connect</Text></Button>
                   </View>
                   <Text style={styles.textNote}>{note}</Text>
                </Body>
              </CardItem>
            </Card>
            <Highlights />
          </Content>
        </Container>
    )
  }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'steelblue'
    },
    card:{
      marginTop: 10
    },
    textName: {
      fontSize: 17, 
      justifyContent: 'center', 
      alignSelf: 'center'
    },
    textPosition: {
      fontSize: 14, 
      justifyContent: 'center', 
      alignSelf: 'center',
    },
    textNote: {
      fontSize: 14, 
      justifyContent: 'center', 
      alignSelf: 'center',
      marginTop: 15
    },
    imageProfile: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden'
    },
    thumbnail:{
      alignSelf: 'center',
      marginTop: 10
    }
})