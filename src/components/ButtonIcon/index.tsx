import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableHighlightProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = TouchableHighlightProps & {
  title: string;
}

export function ButtonIcon({title, ...rest} : Props) {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </TouchableOpacity>
  )
}