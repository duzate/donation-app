import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ImageBackground, Text, View } from 'react-native';
import FoundationSvg from '../../assets/foundation.svg'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from '../../components/Button'
import { RootStackParamList } from '../../routes/app.routes';

import { styles } from './style';
import { theme } from '../../global/styles/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route, navigation }: Props) => {
  const [saved, setSaved] = useState(false)
  return (
    <View style={styles.container}>
      <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
        <ImageBackground style={styles.imageContainer} source={route.params.urlImage}>
          <View style={styles.action}>
            <View style={styles.background}>
              <AntDesign name="left" size={24} color="white" onPress={() => { navigation.goBack() }} />
            </View>
            <View style={styles.background} >
              <FontAwesome name="bookmark" size={20} color={saved ? theme.colors.primary : theme.colors.white} onPress={() => setSaved(!saved)} />
            </View>
          </View>
        </ImageBackground>
      </View>
      <Text style={styles.title}>
        {route.params.title}
      </Text>
      <View style={styles.foundationContainer}>
        <FoundationSvg />
        <Text style={styles.foundationTitle}>
          {route.params.foundation}
        </Text>
      </View>
      <Text style={styles.description}>
        We accomplish this through our unique network of health professionals and
        orga nization committed to improving health policies and practices, Isha Foundation is a nonprofit providing life saving medical care to children aims at creating a long and
        +more
      </Text>
      <View style={styles.donateContainer}>
        <View>
          <Text style={styles.donate}>
            Donated
          </Text>
          <Text>
            2000
          </Text>
        </View>
        <View>
          <Text style={styles.donate}>
            Total Donation
          </Text>
          <Text>
            $3456.08
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Donate now' />
      </View>
    </View >
  )
}

export default Details;
