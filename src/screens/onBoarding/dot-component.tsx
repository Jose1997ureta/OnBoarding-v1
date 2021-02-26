import * as React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {APPTHEME} from '../../constants';

const {COLORS, SIZES} = APPTHEME;

interface DotComponentProps {
  index: number;
  dotPosition: Animated.AnimatedDivision;
}

export const DotComponent = ({index, dotPosition}: DotComponentProps) => {
  const opacity = dotPosition.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.3, 1, 0.3],
    extrapolate: 'clamp',
  });

  const dotSize = dotPosition.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [SIZES.base, 15, SIZES.base],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      key={index}
      style={[styles.dotItem, {opacity, width: dotSize, height: dotSize}]}
    />
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '30%' : '16%',
  },
  dot: {
    flexDirection: 'row',
    alignItems: 'center',
    height: SIZES.padding,
  },
  dotItem: {
    width: 20,
    height: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.color3,
    marginHorizontal: SIZES.radius / 2,
  },
});
