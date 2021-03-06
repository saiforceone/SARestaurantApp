import React, {useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FlatList, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Icon} from 'react-native-elements';
import EmptyCard from '../../components/common/EmptyCard/EmptyCard';
import { COLORS, DetailScreenStyles, MiscStyles, SPACING_CONSTANTS } from '../../constants/styleConstants';
import ListItemCard from '../../components/common/ListItemCard/ListItemCard';
import { fetchOrders } from '../../store/actions/orderActions';
import ListHeader from '../../components/common/ListHeader/ListHeader';
import { getProfile } from '../../store/actions/appAction';
import CustomChip from '../../components/common/CustomChip/CustomChip';
import FormattingUtils from '../../utils/FormattingUtils';

/**
 * @function RenderItem
 * @param {Object} item
 * @param {Function} itemAction
 * @returns {JSX.Element}
 * @description Renders an order item for our list
 */
const renderItem = ({item, itemAction}) => (
  <ListItemCard
    action={() => itemAction({item})}
    title={`Order #: ${item._id}`}
    details={`Order Placed: ${FormattingUtils.formatDate({value: item.orderDate})}`}
    extraContent={
      <View style={[MiscStyles.flexRow, {paddingHorizontal: 0}]}>
        <CustomChip
          iconElement={
            <Icon
              color={COLORS.OFFWHITE}
              name='credit-card'
              size={16}
              type='material-community'
            />
          }
          title={FormattingUtils.formatAsCurrency({value: item.orderTotal})}
        />
        <CustomChip
          containerOverride={{marginLeft: SPACING_CONSTANTS.SMALL}}
          iconElement={
            <Icon
              color={COLORS.OFFWHITE}
              name='check-square'
              size={16}
              type='font-awesome'
            />
          }
          title={item.orderStatus}
        />
        <CustomChip
          containerOverride={{marginLeft: SPACING_CONSTANTS.SMALL}}
          iconElement={
            <Icon color={COLORS.OFFWHITE} name='location-pin' size={16} />
          }
          title={item.relatedLocation.locationName}
        />
      </View>
    }
  />
);

/**
 * @function renderContent
 * @param {Function} loginAction
 * @param {Function} itemAction
 * @param {Object} user
 * @param {Object} orderStore
 * @param {Function} getOrders
 * @returns {JSX.Element}
 * @description Renders content for the order screen
 */
const renderContent = ({loginAction, itemAction, user, orderStore, getOrders}) => {
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
    <View style={[DetailScreenStyles.container, {backgroundColor: COLORS.JUSTWHITE}]}>
      <ListHeader
        isLoading={orderStore.requestInProgress}
        title={orderStore.requestInProgress ? 'Loading orders...' : `Found ${orderStore.items.length} order(s)`}
      />
      <FlatList
        data={orderStore.items}
        keyExtractor={(item, id) => item._id}
        onRefresh={getOrders}
        refreshing={orderStore.requestInProgress}
        renderItem={({item}) => renderItem({item, itemAction})}
      />
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
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(fetchOrders());
  }, []);

  const getOrders = useCallback(() => {
    dispatch(fetchOrders());
  }, []);

  const itemAction = useCallback(({item}) => {
    if (!item) return;

    navigation.navigate('orderDetailScreen', {order: item});
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {renderContent({user: appStore.userProfile, itemAction, orderStore, getOrders})}
    </SafeAreaView>
  );
};

export default OrderListScreen;