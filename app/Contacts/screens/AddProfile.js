import React, { Component } from 'react';
import { 
  Container, Content, Card, CardItem, Body, Icon, Item, Label, Input,
  List, ListItem, Text, Spinner, Thumbnail, Button, Rigth, Left } from 'native-base';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import axios from 'axios'

export default class AddProfile extends Component{

  state = {
    name: "",
    position: "",
    university: "",
    note: "",
    region: ""
  }

  handleSubmit(){
    axios
      .post(`https://api.backendless.com/115DC970-7689-C50E-FF6B-5F94AFFFA900/0A3575C9-7BEF-4CBA-FF55-7C5806658300/data/profiles`, {name: this.state.name, position: this.state.position, university: this.state.university, region: this.state.region, note: this.state.note})
      .then(result=>{
        if(result.data){
          this.props.navigation.navigate('ProfileList')
        }
      })
  }

  render(){
    return(
        <Container>
          <Content>
            <Item inlineLabel>
            <Label>Name</Label>
            <Input
              onChangeText={name=> this.setState({name})}
              value={this.state.name}
            />
          </Item>
          <Item inlineLabel>
            <Label>Position</Label>
            <Input
              onChangeText={position=> this.setState({position})}
              value={this.state.position}
            />
          </Item>
          <Item inlineLabel>
            <Label>University</Label>
            <Input
              onChangeText={university=> this.setState({university})}
              value={this.state.university}
            />
          </Item>
          <Item inlineLabel>
            <Label>Region</Label>
            <Input
              onChangeText={region=> this.setState({region})}
              value={this.state.region}
            />
          </Item>
          <Item inlineLabel>
            <Label>Note</Label>
            <Input
              onChangeText={note=> this.setState({note})}
              value={this.state.note}
            />
          </Item>
          <Button block info onPress={()=> this.handleSubmit()}><Text>Submit</Text></Button>
          </Content>
        </Container>
    )
  }

}