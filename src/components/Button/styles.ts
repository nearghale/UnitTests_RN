import styled from 'styled-components/native';
import {Color} from '../../styles';
import {TextProps, ButtonContainerProps} from './types';

export const Button = styled.TouchableOpacity<ButtonContainerProps>`
  margin-top: ${props => (props.mt ? props.mt : 0)}px;
  justify-content: center;
  border-width: ${props => (props.borderWidth ? props.borderWidth : 0)}px;
  border-color: ${props =>
    props.borderColor ? props.borderColor : 'transparent'};
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  height: ${props => (props.h ? props.h : 48)}px;
  width: ${props => (props.w ? props.w : 312)}px;
  margin-bottom: ${props => (props.mb ? props.mb : 0)}px;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : 0)}px;
  padding: ${props => (props.p ? props.p : 0)}px;
  padding-left: ${props => (props.pl ? props.pl : 0)}px;
`;

export const Text = styled.Text<TextProps>`
  font-size: ${props => (props.fontSize ? props.fontSize : 14)}px;
  color: ${props => (props.color ? props.color : Color.white)};
  line-height: ${props => (props.lineHeight ? props.lineHeight : 24)}px;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 100)};
`;
