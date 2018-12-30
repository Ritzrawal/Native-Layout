import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
const { height, width } = Dimensions.get('window')

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
      <ScrollView
      scrollEventThrottle={16}
  >
      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
              Helps to Find the Hotels?
          </Text>

          <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
              >
                  <Image source={require('../assets/images/resort.jpg')}
                      name="Home"
                  />
                  <Image
                  source={require('../assets/images/newhotel.jpg')}
                      name="Experiences"
                  />
                  <Image source={require('../assets/images/goahotel.jpg')}
                      name="Resturant"
                  />
              </ScrollView>
          </View>
          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Introducing the new Hotels in Town
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  Your`s Comfots Matters

              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
              
                   <Image
                      style={{ flex: 3, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                      source={require('../assets/images/dubai.jpg')}
                    
                  />
                  
              </View>
          </View>
      </View>
      <View style={{marginTop:40}}>
      <Text style={{fontSize:24,paddingHorizontal:20}}>
        Rooms Available  around the World
      </Text>
      <View style={{paddingHorizontal:20,marginTop:20,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
      <View style={{width:width/2-30,height:width/2-30,borderWidth:0.5,borderColor:'blue'}}>
      <View style={{flex:1}}>
      <Image
      style={{flex:1,width:null,height:null}}
      source={require('../assets/images/goodroom.jpg')}
      />
      </View>
      <View style={{flex:1,alignItems:"flex-start",justifyContent:"space-evenly",paddingLeft:10}}>
        <Text style={{fontSize:14,color:'#b63838'}}>Double Bed-Rooms</Text>
        <Text>Cozy Rooms</Text>
      <Text>85$</Text>
      </View>
      </View>
      <View style={{width:width/2-30,height:width/2-30,borderWidth:0.5,borderColor:'green'}}>
      <View style={{flex:1}}>
      <Image
      style={{flex:1,width:null,height:null}}
      source={require('../assets/images/normalroom.jpg')}
      />
      </View>
      <View style={{flex:1,alignItems:"flex-start",justifyContent:"space-evenly",paddingLeft:10}}>
        <Text style={{fontSize:14,color:'#b63838'}}>Single Bed-Rooms</Text>
        <Text>Sea View Rooms</Text>
      <Text>25$</Text>
      </View>
      </View>
      <View style={{width:width/2-30,height:width/2-30,borderWidth:0.5,borderColor:'yellow'}}>
      <View style={{flex:1}}>
      <Image
      style={{flex:1,width:null,height:null}}
      source={require('../assets/images/room.jpg')}
      />
      </View>
      <View style={{flex:1,alignItems:"flex-start",justifyContent:"space-evenly",paddingLeft:10}}>
        <Text style={{fontSize:14,color:'#b63838'}}>Double Bed-Rooms</Text>
        <Text>AC Rooms</Text>
      <Text>50$</Text>
      </View>
      </View>
      
      <View style={{width:width/2-30,height:width/2-30,borderWidth:0.5,borderColor:'red'}}>
      <View style={{flex:1}}>
      <Image
      style={{flex:1,width:null,height:null}}
      source={require('../assets/images/wroom.jpg')}
      />
      </View>
     
      <View style={{flex:1,alignItems:"flex-start",justifyContent:"space-evenly",paddingLeft:10}}>
      <Text style={{fontSize:14,color:'#b63838'}}>Private Rooms</Text>
      <Text>Cozy Rooms</Text>
      <Text>45$</Text>
</View>
      </View>
      </View>
      
      </View>
      
      
  </ScrollView>
  </View>


);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    height:130,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
