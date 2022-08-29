import React,{ useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import { MovieItem } from '../components/MovieItem';
import { getNowPlayingMovies,getUpComingMovies,getAllGenres } from '../helpers/MovieHelper';
import { pressRow,saveToStorage } from '../helpers/AddToMyList';

export default function MovieScreen( {navigation} ) {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [upComingMovies, setUpComingMovies] = useState([])
  const [genres ,setGenres] = useState([{ id: 10110, name:"All"}])

  useEffect(()=>{
    getNowPlayingMovies().then((movieResponse)=>
      setNowPlayingMovies(movieResponse.data.results)
    );
    getUpComingMovies().then((movieResponse)=>
      setUpComingMovies(movieResponse.data.results)
    );
    getAllGenres().then((genreResponse)=>
      setGenres([...genres, ...genreResponse.data.genres])
    );
  },[])
  
  useEffect(()=>{
    let getAll = []
    nowPlayingMovies.map(a=>{
      if(a.addToMyList == true){
        getAll.push(a)
      }
    })
    saveToStorage(getAll) 
  })

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
      <View style={{marginTop:10}}>
        <FlatList
          data={nowPlayingMovies}
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
              LikeButtonOnpress = {() => setNowPlayingMovies(pressRow(nowPlayingMovies,item))}
              LikeButtonActive = {item.addToMyList}
              whichScreen = {"MovieScreen"}
            />
          )}
        />
      </View>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Coming Soon</Text>
          <Text style={styles.headerSubTitle}>VIEW ALL</Text>
        </View>
        <View style={{marginTop:15,marginBottom:15}}>
          <FlatList
            data={upComingMovies}
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
              />
            )}
          />
        </View>
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
  headerSubTitle:{
    fontSize:15,
    fontWeight:'bold',
    marginTop:20,
    marginRight:5
  },
  movieKindButton:{
    marginLeft:5,
    marginRight:5,
    width:80,
    height:40,
    backgroundColor:'white',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
