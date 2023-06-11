export interface TextProps {
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  lineHeight?: number;
  fontWeight?: number;
}

export interface ButtonContainerProps {
  h?: number;
  w?: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  mb?: number;
  borderRadius?: number;
  p?: number;
  pl?: number;
  mt?: number;
}

export interface ButtonComponentProps {
  loading: boolean;
  text: string;
  fontWeight?: number;
  mt?: number;
  backgroundColor?: string;
  h?: number;
  w?: number;
  borderWidth?: number;
  borderColor?: string;
  mb?: number;
  borderRadius?: number;
  lineHeight?: number;
  p?: number;
  pt?: number;
  pl?: number;
  pb?: number;
  fontSize?: number;
  fontFamily?: FontProps;
  color?: string;
  primaryGradientColor?: string;
  secondaryGradientColor?: string;
  onPress?: () => void;
  disabled?: boolean;
  testID?: string;
}

type FontProps =
  | 'Montserrat-Black'
  | 'Montserrat-Bold'
  | 'Montserrat-Light'
  | 'Montserrat-Medium'
  | 'Montserrat-Regular'
  | 'Montserrat-SemiBold';
