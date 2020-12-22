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
const VBDiScreen = ({ navigation }) => {
    const [items, setItems] = React.useState([
        { logo: require('../images/vbcxl.png'), name: 'VB chưa xử lý', code: '#27ae60', linear: ['#119DD6', '#69CAF2']},
        { logo: require('../images/vbdxl.png'), name: 'VB đã xử lý', code: '#2980b9', linear: ['#5DF751', '#87F67E'] },
        { logo: require('../images/vbtd.png'), name: 'VB theo dõi', code: '#8e44ad', linear: ['#F5F237', '#F9F678'] },
        { logo: require('../images/vbqt.png'), name: 'VB quan trọng', code: '#c0392b', linear: ['#F22B92', '#F577B8'] },
      ]);
    return (
        <View style= { styles.container}>
        <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
        <View style= { styles.footer}>
        <FlatGrid
          itemDimension={130}
          data={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={20}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { opacity: 0.9 }]}>
                <LinearGradient style={styles.itemContainer} colors={item.linear} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                  <Image
                      source={item.logo}
                      style={styles.itemLogo}/>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.code}</Text>
                </LinearGradient>
            </View>
          )}
        />
        </View>
        </View>
      );
}

export default VBDiScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    footer: {
        justifyContent: 'center',
        flex: 1.5,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    gridView: {
      marginTop: 30,
      flex: 1.5,
    },
    itemLogo: {
        height: 45,
        width: 45,
        margin: 5
    },
    itemContainer: {
      backgroundColor: '#e6f0ff',
      justifyContent: 'center',
      borderRadius: 20,
      height: 110,
      width: '100%',
      padding: 5,
      margin: 5,
      alignItems: 'center',
      borderColor: '#e6f0ff',
      borderWidth: 1
    },
    itemName: {
      fontSize: 16,
      color: '#12010A',
      fontWeight: 'bold',
    },
    itemCode: {
      fontWeight: 'bold',
      fontSize: 12,
      color: '#4d0000',
    },
  });
