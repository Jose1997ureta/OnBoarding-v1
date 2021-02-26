import * as React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Animated,
  ScrollView,
} from 'react-native';
import {APPTHEME, JSONDATA} from '../../constants';
import {SliderComponent} from './slider-component';
import {DotComponent} from './dot-component';

const {COLORS, SIZES} = APPTHEME;
const {OnBoardingData} = JSONDATA;

export const OnBoardingScreen = () => {
  const scrollX = new Animated.Value(0);
  const scroll = React.useRef<ScrollView>(null);

  const RenderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={styles.dotContainer}>
        <View style={styles.dot}>
          {OnBoardingData.map((_, index) => (
            <DotComponent key={index} {...{index, dotPosition}} />
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* SLIDER */}
      <Animated.ScrollView
        ref={scroll}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {OnBoardingData.map(({id, title, description, image}, index) => {
          const last = index === OnBoardingData.length - 1;
          return (
            <SliderComponent
              key={id}
              {...{id, title, description, image, last}}
              onPress={() => {
                if (last) {
                  alert();
                } else {
                  if (scroll.current) {
                    scroll.current.scrollTo({
                      x: SIZES.width * (index + 1),
                      animated: true,
                    });
                  }
                }
              }}
            />
          );
        })}
      </Animated.ScrollView>
      {/* DOTS */}
      <RenderDots />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.color2,
  },
  dotContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '30%' : '14%',
  },
  dot: {
    flexDirection: 'row',
    alignItems: 'center',
    height: SIZES.padding,
  },
});
