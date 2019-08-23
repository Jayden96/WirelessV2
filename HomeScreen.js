import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon} from 'react-native-elements';
import moment from "moment";
import Detail from "./DetailScreen";


export default class HomeScreen extends React.Component {
static navigationOptions = {
  header: null
 };
 
constructor(props) {super(props);
 this.state = {
  currentDate: new Date(),
  markedDate: moment(new Date()).format("YYYY-MM-DD")
 };
}
render() {
const today = this.state.currentDate;
const day = moment(today).format("dddd");
const date = moment(today).format("MMMM D, YYYY");
return (
<View style={styles.container}>
<LinearGradient colors={['#4c669f', 'purple', 'red']} style={styles.linearGradient}>
  <Text style={styles.title}>Events</Text>
  <View style={styles.content}>
    <Text style={styles.day}>{day}</Text>
    <Text style={styles.small}>{date}</Text>
  </View>
  <TouchableOpacity style={styles.circle} onPress={()=>     this.props.navigation.navigate('Detail')}>
   <Icon raised name='send' color="#000" size={30}/>
  </TouchableOpacity>
  </LinearGradient>
</View>
 );
 }
}
const styles = StyleSheet.create({
container:{
 position: "relative",
 flex: 1,
 backgroundColor: "orange",
 justifyContent: 'flex-start',
},
title:{
 fontSize: 50,
 color: "#fff",
 letterSpacing: 2,
 top: 20,
 textAlign: "center",
},
day:{
 fontSize: 25,
 color: "#fff",
 textAlign:"left",
 top: 50,
},
small:{
 fontSize: 28,
 color: "#fff",
 top: 70,
},
circle:{
  top: 380,
  left: 280,
},
linearGradient: {
  flex: 1,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 5
}

})