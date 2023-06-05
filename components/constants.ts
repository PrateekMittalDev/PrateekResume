import {Dimensions} from 'react-native';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export const Constants = {
  deviceHeight: deviceHeight,
  deviceWidth: deviceWidth,
};
