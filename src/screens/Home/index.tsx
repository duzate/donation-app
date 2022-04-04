import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Avatar } from '../../components/Avatar';
import { Foundation } from '../../components/Foundation';
import { Search } from '../../components/Search';
import { CategorySelect } from '../../components/SelectCategory';
import { Wallet } from '../../components/Wallet';
import { foundations } from '../../utils/foundation';

import { styles } from './style';

const Home = ({ navigation }: any) => {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar />
        <Wallet />
      </View>
      <Search />

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.foundation}
        data={foundations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Foundation key={item.id} data={item} onPress={() => { navigation.navigate('Details', item) }} />
        )
        }
      />
    </View>
  );
}

export default Home;
