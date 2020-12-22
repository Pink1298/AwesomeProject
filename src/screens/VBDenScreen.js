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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
const VBDenScreen = ({ navigation }) => {
    const [items, setItems] = React.useState([
        { logo: require('../images/vbcxl.png'), name: 'VB chưa xử lý', code: '#27ae60', linear: ['#119DD6', '#69CAF2']},
        { logo: require('../images/vbdxl.png'), name: 'VB đã xử lý', code: '#2980b9', linear: ['#5DF751', '#87F67E'] },
        { logo: require('../images/vbtd.png'), name: 'VB theo dõi', code: '#8e44ad', linear: ['#F5F237', '#F9F678'] },
        { logo: require('../images/vbqt.png'), name: 'VB quan trọng', code: '#c0392b', linear: ['#F22B92', '#F577B8'] },
      ]);
      const data = [
        {
          name: "Seoul",
          population: 21500000,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Toronto",
          population: 2800000,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Beijing",
          population: 527612,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "New York",
          population: 8538000,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Moscow",
          population: 11920000,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];
      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    return (
        <View style= { styles.container}>
        <View style={styles.header}>
                <PieChart style={styles.pieChart}
                  data={data}
                  width={400}
                  height={230}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  hideLegend={true}
                  //hasLegend={false}
                  absolute
                />
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

export default VBDenScreen;

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
    pieChart:{
      paddingHorizontal: 20,
      paddingVertical: 20
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
