import React from "react"
import * as StorageHelper from '../helpers/StorageHelper'

export const pressRow = (data,item) => {
    const newData = data.map(a=>{
      let copyA = {...a}
      if(copyA.id == item.id){
        copyA.addToMyList = !item.addToMyList
      }
      return(copyA)
    })
    return(newData)
  }

export const saveToStorage = async(getMyFavoriteMovie) =>{
    try{
        await StorageHelper.setMySetting('myList',JSON.stringify(getMyFavoriteMovie))
    }catch(err){
        console.log(err)
    }
}