import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';
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
export default class App extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };
  
  render() {
    const { search } = this.state;

    return (
      <SearchBar
        round
        placeholder="Tìm kiếm..."
        onChangeText={this.updateSearch}
        // onChangeText={(text) => searchFilterFunction(text)}
        // onClear={(text) => searchFilterFunction('')}
        searchIcon={{ size: 24 }}
        inputContainerStyle={{ margin: 1, backgroundColor: 'white'}}
        containerStyle={{ backgroundColor: '', opacity: 0.8 }}
        value={search}
      />
    );
  }
}

// const searchFilterFunction = (text) => {
//   // Check if searched text is not blank
//   if (text) {
//     const newData = masterDataSource.filter(function (item) {
//       const itemData = item.title
//         ? item.title.toUpperCase()
//         : ''.toUpperCase();
//       const textData = text.toUpperCase();
//       return itemData.indexOf(textData) > -1;
//     });
//     setFilteredDataSource(newData);
//     setSearch(text);
//   } else {
//     setFilteredDataSource(masterDataSource);
//     setSearch(text);
//   }
// };