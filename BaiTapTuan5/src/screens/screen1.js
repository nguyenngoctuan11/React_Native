
import React from 'react';
import {  StyleSheet, View, Text, Button , SafeAreaView,Image,TouchableOpacity } from 'react-native';
import{NavigationContainer,Route} from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack'

const Screen1 = ({ navigation , Route }) => {

const phones = {
    vs_blue : require('../images/vs_blue.png'),
    vs_red : require('../images/vs_red.png'),
    vs_silver : require('../images/vs_silver.png'),
    vs_black : require('../images/vs_black.png'),

} 
const [color,setColor] = React.useState('vs_blue');


  return (
        <SafeAreaView>
            <Image style={styles.product_img} source={phones[color]} />
            <View style={styles.section}>
                <Text style={styles.text_product}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            </View>

            <View style={styles.rate}>
                <View style={styles.view_star}>
                    {[...Array(5)].map(() => (
                            <Image style={styles.img_star} source={require("../images/star.png")}/>
                            
                    ))}
                </View>
                <Text style={styles.text}>(Xem 828 đánh giá)</Text>

            </View>
            <View style={styles.view_price}>
                <Text>1.790.000</Text>
                <Text style={{ fontSize: 16,color: "#999",textDecorationLine: "line-through",marginLeft: 10,}}>1.990.000</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'red',fontWeight:'bold',marginLeft:'20px'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Image style = {styles.img_question} source={require('../images/question.png')}/>
            </View>
            <TouchableOpacity style={styles.btn_color} onPress={()=>navigation.navigate('Screen2')}>
                <Text style={{marginLeft:70}}>
                    4 MÀU-CHỌN MÀU
                </Text>
                <Image style={{width:10,height:10,marginLeft:100}} source={require('../images/Vector.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_buy}>
                <Text>Chọn mua</Text>
            </TouchableOpacity>
        </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        width:'100%', 
        height:'100%',
    },
    product_img : {
        width:310,
        height:361,
        top : -2,
        left : 29,

    },
    section : {
        flex: 1, 
        flexDirection: "column",
        marginHorizontal: 20,
    },
    // view price
    view_price:{
        flexDirection:'row',
        justifyContent: "flex-start",
        alignItems:'center',
        marginBottom:10,
        marginLeft:20
    },
    text_product:{
        fontSize : 16,
        fontWeight: 600,
        marginBottom: 10,
    },
    rate : {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        marginBottom:10,
        width :'100%'
    },
    view_star :{
        marginLeft : 10,
        flexDirection:"row",
        marginRight: 10,
        justifyContent: 'space-between',
    },
    img_star:{
        marginLeft: 10,
        width:23,
        height:25,
    },
    text:{
        fontSize:16
    },
    img_question :{
        width:20,
        height:20,
        marginLeft:10
    },
    btn_buy:{
        marginTop:20,
        borderColor:'black',
        backgroundColor:'red',
        width:350,
        height:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
    },
    btn_color:{
        flexDirection:'row',
        borderColor:'black',
        backgroundColor:'#fff',
        marginLeft:20,
        marginTop: 10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:10,
        width:350,
        height:30
    }

})
export default Screen1;

