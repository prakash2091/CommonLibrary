import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
//Components

//Utils
import styles from './Styles/CardStyles';

const type = {
  IMAGETOP: 'imageTop',
  IMAGELEFT: 'imageLeft',
};

const imageType = {
  COMPONENT: 'component',
  IMAGEURL: 'imageUrl',
};

const NewCard = props => {
  if (props.skeleton) {
    switch (props.type) {
      case type.IMAGETOP:
        return (
          <View style={styles.skeletonImageTopContainer}>
            <View style={styles.skeletonImageTopImage} />
            <View style={styles.skeletonDetailsImageTop}>
              <View style={styles.skeletonImageTopCategory} />
              <View style={styles.skeletonImageTopTitle} />
              <View style={styles.skeletonImageTopCaption} />
              <View style={styles.skeletonImageTopBody} />
            </View>
          </View>
        );
      case type.IMAGELEFT:
        return (
          <View style={styles.skeletonImageTopContainer}>
            <View style={styles.skeletonImageTopImage} />
            <View style={styles.skeletonDetailsImageTop}>
              <View style={styles.skeletonImageTopCategory} />
              <View style={styles.skeletonImageTopTitle} />
              <View style={styles.skeletonImageTopCaption} />
              <View style={styles.skeletonImageTopBody} />
            </View>
          </View>
        );
      default:
        return <View />;
    }
  }
  const {description = ''} = props;
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={props.onPress}>
      <View style={styles.imageTopTitleContainer}>
        <Text>TESTING NewCard Component</Text>
      </View>
    </TouchableOpacity>
  );
};
NewCard.propTypes = {
  type: PropTypes.oneOf(Object.values(type)),
  imageUrl: PropTypes.string,
  thumbnailImageUrl: PropTypes.string,
  imageType: PropTypes.oneOf(Object.values(imageType)),
  renderImageComponent: PropTypes.func,
  skeleton: PropTypes.bool,
  category: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onPress: PropTypes.func,
  onShowContainerElevation: PropTypes.bool,
};
NewCard.defaultProps = {
  type: type.IMAGETOP,
  imageUrl: '',
  thumbnailImageUrl: '',
  imageType: imageType.IMAGEURL,
  renderImageComponent: () => {
    <React.Fragment />;
  },
  skeleton: false,
  category: '',
  title: '',
  description: '',
  onPress: () => {},
  onShowContainerElevation: true,
};
export default NewCard;
