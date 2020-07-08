import React from 'react';
import {Text,View,StyleSheet,ScrollView,Image,Animated} from 'react-native';
HEADER_MAX_HEIGHT=120
HEADER_MIN_HEIGHT=70
PROFILE_IMAGE_MAX_HEIGHT=80
PROFILE_IMAGE_MIN_HEIGHT=40
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      scrolly: new Animated.Value(0)
    }
  }
  render(){
const headerHeight=this.state.scrolly.interpolate({

  inputRange:[0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
  outputRange:[HEADER_MAX_HEIGHT,HEADER_MIN_HEIGHT],
  extrapolate:'clamp'
})

const profileImageHeight=this.state.scrolly.interpolate({

  inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
  outputRange:[PROFILE_IMAGE_MAX_HEIGHT,PROFILE_IMAGE_MIN_HEIGHT],
  extrapolate:'clamp'
})
    return(
      <View style={{flex:1}}>
       <Animated.View style={{
         position:'absolute',
         top:0,
         left:0,
         right:0,
         backgroundColor:'lightskyblue',
         height:headerHeight
       }}>

       </Animated.View>
      <ScrollView style={{flex:1}}
      scrollEventThrottle={16}
      // onScroll={Animated.event([{nativeEvent:{contentOffset:{y:this.state.scrolly}}}])}
      >
     <Animated.View style={{
       height:profileImageHeight,
       width:profileImageHeight,
       borderRadius:PROFILE_IMAGE_MAX_HEIGHT/2,
       borderColor:'white',
       borderWidth:3,
       overflow:'hidden',
       marginTop:HEADER_MAX_HEIGHT-(PROFILE_IMAGE_MAX_HEIGHT/2),
       marginLeft:10
     }}>
       <Image source={require("./IMAGE/photo.jpg")}
       style={{flex:1,width:null,height:null}}
       />
     </Animated.View>
     <View>
       <Text style={{fontWeight:'bold',fontSize:26,paddingLeft:10}}>
         praveen
       </Text>
        <Text style={{fontWeight:'bold',fontSize:50,paddingLeft:10}}>
         praveen
       </Text>
       <Text style={{fontWeight:'bold',fontSize:50,paddingLeft:10}}>
         praveen
       </Text>
       <Text style={{fontWeight:'bold',fontSize:50,paddingLeft:10}}>
         praveen
       </Text>
       <Text style={{fontWeight:'bold',fontSize:50,paddingLeft:10}}>
         praveen
       </Text>
       <Text style={{fontWeight:'bold',fontSize:50,paddingLeft:10}}>
         praveen
       </Text>
       <Text style={{fontWeight:'bold',fontSize:50,paddingLeft:10}}>
         praveen
       </Text>
       <Text style={{fontWeight:'bold',fontSize:50,paddingLeft:10}}>
         praveen
       </Text>
       <Text style={{fontWeight:'bold',fontSize:50,paddingLeft:10}}>
         praveen
       </Text>
       <Text style={{fontWeight:'bold',fontSize:50,paddingLeft:10}}>
         praveen
       </Text>
       <Text style={{fontWeight:'bold',fontSize:50,paddingLeft:10}}>
         praveen
       </Text>
     </View>
      </ScrollView>
      </View>
    )
  }
}