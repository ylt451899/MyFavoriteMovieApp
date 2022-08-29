import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { getPoster } from '../helpers/MovieHelper';
import * as Icon from 'react-native-feather';

export const MovieItem = ({poster,title,original_language,onPress,LikeButtonOnpress,LikeButtonActive,whichScreen}) => {
    return(
      <TouchableOpacity onPress={onPress}>
          <ImageBackground 
            style={{...styles.movieButton, width:230,height:340}}
            imageStyle={{borderRadius:12}}
            source={{ uri: getPoster(poster)}}
          >
            {whichScreen == "MovieScreen" ? 
              <TouchableOpacity onPress={LikeButtonOnpress} style={{marginTop:"130%",marginLeft:"80%",width:30,height:30}}>
                {LikeButtonActive == true ? <Icon.Heart width={30} height={30} stroke="#FF2D2D" strokeWidth={3} fill="#FF2D2D"/> : 
                                    <Icon.Heart width={30} height={30} stroke="white" strokeWidth={3} />}
              </TouchableOpacity> :
              <View/>}
          </ImageBackground>
        <View>
            <Text style={styles.movieTitle}>{title}</Text>
            <Text style={styles.movieSubtitle}>{original_language}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  const styles = StyleSheet.create({
    movieButton:{
        marginLeft:5,
        marginRight:5,
        backgroundColor:'blue',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    movieTitle:{
      marginTop:4,
      marginLeft:10,
      fontSize:18,
    },
    movieSubtitle:{
      marginLeft:10,
      fontSize:12,
    }
  });