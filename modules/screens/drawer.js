import React from "react";

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


         <Body>
                <Title>HomeScreen</Title>            
         </Body>   
         <Right />

              </Header>
        </Container>
    

    );
  }
}