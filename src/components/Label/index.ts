import styled, {css} from 'styled-components/native';
import {LabelComponentProps} from './types';
import {Color} from '../../styles';

export const LabelText = styled.Text<LabelComponentProps>`
  color: ${props => (props.color ? props.color : Color.white)};
  font-size: ${props => (props.fontSize ? props.fontSize : 14)}px;
  font-variant: lining-nums;
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : 0)}px;
  margin-left: ${props => (props.ml ? props.ml : 0)}px;
  margin-right: ${props => (props.mr ? props.mr : 0)}px;
  margin-top: ${props => (props.mt ? props.mt : 0)}px;
  margin-bottom: ${props => (props.mb ? props.mb : 0)}px;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  text-decoration: ${props => (props.trought ? 'line-through' : 'none')};
  text-decoration-color: ${props =>
    props.textDecorationColor ? props.textDecorationColor : 'transparent'};
  ${props =>
    props.lignHeight &&
    css`
      line-height: ${props.lignHeight}px;
    `}

  ${props =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `}
`;

export default LabelText;
