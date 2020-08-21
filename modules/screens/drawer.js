import React from "react";
import {Button,View,Header} from 'react-native';

export default class Drawer extends React.Component {
  render() {
    return( 
        <Container>
             <Header>
                 <Left>
                    <Button
                      transparent onPress={()=>this.props.navigation.navigate('Forget')}>

                    </Button>
                 </Left>


          
     

              </Header>
        </Container>
    

    );
  }
}