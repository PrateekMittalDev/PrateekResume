import React from 'react';
import {View, Image, ImageSourcePropType} from 'react-native';
import {Circle, Svg} from 'react-native-svg';

interface RoundedImageProps {
  source: ImageSourcePropType;
  size: number;
  borderRadius: number;
}

const RoundedImage: React.FC<RoundedImageProps> = ({
  source,
  size,
  borderRadius,
}) => {
  const imageSize = size - borderRadius * 2;

  return (
    <View style={{width: size, height: size}}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          fill="transparent"
          stroke="black"
          strokeWidth={borderRadius}
        />
      </Svg>
      <Image
        source={source}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: imageSize,
          height: imageSize,
          borderRadius: imageSize / 2,
          position: 'absolute',
          top: borderRadius,
          left: borderRadius,
        }}
      />
    </View>
  );
};

export default RoundedImage;
