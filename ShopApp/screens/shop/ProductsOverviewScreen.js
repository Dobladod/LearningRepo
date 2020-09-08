import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/UI/HeaderButton';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    return (
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => 
        <ProductItem 
        image ={itemData.item.imageUrl}
        titile ={itemData.item.title}
        price ={itemData.item.price}
        onViewDetail = { () => { 
            props.navigation.navigate('ProductDetail', { 
                productId : itemData.item.id,
                productTitle : itemData.item.titile
            });
        }} 
        onAddToCart = { () => {
          dispatch(cartActions.addToCart(itemData.item));
        }}
             />}
      />
    );
  };
  
  ProductsOverviewScreen.navigationOptions = navData => {
    return { 
      headerTitle: 'Productos',
      headerLeft: () => {
        return (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName='md-menu'
          onPress={()=>{
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )},
      headerRight: () => {
          return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName='md-cart'
            onPress={()=>{
              navData.navigation.navigate('Cart')
            }}
          />
        </HeaderButtons>
      )} };
    };
  
  export default ProductsOverviewScreen;
  
