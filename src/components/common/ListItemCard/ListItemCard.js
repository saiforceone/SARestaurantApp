import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Image, Text} from 'react-native-elements';
import ListItemCardStyles from './ListItemCard.styles';

/**
 * @function ListItemCard
 * @param {Object} props 
 * @returns {JSX.Element}
 * @description Renders a standard list item card that optionally shows an image
 */
const ListItemCard = props => {

  const {action, title, details, imageUrl, extraContent} = props;

  return (
    <TouchableOpacity onPress={action}>
      <View style={ListItemCardStyles.container}>
        {imageUrl && (
          <Image source={{uri: imageUrl}} style={ListItemCardStyles.image} />
        )}
        <View style={ListItemCardStyles.contentContainer}>
          <Text style={ListItemCardStyles.title}>{title}</Text>
          {details && (<Text numberOfLines={2} style={ListItemCardStyles.details}>{details}</Text>)}
          {extraContent && (<View style={ListItemCardStyles.extraContentContainer}>{extraContent}</View>)}
        </View>
      </View>
    </TouchableOpacity>
  );
};

ListItemCard.propTypes = {
  action: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string,
  imageUrl: PropTypes.string,
  extraContent: PropTypes.element,
};

export default ListItemCard;