/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   ListView
 } from 'react-native';

 var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

 class api_test extends Component {
   constructor(props) {
     super(props);
     this.state = {
       dataSource: ds.cloneWithRows([]),
       loaded: false
     };
   }

   componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    var url = `https://api.upcitemdb.com/prod/trial/lookup?upc=888462367967`;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: ds.cloneWithRows(responseData.items),
          loaded: true
        });
      })
      .done();
   }

   _renderRow(rowData) {
  	  return (
        <View style={{height:270,borderBottomColor: '#ededed', borderBottomWidth:1, paddingLeft:10, paddingTop:10}}>
          <Text style={{fontSize:22}}>{rowData.title}</Text>
          <Text style={{fontSize:22}}>{rowData.offers[0].link}</Text>

        </View>
      )
   }

   render() {
     return (
      <View style={{ marginTop:60 }}>
      	<ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
     );
   }
 };

 var styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 28,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     fontSize: 19,
     marginBottom: 5,
   },
   container: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   rightContainer: {
     flex: 1,
   },
   title: {
     fontSize: 20,
     marginBottom: 8,
     textAlign: 'center',
   },
   year: {
     textAlign: 'center',
   },
   thumbnail: {
     width: 53,
     height: 81,
   },
   listView: {
     paddingTop: 20,
     backgroundColor: '#F5FCFF',
   },
 });

     var data = {
     "json": {
         "data": {
             "updated": {
                 "$t": "04 Nov 2015 2321 GMT"
             },
             "flux": {
                 "$t": "111"
             },
             "aindex": {
                 "$t": "41"
             },
             "kindex": {
                 "$t": "3"
             },
             "kindexnt": {
                 "$t": "No Report"
             },
             "xray": {
                 "$t": "B6.0"
             },
             "sunspots": {
                 "$t": "95"
             },
             "heliumline": {
                 "$t": "131.8"
             },
             "protonflux": {
                 "$t": "3.14e-01"
             },
             "electonflux": {
                 "$t": "5.46e+02"
             },
             "aurora": {
                 "$t": "1"
             },
             "normalization": {
                 "$t": "1.99"
             },
             "latdegree": {
                 "$t": "67.5"
             },
             "solarwind": {
                 "$t": "564.3"
             },
             "magneticfield": {
                 "$t": "0.2"
             },
             "calculatedconditions": {
                 "band": [
                     {
                         "name": "80m-40m",
                         "time": "day",
                         "$t": "Poor"
                     },
                     {
                         "name": "30m-20m",
                         "time": "day",
                         "$t": "Good"
                     },
                     {
                         "name": "17m-15m",
                         "time": "day",
                         "$t": "Fair"
                     },
                     {
                         "name": "12m-10m",
                         "time": "day",
                         "$t": "Poor"
                     },
                     {
                         "name": "80m-40m",
                         "time": "night",
                         "$t": "Fair"
                     },
                     {
                         "name": "30m-20m",
                         "time": "night",
                         "$t": "Good"
                     },
                     {
                         "name": "17m-15m",
                         "time": "night",
                         "$t": "Fair"
                     },
                     {
                         "name": "12m-10m",
                         "time": "night",
                         "$t": "Poor"
                     }
                 ]
             }
         }
     }
 }

AppRegistry.registerComponent('api_test', () => api_test);
