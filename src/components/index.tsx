import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import Touch from '../Touch';

import styles from './styles';

export type Color =
  | 'white'
  | 'gray'
  | 'black'
  | 'blue'
  | 'lightGray'
  | 'placeholderGray'
  | 'negative';
type Size = 'small' | 'normal' | 'medium' | 'large' | 'huge';
type Weight = 'light' | 'regular' | 'medium';
type Align = 'left' | 'center' | 'right';
type Opacity = 'active' | 'inactive' | 'inactiveLabel';
type EllipsizeMode = 'head' | 'middle' | 'tail' | 'clip' | undefined;

interface TextProps {
  onLayout?: () => void;
  onPress?: () => void;
  style?: any;
  styleOuter?: any;
  numberOfLines?: number;
  color: Color;
  size: Size;
  weight: Weight;
  align: Align;
  opacity: Opacity;
  ellipsizeMode?: EllipsizeMode;
  children?: React.ReactElement<any> | string;
  inactive: boolean;
}

class ComponentText extends PureComponent<TextProps, any> {
  static defaultProps: TextProps = {
    style: {},
    styleOuter: {},
    numberOfLines: 0,
    ellipsizeMode: 'tail',
    weight: 'regular',
    size: 'normal',
    align: 'left',
    opacity: 'active',
    color: 'black',
    inactive: false
  };

  static TitleLight = ({
    children,
    color,
    inactive,
    ...rest
  }: Partial<TextProps>) => (
    <ComponentText
      weight="light"
      size="huge"
      align="center"
      color={color || 'black'}
      opacity={inactive ? 'inactive' : 'active'}
      {...rest}>
      {children}
    </ComponentText>
  );

  static H1 = ({ children, color, inactive, ...rest }: Partial<TextProps>) => (
    <ComponentText
      weight="regular"
      size="large"
      align="center"
      color={color || 'black'}
      opacity={inactive ? 'inactive' : 'active'}
      {...rest}>
      {children}
    </ComponentText>
  );

  static H2 = ({ children, color, inactive, ...rest }: Partial<TextProps>) => (
    <ComponentText
      weight="regular"
      size="medium"
      color={color || 'black'}
      opacity={inactive ? 'inactive' : 'active'}
      {...rest}>
      {children}
    </ComponentText>
  );

  static Plain = ({
    children,
    color,
    inactive,
    ...rest
  }: Partial<TextProps>) => (
    <ComponentText
      weight="regular"
      size="normal"
      color={color || 'black'}
      opacity={inactive ? 'inactive' : 'active'}
      {...rest}>
      {children}
    </ComponentText>
  );

  static Label = ({ children, color, ...rest }: Partial<TextProps>) => (
    <ComponentText
      weight="light"
      size="small"
      opacity="inactiveLabel"
      color={color || 'black'}
      {...rest}>
      {children}
    </ComponentText>
  );

  formatTouchStyles(): any {
    const { styleOuter } = this.props;
    return [styleOuter];
  }

  formatTextStyles(): any {
    const { weight, size, color, align, opacity, style } = this.props;
    return [
      styles.text.common,
      styles.colors[color],
      styles.weights[weight],
      styles.sizes[size],
      styles.aligns[align],
      styles.opacities[opacity],
      style
    ];
  }

  render() {
    const {
      onPress,
      onLayout,
      numberOfLines,
      ellipsizeMode,
      children
    } = this.props;

    return (
      <Touch
        style={this.formatTouchStyles()}
        disabled={typeof onPress !== 'function'}
        onPress={onPress}
        onLayout={onLayout}>
        <Text
          style={this.formatTextStyles()}
          numberOfLines={numberOfLines}
          ellipsizeMode={ellipsizeMode}>
          {children}
        </Text>
      </Touch>
    );
  }
}

export default ComponentText;
