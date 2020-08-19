import React from 'react';
import{ StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import TextInput from 'react-native-textinput-with-icons'


export default class Home extends React.Component{
    
    constructor(props) {
        super(props);
        this.state= {
            email: '',
            password: '',
        }
    }
     
   
    render(){
        return(
                <LinearGradient
                     colors={['#87cefa', '#3b5998','#192f6a']}
                     style={styles.LinearGradient}>

            
                <View style={styles.iconView}>
                     <Icon name="user" size={30} color="#900"/>
                </View>
                
         
                <View style={styles.eIcon}>
                <Icon style={styles.Profile} name="email" size={15} color="#900"/>
                   <TextInput
                    placeholder="Enter your email"
                    style={styles.input}
                    inlineImageLeft='email'
                    rightIcon="email"
                    onChangeText={text => console.log(text)}
                    //value={value} 
                  /> 
                </View>
                


                <View style={styles.welcome}>
                <Icon style={styles.Profile} name="lock" size={15} color="#900"/>
                   <TextInput
                    placeholder="Enter your password"
                    style={styles.input}
                    inlineImageLeft='lock'
                    underlineColorAndroid="transparent"
                    onChangeText={text => console.log(text)}
                    //value={value} 
                    />
                 </View>

                 <TouchableOpacity style={styles.ButtonStyle} >
                    <Text style={{fontWeight:'bold',fontSize: 15}} onPress={()=> this.props.navigation.navigate('Details')}>LOGIN</Text>
                 </TouchableOpacity>


                 <Text style={styles.textStyle}>
                    Forgotten Password?
                 </Text>
         
       
        
                  </LinearGradient>
             );
         }}

const styles = StyleSheet.create({

                    LinearGradient: {
                     flex:1,
                     paddingLeft: 15,
                     paddingRight: 15,
                     justifyContent:'center',
                     alignItems:'center',
                     },


                    appButtonText: {
                     fontSize: 18,
                     borderRadius: 10,
                     color: "#3b5998",
                     fontWeight: "bold",
                     alignSelf: "center",
                     },


                    input:{
                     height:20,
                     width:100, 
                     borderWidth: 2,
                     marginBottom:10, 
                     alignItems:'center',
                     justifyContent:'center',
                     borderRadius:25, 
                     backgroundColor:'white',
                     flexDirection:'row',
                     borderColor:'#fff',
                     padding:10,
                     },
      

                    welcome: {
                      justifyContent:'center',
                      alignItems:'center',
                      flexDirection:'row',
                      padding:10,
                     
                    },
                       
                    eIcon: {
                      justifyContent:'center',
                      alignItems:'center',
                      flexDirection:'row',
                      padding:10,
                      
                    },
                       
      
                    iconView:{
                      alignSelf:'center',
                      width: 100,
                      height:100,
                      borderRadius:50,
                      backgroundColor:'#fff',
                      shadowColor:'#000',
                      shadowRadius:50,
                      justifyContent: 'center',
                      alignItems: 'center', 
                      elevation: 5,
                      marginBottom: 50,
                    },
                    

                    ButtonStyle: {
                      justifyContent:'center',
                      alignSelf:'center', 
                      marginTop:30,
                      backgroundColor:'#fff',
                      width:100,
                      height:40,
                      alignItems:'center',
                      borderRadius:20,
                     },


                    Profile: {
                      padding:10,                    
                     },

                    textStyle: {
                      marginTop:20,

                     }
     
      },
      
    );
    
 
   

