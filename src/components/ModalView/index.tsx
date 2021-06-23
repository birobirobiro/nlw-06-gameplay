import React, {ReactNode} from 'react';

import { View, Modal, ModalProps } from 'react-native';
import { Background } from '../Background';

type Props = ModalProps & {
  children: ReactNode;
}

import {styles} from './styles';

export function ModalView({ children, ...rest} : Props) {
  return (
    <Modal
      transparent
      animationType='slide'
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>

    </Modal>
  );
}
