import React from'react';
import {View, Button, Text} from 'react-native';



export default class Lifecycle extends React.Component{
             constructor(){
             super();
             this.state={
            count: ''
                     
        }
    }
    

         //saySomething = (something) =>{            
            /*console.log(something)
             }*/
            

         
         copmonentDidMount()
         {
           this.setState();
         
             //geolocation
             //fetch API
         }
         componentDidUpdate()
         {
            console.log(this.state)
             return true;
             //on furure loads
         }
         
         componentWillUnmount(){
             clearInterval(this.interval);
             //component is leaving the screen
         }

         
        handleClick = () => {
            this.setState({
             
            });
        }

        mius = () => {
            this.setState({

            });
        }

    render(){
      
        return(
            <View>
               <Text> LifeCycle Methods</Text>
               <Text>{this.state.count}</Text> 
               <Button 
                   title="Add"
                   onPress={()=>this.setState({count: this.state.count + 1})}>
               </Button>

               <Button 
                   title="Subtract"
                   onPress={()=>this.setState({count: this.state.count - 1})}>
               </Button>



               
            </View>
        );
    }
}

