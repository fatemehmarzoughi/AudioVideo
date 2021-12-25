import { Dimensions, Platform } from "react-native"

export const windowWidth = Dimensions.get('window').width;

export const h1_Size = 18;
export const h2_Size = 16;
export const h3_Size = 15;

export const isIOS = Platform.OS === 'ios' ? true : false;