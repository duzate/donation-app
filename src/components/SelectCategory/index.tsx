import React from 'react';
import { View } from 'react-native';

import { categories } from '../../utils/categories';

import { Category } from '../Categories';
import { styles } from './style';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
}

export const CategorySelect = ({
  categorySelected,
  setCategory,
}: Props) => {

  return (
    <View style={styles.category}>
      {
        categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
          />
        ))
      }
    </View>
  );
}
