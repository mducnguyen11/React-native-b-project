import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

type Props = {
  iconSrc: ImageSourcePropType;
};

const MessageIcon = ({ iconSrc }: Props) => {
  console.log('SRC : ', iconSrc);
  return <Image style={style.container} source={iconSrc} />;
};

const style = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
  },
});

export default MessageIcon;
