import * as React from 'react';
import {Text, View, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {APPTHEME} from '../../constants';

const {COLORS, FONTS, SIZES} = APPTHEME;

interface SliderComponentProps {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  last?: boolean;
  onPress: () => void;
}

export const SliderComponent = ({
  title,
  description,
  image,
  last,
  onPress,
}: SliderComponentProps) => {
  return (
    <View
      style={{
        width: SIZES.width,
      }}>
      <View style={styles.containerImage}>
        <Image source={image} resizeMode="contain" style={styles.imagen} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={onPress}
          style={styles.button}
          underlayColor={COLORS.color3}>
          <Text style={styles.buttonText}>
            {last ? 'Empezemos!!' : 'Siguiente'}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    top: -70,
  },
  imagen: {
    width: SIZES.height > 700 ? '100%' : '70%',
    height: SIZES.height > 700 ? '100%' : '70%',
  },
  containerText: {
    position: 'absolute',
    bottom: '20%',
    width: '100%',
    alignItems: 'center',
  },
  title: {...FONTS.h1, color: COLORS.color3, textAlign: 'center'},
  description: {
    ...FONTS.body3,
    color: COLORS.color3,
    marginTop: SIZES.base,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '5%' : '2%',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: COLORS.color3,
    borderRadius: SIZES.radius,
  },
  buttonText: {
    ...FONTS.body3,
    color: COLORS.color2,
  },
});
