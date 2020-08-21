import React from'react';
import {View, Button, Text} from 'react-native';



export default class Lifecycle extends React.Component{

         constructor(props){
             super(props);
             this.state={
                 data:[]
             }
             console.log('constructor')
         }
         copmonentDidMount()
         {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => console.log(data))
             //geolocation
             //fetch API


         }
         componentDidUpdate(props,state)
         {
             console.log('componentDidUpdate')
             return true;
             //on furure loads
         }

         /*componentWillMount(){
             //component is leaving the screen
         }*/



    render(){
        console.log("render")
        return(
            <View>
               <Text> LifeCycle Methods</Text>
               <Button
                   title="Update me"
                   onPress={()=>{this.setState({data:"update"})}}>  
                   
               </Button>
            </View>
        );
    }
}
