import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-elements';
import EmptyCard from '../../components/common/EmptyCard/EmptyCard';
import { COLORS, DetailScreenStyles } from '../../constants/styleConstants';
import ListItemCard from '../../components/common/ListItemCard/ListItemCard';

// todo: finish this next stream
// const renderItem = ({item, itemAction}) => (
//   <ListItemCard
//     action={() => itemAction({item})}
//     title={item[]}
//   />
// )

/**
 * @function renderContent
 * @param {Function} loginAction
 * @param {Function} itemAction
 * @param {Object} user
 * @param {Object} orderStore
 * @returns {JSX.Element}
 * @description Renders content for the order screen
 */
const renderContent = ({loginAction, itemAction, user, orderStore}) => {
  if (!user || !orderStore) {
    return (
      <EmptyCard
        title='Orders Unavailable'
        details='Orders are not unavailable if you are not logged in'
        actionElements={
          <Button
            buttonStyle={{backgroundColor: COLORS.GREENISH}}
            icon={{
              color: COLORS.JUSTWHITE,
              name: 'login-variant',
              type: 'material-community'
            }}
            onPress={loginAction}
            title={'Login'}
          />
        }
      />
    );
  }
  
  return (
    <View style={DetailScreenStyles.container}>
      <Text>Should show a list. Next time we will implement the list</Text>
    </View>
  );
}

/**
 * @function OrderListScreen
 * @returns {JSX.Element}
 * @description Renders the order list screen
 */
const OrderListScreen = () => {

  const dispatch = useDispatch();
  const orderStore = useSelector(state => state['orders']);
  const appStore = useSelector(state => state['app'])

  // todo: implement use effect to fetch orders

  return (
    <SafeAreaView style={{flex: 1}}>
      {renderContent({user: appStore.userProfile, orderStore})}
    </SafeAreaView>
  );
};

export default OrderListScreen;