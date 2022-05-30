import {StyleSheet} from 'react-native';
import {Colors, Fonts, Elevation, Metrics} from '../../Themes';
const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
  },
  imageTopBaseContainer: {
    flex: 1,
  },
  innerContainer: {
    ...Elevation.style.number6,
    borderWidth: 1,
    borderColor: Colors.ahua.grey.number10,
    backgroundColor: Colors.ahua.white.number100,
    overflow: 'hidden',
    borderRadius: 8,
  },
  innerContainerWithoutElevation: {
    ...Elevation.style.number0,
  },
  imageTop: {
    height: 118,
    width: Metrics.screenWidth - 32,
    resizeMode: 'cover',
  },
  imageTopDetailsContainer: {
    paddingHorizontal: 16,
  },
  imageTopTitleContainer: {
    marginTop: 100,
  },
  skeletonImageTopContainer: {
    backgroundColor: Colors.ahua.white.number100,
    borderWidth: 1,
    borderColor: Colors.ahua.grey.number10,
    borderRadius: 8,
  },
  skeletonImageTopImage: {
    height: 142,
    backgroundColor: Colors.ahua.black.number10,
  },
  skeletonDetailsImageTop: {
    paddingHorizontal: 16,
  },
  skeletonImageTopCategory: {
    marginTop: 18,
    backgroundColor: Colors.ahua.black.number10,
    height: 8,
    width: 57,
  },
  skeletonImageTopTitle: {
    marginTop: 16,
    backgroundColor: Colors.ahua.black.number10,
    height: 11,
    width: 254,
  },
  skeletonImageTopCaption: {
    marginTop: 16,
    backgroundColor: Colors.ahua.black.number10,
    height: 8,
    width: 226,
  },
  skeletonImageTopBody: {
    marginTop: 16,
    backgroundColor: Colors.ahua.black.number10,
    marginBottom: 30,
    height: 8,
    width: 177,
  },
  category: {
    ...Fonts.style().label.normal,
    color: Colors.ahua.black.number60,
  },
  title: {
    ...Fonts.style().title.large,
    color: Colors.ahua.black.number100,
    marginTop: 2,
  },
  description: {
    ...Fonts.style().caption.normal,
    color: Colors.ahua.black.number80,
    marginTop: 4,
    marginBottom: 24,
  },
  imageLeftInnerContainer: {
    ...Elevation.style.number0,
    flexDirection: 'row',
    borderColor: Colors.ahua.black.number15,
    borderWidth: 1,
    minHeight: 108,
  },
  imageLeft: {
    width: 80,
    resizeMode: 'cover',
    height: '100%',
  },
  imageLeftDetailsContainer: {
    flex: 1,
    marginLeft: 16,
    marginRight: 14,
    marginVertical: 20,
    justifyContent: 'center',
  },
  imageLeftTitleContainerStyles: {
    flexDirection: 'column',
  },
  imageLeftTitle: {
    ...Fonts.style().title.normal,
    color: Colors.ahua.grey.number100,
  },
  imageLeftCategory: {
    ...Fonts.style().label.small,
    color: Colors.ahua.black.number60,
    marginTop: 4,
  },
  skeletonImageLeftContainer: {
    flexDirection: 'row',
  },
  skeletonImageLeftImage: {
    width: 80,
    height: 108,
    backgroundColor: Colors.ahua.grey.number10,
  },
  skeletonImageLeftDetailsContaine: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 16,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  skeletonImageLeftTitleContainer: {
    paddingVertical: 10,
    justifyContent: 'space-between',
    height: 76,
  },
  skeletonImageLeftTitle: {
    height: 10,
    width: 216,
    backgroundColor: Colors.ahua.grey.number10,
  },
  skeletonImageLeftTitleBottom: {
    height: 8,
  },
});
export default styles;
