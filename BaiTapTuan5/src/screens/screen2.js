// Screen2.js
import React from 'react';
import { StyleSheet,View, Text, Button ,TouchableOpacity,SafeAreaView,Image} from 'react-native';
import{NavigationContainer,Route} from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack'
const Screen2 = ({ navigation }) => {
  const phones = {
    vs_blue : require('../images/vs_blue.png'),
    vs_red : require('../images/vs_red.png'),
    vs_silver : require('../images/vs_silver.png'),
    vs_black : require('../images/vs_black.png'),
  }
  const [color,setColor] = React.useState('vs_blue');
  return (
    <SafeAreaView style={styels.container}>
      <View style={styels.header}>
        <Image style={{width:123,height:133}} source={phones[color]}/>
        <Text style={{fontWeight:'bold' ,fontSize:16}}>
          Điện Thoại Vsmart Joy 3 hàng chính hảng
        </Text>
      </View>
      <View style={styels.body}>
          <Text style={{marginLeft:10,fontSize:16,fontWeight:'bold'}}>Chọn 1 màu bên dưới:</Text>
          <View style={styels.group_btn}>
              <TouchableOpacity style={[styels.btn,styels.btn1]} onPress={()=>setColor('vs_silver')}/>
              <TouchableOpacity style={[styels.btn,styels.btn2]} onPress={()=>setColor('vs_red')}/>
              <TouchableOpacity style={[styels.btn,styels.btn3]} onPress={()=>setColor('vs_black')}/>
              <TouchableOpacity style={[styels.btn,styels.btn4]} onPress={()=>setColor('vs_blue')}/>
          </View>
          <TouchableOpacity style={styels.btnSecond} 
          onPress={()=> navigation.navigate({
            name:'Screen1',
            params:{color},
            merge:true,
          })}
          >
            <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>
               Xong
            </Text>
          </TouchableOpacity>
      </View>
     
    </SafeAreaView>
  );


};
 
const styels = StyleSheet.create({
   container : {
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'flex-start',
      flexDirection:'column',
      
   },
   header: {
    flexDirection:'row',
    padding:10,
   },
   body: {
     backgroundColor:'#C4C4C4',
     width:'100%',
     height:'100%',
     paddingBottom:0,
   },
   group_btn:{
    flexDirection:'column',
    alignItems :'center',
   },
   btn:{
      width : 70,
      height : 70,
      marginTop:16,
     
   },
   btn1:{
    backgroundColor: '#c5f1fb'
   },
   btn2:{
    backgroundColor: '#f30d0d'
   },
   btn3:{
    backgroundColor: '#000'
   },
   btn4:{
    backgroundColor: '#234896'
   },
   btnSecond:{
    backgroundColor: 'rgba(25, 82, 226, 0.58)',
        width: '100%', 
        height: 50, 
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10, 
      
   },


})



export default Screen2;
