import React from 'react';
import { View, StyleSheet, Button,Image,Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';





export default class Forget extends React.Component{

     

    render(){
        return( 
                <LinearGradient
                      colors={['#87cefa', '#3b5998','#192f6a']}
                      style={styles.LinearGradient}>

                <View style={styles.new}>
                     <Button 
                         title="Button" 
                         color="#192f6a"
                         onPress={()=> this.props.navigation.navigate('Home')}>
                     </Button>
                </View>

                <View style={styles.box}>
                   <Image style={styles.img}
                   source={require('./../../assets/images/iot.jpg')}/>

                <View style={styles.square}>
                </View>
               
                <View style={styles.display}>
                    <Text style={{fontWeight:'bold',fontSize: 15}}>IOT "The Internet of things (IoT) is a system of interrelated computing devices, mechanical and digital machines provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction"</Text>
                </View>
                </View>

                <View style={styles.third}>
                    <View style={styles.box1}>  
                        <Text style={styles.text}>1</Text>                  
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.text}>2</Text>
                    </View>
                    <View style={styles.box3}>
                       <Text style={styles.text}>3</Text>
                    </View>
                </View>
               
                </LinearGradient>

              );
        }}

    const styles= StyleSheet.create({
               new: {                   
                   justifyContent:'center',
                   width: 500,
                   height: 200,
                                             
                    },  
                    
               box: {
                    justifyContent:'center',
                    width: 500,
                    height: 200,
                    marginTop:50,
                    backgroundColor:'#ffff',
               },  
               
               img: {
                    width:50,
                    height:50,
                    marginLeft:20,
               },

               square: {
                    width:100,
                    height: 100,
                    backgroundColor:'#3b5998',
               },
               
               display: {
                   position: 'absolute',
                   flexDirection:'row',
                   width: 300,
                   height:150,
                   marginLeft:120, 
                   marginTop:50,           
                   backgroundColor:'#ffff',
                   
               },

               third: {
                   width:500,
                   height:300,
                   backgroundColor:'#fff',  
                                 
               },

               lay: {
                    position: 'absolute',
                    backgroundColor:'#FFF176',
                    
               },

               text: {
                    color: '#ffffff',
                    fontSize: 80,
               },
               box1: {
                    position: 'absolute',
                    top: 40,
                    left: 40,
                    width: 100,
                    height: 100,
                    backgroundColor: 'red'
                  },
                  box2: {
                    position: 'absolute',
                    top: 80,
                    left: 80,
                    width: 100,
                    height: 100,
                    backgroundColor: 'blue'
                  },
                  box3: {
                    position: 'absolute',
                    top: 120,
                    left: 120,
                    width: 100,
                    height: 100,
                    backgroundColor: 'green'
                  },
    });

