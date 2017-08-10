import {Navigation} from 'react-native-navigation';

import HomeList from './HomeList/HomeList';
import ItemView from './ItemView/ItemView';

export default function() {
    Navigation.registerComponent('example.HomeList', () => HomeList);
    Navigation.registerComponent('example.ItemView', () => ItemView);
}