import React from'react';
import {View, Button, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';




export default class Lifecycle extends React.Component{
             constructor(){
             super();
             this.state={
             count: '',
             source: require('./../../assets/images/second.jpg')
                     
        }
    }
                
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

         
        /*Addition = () => {
            this.setState({
                count: this.state.count + 1
            });
        }

        minus = () => {
            this.setState({
                count: this.state.count - 1
            });
        }
        */
        changeImage = () => {
             this.setState({
                 source: require('./../../assets/images/iot.jpg')
                 
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
                   style={styles.btn} 
                   title="Subtract"
                   onPress={()=>this.setState({count: this.state.count - 1})}>
               </Button>


           <View style={styles.btn}>
                <TouchableOpacity  onPress={()=>this.changeImage}>               
                <Text>{this.state.source}</Text>
                <Image
                          style={styles.img}
                          source = {this.state.source}                                                                
                />
                </TouchableOpacity>  


               
                <Button
                          style={styles.btn1}
                          title='Press Me'>
                          onPress={this.changeImage}  
                </Button>    
                </View>
                         
              
            </View>
        );
    }
}

const styles = StyleSheet.create({
                 
                 btn: {
                     marginTop: 50,
                     justifyContent:'center',
                 },
                 
                 img: {
                     justifyContent: 'center'
                 },

                 btn1: {
                    borderRadius: 20,
                    marginLeft:50, 
                    marginTop:20,
                    alignItems:'center',
                    justifyContent: 'center'                

                 }
});

