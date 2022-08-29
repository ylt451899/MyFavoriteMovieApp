import AsyncStorage from "@react-native-async-storage/async-storage";

export const setMySetting = (key,value) => AsyncStorage.setItem(key,value)

export const getMySetting = (key) => AsyncStorage.getItem(key)



