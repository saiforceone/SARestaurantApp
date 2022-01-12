import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * @function MenuItemDetailScreen
 * @param {Object} prop 
 * @returns 
 * @description Renders the menu item detail screen
 */
const MenuItemDetailScreen = prop => {

  const route = useRoute();
  // todo: unpack this to local state
  console.log('menuItemDetailScreen params: ', route.params.menuItem);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{flex: 1}}>
      <View>
        <Text>Menu Item Detail Screen</Text>
      </View>
    </SafeAreaView>
  )
};

export default MenuItemDetailScreen;
