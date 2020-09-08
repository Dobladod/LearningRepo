import React from 'react';
import { Platform} from 'react-native';
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../constants/Colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primario : ''
  },
  headerTitleStyle : {
    fontFamily: 'open-sans-bold'},
  headerBackTitleStyle:{ 
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primario
}

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail : ProductDetailScreen,
    Cart: CartScreen
  },
  {
    navigationOptions: {
      drawerIcon : drawerConfig => 
      <Ionicons 
      name='md-cart' 
      size={23} 
      color = {drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const OrdersNavigator = createStackNavigator ({
  Orders : OrdersScreen
},
{
  navigationOptions: {
    drawerIcon : drawerConfig => 
    <Ionicons 
    name='md-list' 
    size={23} 
    color = {drawerConfig.tintColor} />
  },
  defaultNavigationOptions: defaultNavOptions
}
);

const ShopNavigator = createDrawerNavigator({
  Products : ProductsNavigator,
  Orders : OrdersNavigator
}, {
  contentOptions : {
    activeTintColor : Colors.primario
  }
});

export default createAppContainer(ShopNavigator);
