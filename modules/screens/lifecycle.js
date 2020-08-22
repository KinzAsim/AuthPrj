import React from'react';
import {View, Button, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';




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

         
        Addition = () => {
            this.setState({
                count: this.state.count + 1
            });
        }

        minus = () => {
            this.setState({
                count: this.state.count - 1
            });
        }
        
        changeImage = () => {
            console.loglog("Image Changes");
             this.setState({                
                 source: require('./../../assets/images/iot.jpg')
                 
             });
         }

    render(){
             
                  

        return(
            <LinearGradient
                     colors={['#87cefa', '#3b5998','#192f6a']}
                     style={styles.LinearGradient}>

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
                         
              
           
           
         
            <View style={styles.new}>                  
                   <View style={{width:200, height:100, backgroundColor:'powderblue'}}></View>
                   <View style={{width:200, height:100, backgroundColor:'steelblue'}}>
                   <View style={{width:50, height:20, backgroundColor:'blue',marginTop:10}}></View>
                   </View>
                   <View style={{width:200, height:100, backgroundColor:'skyblue'}}>
                   <View style={{width:50, height:20, backgroundColor:'black', flex:1, borderRadius:300}}></View>
                   </View>
            </View>
            </View>
            </LinearGradient>

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

                 },

                 new: {
                    flex:1,
                    justifyContent:'space-between',
                    flexDirection:'column',                                   
                 },
});

