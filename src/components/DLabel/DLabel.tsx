import PropTypes from 'prop-types';
import * as React from 'react';
import { Text } from 'react-native'

import styles from './styles';

const DLabel = (props: DLabelProps) => {
  const { text, ...rest } = props;

  return (
    <Text {...props} style={[styles.TextStyle]} >
      {text}
    </Text>
    );
}

DLabel.propTypes = {
  text: PropTypes.string,
};

export default DLabel;
