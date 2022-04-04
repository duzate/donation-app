import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, ImageProps, Text, View } from "react-native";

import { Button } from "../Button";
import FoundationSvg from '../../assets/foundation.svg'

import { styles } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/app.routes";
import { FoundationProps } from "../../utils/foundation";



export type Props = {
  data: FoundationProps;
  onPress: () => void
}

export const Foundation = ({ data, onPress }: Props) => {
  return (
    <View style={styles.shadow} >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={data.urlImage} style={styles.imageContainer} />
        </View>
        <Text style={styles.title}>
          {data.title}
        </Text>
        <View style={styles.foundationContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <FoundationSvg />
            <Text style={styles.foundationTitle}>
              {data.foundation}
            </Text>
          </View>
          <View style={{ width: 84 }}>
            <Button title="Donate" onPress={onPress} />
          </View>
        </View>
      </View>
    </View>
  )
}
