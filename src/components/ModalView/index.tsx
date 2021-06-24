import React, {ReactNode, VoidFunctionComponent} from 'react';

import { 
  View, 
  Modal, 
  ModalProps, 
  TouchableWithoutFeedback 
} from 'react-native';
import { Background } from '../Background';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

import {styles} from './styles';

export function ModalView({ 
  children,
  closeModal,
  ...rest
} : Props) {
  return (
    <Modal
      transparent
      animationType='slide'
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
