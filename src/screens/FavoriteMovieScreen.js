import React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { MovieItem } from '../components/MovieItem';
import * as StorageHelper from "../helpers/StorageHelper"

export default function FavoriteMovieScreen( {navigation} ) {
  const [FavoriteMovieData ,setFavoriteMovieData] = useState({})

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus',()=>{
        loadStorage()
    })
    return(unsubscribe)
  },[FavoriteMovieData])

  const loadStorage = async() => {
    let FavoriteMovieGet = await StorageHelper.getMySetting('myList')
    let a = JSON.parse(FavoriteMovieGet)
    setFavoriteMovieData(a)
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>MyFavoriteMovie</Text>
      </View>
      <View style={{marginTop:10}}>
        <FlatList
          data={FavoriteMovieData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          style={{marginTop:5}}
          renderItem={({ item }) => (
            <MovieItem
              poster ={item.poster_path}
              title = {item.title}
              original_language = {item.original_language}
              onPress = {() => navigation.navigate("簡介", {movieId: item.id})}
              whichScreen = {"FavoriteMovieScreen"}
            />
          )}
        />
      </View>
      <StatusBar
        style="auto"
        translucent={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerContainer:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle:{
    fontSize:30,
    fontWeight:'bold',
    marginTop:20,
    marginLeft:5
  },
});
