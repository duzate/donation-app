import { ImageProps } from 'react-native';
import AnimalPng from '../assets/animals.png'
import IshaPng from '../assets/isha.png'

export type FoundationProps = {
  id: string;
  title: string;
  foundation: string;
  urlImage: ImageProps | any;
}
export const foundations = [
  { id: '1', title: 'Donate for kids to their well being', foundation: 'Isha Foundation', urlImage: IshaPng },
  { id: '2', title: 'Donate for kids to their well being', foundation: 'Animals Fund', urlImage: AnimalPng },
]
