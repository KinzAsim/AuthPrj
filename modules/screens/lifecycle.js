import React from'react';
import {View, Button, Text} from 'react-native';



export default class Lifecycle extends React.Component{
             constructor(){
             super();
             this.state={
             data:"ABC",
             evil:"DEF"
          
             
        }
    }
    

         //saySomething = (something) =>{            
            /*console.log(something)
             }*/
            

         
         copmonentDidMount()
         {
           this.setState("component did mount");
         
             //geolocation
             //fetch API
         }
         componentDidUpdate()
         {
            console.log(this.state)
             return true;
             //on furure loads
         }
         
         /*componentWillMount(){
             //component is leaving the screen
         }*/
         
        handleClick = () => {
            this.setState({
              data:"ABC",
              evil:"DEF"
              
            });
        }

    render(){
      
        return(
            <View>
               <Text> LifeCycle Methods</Text>
               <Text>{this.state.data}</Text> 
               <Button
                   title="Update me"
                   onPress={()=>this.handleClick()}>
               </Button>
               
            </View>
        );
    }
}
