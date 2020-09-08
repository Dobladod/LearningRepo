import React from 'react';
import 
{ View, 
  Text, 
  Image, 
  StyleSheet, 
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform 
} from 'react-native';

import Colors from '../../constants/Colors';

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;
  if ( Platform.OS === 'android' &&Platform.Version >=21 ) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (  
    <View style={Estilo.product}>
      <View style={Estilo.touchable} >   
      <TouchableCmp  
    onPress={props.onViewDetail}
    useForeground  > 
    <View>
      <View style={Estilo.imageContainer}>
        <Image style={Estilo.image} source={{ uri: props.image }} />
      </View>
      <View style={Estilo.details}>
        <Text style={Estilo.title}>{props.title}</Text>
        <Text style={Estilo.price}>${props.price.toFixed(2)}</Text>
      </View>
      <View style={Estilo.actions}>
        <Button
          color={Colors.turquesa}
          title="Detalle"
          onPress={props.onViewDetail}
        />
        <Button
          color={Colors.turquesa}
          title="Al carrito"
          onPress={props.onAddToCart}
        />
      </View>
      </View>
      </TouchableCmp>
      </View>
    </View>  
  );
};

const Estilo = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20, 
    overflow : 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    fontFamily : 'open-sans-bold'
  },
  price: {
    fontSize: 14,
    color: '#888',
    fontFamily:'open-sans'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20
  },
  touchable : {
    overflow: 'hidden',
    borderRadius: 10
  }
});

export default ProductItem;
