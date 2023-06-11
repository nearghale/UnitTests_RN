import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {ButtonComponentProps} from './types';
import * as Styles from './styles';
import {Color} from '../../styles';
import LinearGradient from 'react-native-linear-gradient';

const Button: React.FC<ButtonComponentProps> = ({
  loading,
  text,
  fontWeight,
  mt,
  primaryGradientColor,
  secondaryGradientColor,
  h,
  w,
  mb,
  borderRadius,
  borderWidth,
  borderColor,
  lineHeight,
  p,
  pt,
  pl,
  pb,
  fontSize,
  fontFamily,
  color,
  disabled,
  testID,
  onPress,
}) => {
  return (
    <LinearGradient
      useAngle
      testID="linear-gradient-component"
      angle={260.0}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          marginTop: mt,
          marginBottom: mb,
          width: w || 312,
          height: h || 48,
          padding: p,
          paddingTop: pt || 0,
          paddingLeft: pl,
          borderRadius: borderRadius,
          borderColor: borderColor,
          borderWidth: borderWidth,
          paddingBottom: pb || 0,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: disabled ? 0.6 : 1,
        },
        styles.shadow,
      ]}
      colors={[
        primaryGradientColor || Color.blue,
        secondaryGradientColor || Color.blue,
      ]}>
      <Styles.Button
        testID={testID || 'button-component'}
        onPress={onPress}
        w={w}
        h={h}
        disabled={disabled || loading}>
        {loading ? (
          <ActivityIndicator animating={loading} size={30} color={'#fff'} />
        ) : (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flexDirection: 'row',
            }}>
            <Styles.Text
              testID="text-component"
              lineHeight={lineHeight}
              fontSize={fontSize}
              color={color}
              fontWeight={fontWeight}
              fontFamily={fontFamily}>
              {text}
            </Styles.Text>
          </View>
        )}
      </Styles.Button>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },
});
