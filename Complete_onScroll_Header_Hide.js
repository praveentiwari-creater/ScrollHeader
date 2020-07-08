import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Animated, TextInput } from 'react-native';
// import { transform } from '@babel/core';
console.disableYellowBox = true;
HEADER_MAX_HEIGHT = 130
HEADER_MIN_HEIGHT = 68
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolly: new Animated.Value(0)
    }
  }
  render() {
    const diffclamp=Animated.diffClamp(this.state.scrolly,0,HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)
    const headerHeight = diffclamp.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })
    // const headerHeight = this.state.scrolly.interpolate({
    //   inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    //   outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    //   extrapolate: 'clamp'
    // })

       // const headerZindex=new Animated.Value(0).interpolate({
        //   inputRange:[0,HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        //   outputRange:[0,1],
        //   extrapolate: 'clamp'
        // })

    return (
      <View style={{ flex: 1 }}>
        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#4d4dff',
          elevation: 10,
          height: headerHeight,
          // zIndex: headerZindex,
          alignItems: 'center',
          // , overflow: 'hidden',
          // transform:[{translateY:translateY}]
        }}>
          <Animated.View style={{ flexDirection: 'row', position: 'absolute', top: 10 }}>
            <Image source={require('./IMAGE/MenuWhite.png')} style={{ width: 50, height: 50, right: 100 }} />
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Flipkart</Text>
            <Image source={require('./IMAGE/notification.png')} style={{ width: 40, height: 40, left: 90 }} />

          </Animated.View>

          <Animated.View style={{ position: 'absolute', bottom: 10, right: 10, left: 10 }}>
            <TextInput
              placeholder="write something.................."
              // autoFocus={true} 
              placeholderTextColor = "grey"
              style={{ backgroundColor: "white" ,fontSize:20}} />
          </Animated.View>
        </Animated.View>

        <ScrollView
          // scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrolly } } }])}
        >
          <View>
            <View>
            <Text style={{ fontWeight: 'bold', fontSize: 26, paddingLeft: 10, marginTop: 140 }}>
              TecOrb Technology Pvt Ltd
          </Text>
          <Image source={require('./IMAGE/photo.jpg')} style={{ width:"auto", height: 200 }} />
          </View>
           
          <View style={{marginTop:10}}>
            <Text style={{ fontWeight: 'bold', fontSize: 26, paddingLeft: 10 }}>
              TecOrb Technology Pvt Ltd
          </Text>
          <Image source={require('./IMAGE/photo.jpg')} style={{ width:"auto", height: 200 }} />
          </View>

          <View style={{marginTop:10}}>
            <Text style={{ fontWeight: 'bold', fontSize: 26, paddingLeft: 10 }}>
              TecOrb Technology Pvt Ltd
          </Text>
          <Image source={require('./IMAGE/photo.jpg')} style={{ width:"auto", height: 200 }} />
          </View>

          <View style={{marginTop:20}}>
            <Text style={{ fontWeight: 'bold', fontSize: 26, paddingLeft: 10 }}>
              TecOrb Technology Pvt Ltd
          </Text>
          <Image source={require('./IMAGE/photo.jpg')} style={{ width:"auto", height: 200 }} />
          </View>

          <View style={{marginTop:20}}>
            <Text style={{ fontWeight: 'bold', fontSize: 26, paddingLeft: 10 }}>
              TecOrb Technology Pvt Ltd
          </Text>
          <Image source={require('./IMAGE/photo.jpg')} style={{ width:"auto", height: 200 }} />
          </View>

          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  name: {
    position: 'relative',
    justifyContent: 'space-between'
  }
})