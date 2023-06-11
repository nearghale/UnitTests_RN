import styled from 'styled-components/native';
import ContainerComponentProps from './types';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const SafeAreaView = styled.SafeAreaView<ContainerComponentProps>`
  flex: ${props => (props.flex ? props.flex : 0)};
  background-color: ${props => (props.bg ? props.bg : 'transparent')};
  margin-top: ${props => (props.mt ? props.mt : 0)}px;
  margin-bottom: ${props => (props.mb ? props.mb : 0)}px;
  border-top-left-radius: ${props =>
    props.borderTopLeftRadius ? props.borderTopLeftRadius : 0}px;
  border-top-right-radius: ${props =>
    props.borderTopRightRadius ? props.borderTopRightRadius : 0}px;
`;
export const NoSafeAreaView = styled.View<ContainerComponentProps>`
  flex: ${props => (props.flex ? props.flex : 0)};
`;

export const Container = styled.View<ContainerComponentProps>`
  flex: ${props => (props.flex ? props.flex : 0)};
  align-self: ${props => (props.alignSelf ? props.alignSelf : 'auto')};
  flex-direction: ${props => (props.flexDir ? props.flexDir : 'column')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  padding-left: ${props => (props.pl ? props.pl : 0)}px;
  padding-right: ${props => (props.pr ? props.pr : 0)}px;
  padding-top: ${props => (props.pt ? props.pt : 0)}px;
  padding-bottom: ${props => (props.pb ? props.pb : 0)}px;
  width: ${props => (props.w ? props.w : width)}px;
  height: ${props => (props.h ? props.h : width)}px;
`;
