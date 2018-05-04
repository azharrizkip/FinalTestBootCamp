import React, { Component } from 'react';
import { 
  Container, Content, Card, CardItem, Body, Icon,
  List, ListItem, Text, Spinner, Thumbnail, Button, Rigth, Left } from 'native-base';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import axios from 'axios'

export default class ProfileList extends Component{

  state = {
    profiles: []
  }

  allProfiles(){
    const url = 'https://api.backendless.com/115DC970-7689-C50E-FF6B-5F94AFFFA900/0A3575C9-7BEF-4CBA-FF55-7C5806658300/data/profiles'
    axios.get(url).then(result=>{
      this.setState({
        profiles: result.data
      })
    })
  }

  componentDidMount(){
    this.allProfiles()
  }

  render(){
    return(
        <Container>
          <Content>
          <List>
            {this.state.profiles.map(profile=>(
              <ListItem key={profile.objectId} onPress={()=> this.props.navigation.navigate('Profile', {id: profile.objectId})}>
                <Text>{profile.name}</Text>
              </ListItem>
            ))}
          </List>
          <Button block info onPress={()=> this.props.navigation.navigate('AddProfile')}><Text>Add Profile</Text></Button>
          </Content>
        </Container>
    )
  }

}