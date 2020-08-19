import React from 'react';
import { StyleSheet, View, Button, TextInput, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';

export default class Details extends React.Component{
    
    constructor(props){
        super(props);
        this.state= {
            userName: '',
            userEmail: '',
            userPassword: '',
        }
    }

    static navigationOptions = {
      title: 'REGISTER',
    };

    render(){
        return(

            <LinearGradient
                 colors={['#87cefa', '#3b5998','#192f6a']}
                 style={styles.LinearGradient}>


              <View style={styles.iconView}>
                 <Icon name="add-user" size={15} color="#900"/>
              </View>

              <View style={styles.View}>
              
              <TextInput
                 onChangeText={(text) => console.log(text)}
                 placeholder="Enter your name"
                 style={{ height: 40, 
                   borderColor: 'black', 
                   borderWidth: 2,
                   marginTop:320,
                   marginLeft:50, 
                   marginRight:50,
                   borderRadius:20, 
                   backgroundColor:'white', 
                   alignItems:'center' }}
               />

              <TextInput
                  onChangeText={(text) => console.log(text)}
                  placeholder="Enter your email"
                  style={{ height: 40,
                     borderColor: 'black',
                     borderWidth: 2,
                     marginTop:10,
                     marginLeft:50,
                     marginRight:50,
                     borderRadius:20,
                     backgroundColor:'white',
                     alignItems:'center',
                    }}
                />

               <TextInput
                  onChangeText={(text) => console.log(text)}
                  placeholder="Enter your password"
                  style={{ height: 40,
                     borderColor: 'black',
                     borderWidth: 2,
                     marginTop:10,
                     marginLeft:50, 
                     marginRight:50,
                     borderRadius:20,
                     backgroundColor:'white',
                     alignItems:'center',
                     }}
                />

               <TouchableOpacity style={styles.btnColor} >
                   <Text style={{fontWeight:'bold',fontSize: 15}} onPress={()=> this.props.navigation.navigate('Home')}>Go Back To Login</Text>
               </TouchableOpacity>

            </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    
            view: {
              flex:1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#3b5998',
              },

             LinearGradient: {
              flex:1,
              paddingLeft: 15,
              paddingRight: 15,
              
              },

             appButtonText: {
              fontSize: 18,
              borderRadius: 10,
              color: "#3b5998",
              fontWeight: "bold",
              alignSelf: "center",
              },

             welcome2: {
              fontSize: 20,
              textAlign: 'center',
              margin: 10,
              },

             instructions: {
              textAlign: 'center',
              color: '#333333',
              marginBottom: 5,
             },

             btnColor: {
              justifyContent:'center',
              alignSelf:'center', 
              marginTop:30,
              backgroundColor:'#fff',
              width:150,
              height:40,
              alignItems:'center',
              borderRadius:20},

              iconView: {
                width: 50,
                height: 200,
                alignSelf:'center',
                justifyContent:'center',
                alignItems:'center',
           
              },
      }
    );
   


