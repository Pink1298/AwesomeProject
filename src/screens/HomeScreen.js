import React, {Component} from 'react';
import {
    Dimensions, 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity,
    Button,
    StatusBar
    } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { FlatGrid } from 'react-native-super-grid';
const HomeScreen = ({ navigation }) => {
    const [items, setItems] = React.useState([
        { name: 'VB chưa xử lý', code: '#27ae60' },
        { name: 'VB đã xử lý', code: '#2980b9' },
        { name: 'VB theo dõi', code: '#8e44ad' },
        { name: 'VB quan trọng', code: '#c0392b' },
      ]);
    return (
        <View style= { styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo}
                source = {require('../images/logoctu.png')}
                />
                <Text style={styles.textHeader}>Quản lý văn bản</Text>
                <Image style={styles.profile}
                    source = {require('../images/profile.png')}
                />
            </View>
        <View style= { styles.footer}>
        
        </View>
        </View>
      );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        //paddingHorizontal: 20,
        padding: 5,
        backgroundColor: '#034850'
    },
    footer: {
        flex: 9,
        backgroundColor: '#fff',
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    gridView: {
      marginTop: 10,
      flex: 3,
    },
    logo: {
        height: 35,
        width: 35,
        marginStart: 10*4,
    },
    textHeader: {
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        color: '#fff'
    },
    profile: {
        marginStart: 200,
        height: 45,
        width: 45,
        position: 'absolute',
        right: 10
    },
    itemContainer: {
        backgroundColor: '#e6f0ff',
      justifyContent: 'flex-end',
      borderRadius: 20,
      padding: 10,
      height: 110,
      alignItems: 'center',
      borderColor: '#e6f0ff',
      borderWidth: 1
    },
    itemName: {
      fontSize: 16,
      color: '#0066ff',
      fontWeight: 'bold',
    },
    itemCode: {
      fontWeight: 'bold',
      fontSize: 12,
      color: '#4d0000',
    },
  });
