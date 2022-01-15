import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Image, Text} from 'react-native-elements';
import { COLORS, FONT_FAMILIES, FONT_SIZES, FONT_WEIGHTS } from '../../constants/styleConstants';
import EmptyCard from '../../components/common/EmptyCard/EmptyCard';
import { MenuItemDetailStyles } from './Menu.styles';
import FormattingUtils from '../../utils/FormattingUtils';

/**
 * @function renderContent
 * @param {Object} menuItem
 * @param {Function} addToOrderAction - function that adds the current item to the user's order
 * @returns {JSX.Element}
 * @description Renders the menu item content
 */
const renderContent = ({menuItem, addToOrderAction}) => {
  if (!menuItem) {
    return (
      <EmptyCard
        title={'Menu Item Not Found'}
        details={'Looks like the menu item you are looking for was eaten. Sorry about that.'}
      />
    );
  }

  return (
    <View style={MenuItemDetailStyles.container}>
      <ScrollView contentContainerStyle={MenuItemDetailStyles.scrollView}>
        <Image source={{uri: menuItem['mainImage']}} style={MenuItemDetailStyles.mainImage} />
        <View style={MenuItemDetailStyles.contentContainer}>
          <Text style={MenuItemDetailStyles.title}>{menuItem['itemName']}</Text>
          <Text style={MenuItemDetailStyles.details}>{menuItem['description']}</Text>
          <Text style={MenuItemDetailStyles.important}>{FormattingUtils.formatAsCurrency({value: menuItem['baseCost']})}</Text>
        </View>
      </ScrollView>
      <View style={MenuItemDetailStyles.buttonContainer}>
        <Button
          buttonStyle={{backgroundColor: COLORS.GREENISH}}
          icon={{
            color: COLORS.OFFWHITE,
            name: 'shopping',
            type: 'material-community'
          }}
          onPress={() => addToOrderAction()}
          title={'Add to Order'}
        />
      </View>
    </View>
  );
}

/**
 * @function MenuItemDetailScreen
 * @param {Object} prop 
 * @returns 
 * @description Renders the menu item detail screen
 */
const MenuItemDetailScreen = prop => {

  const [menuItem, setMenuItem] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  
  useEffect(() => {
    const {params: {menuItem: _menuItem}} = route;
  
    if (_menuItem) {
      setMenuItem(_menuItem);
      navigation.setOptions({
        title: _menuItem['itemName']
      });
    }
  }, []);

  const addToOrderAction = () => {
    console.log('Should add to order');
  }
  
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{flex: 1}}>
      {renderContent({menuItem, addToOrderAction})}
    </SafeAreaView>
  )
};

export default MenuItemDetailScreen;
