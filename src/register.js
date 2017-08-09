import {Navigation} from 'react-native-navigation';
import HomeList from './HomeList/HomeList';

export default function() {
    Navigation.registerComponent('example.HomeList', () => HomeList);
}