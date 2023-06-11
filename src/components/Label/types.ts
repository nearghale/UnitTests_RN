import { TextAlignProps } from '@interfaces/commonTypesComponents';

export interface LabelComponentProps {
  fontSize?: number;
  w?: number;
  color?: string;
  uppercase?: boolean;
  trought?: boolean;
  fontFamily?: string;
  opacity?: number;
  lignHeight?: number;
  letterSpacing?: number;
  ml?: number;
  mt?: number;
  fontWeight?: string | number;
  zIndex?: number;
  mr?: number;
  mb?: number;
  textAlign?: TextAlignProps;
  textDecorationColor?: string;
}
