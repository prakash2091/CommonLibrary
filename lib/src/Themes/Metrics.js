import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  iconSize: 24,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  widgetBorderRadius: 8,
  dialog: {
    badgeSize: 80,
    badgeMarginBottom: 28,
  },
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
  tabBar: {
    height: 56,
    iconSize: 24,
    paddingVertical: 16,
    paddingHorizontal: 4,
    paddingBottom: 2,
  },
  activityListItem: {
    marginTop: 20,
    marginHorizontal: 24,
    paddingRight: 16,
    paddingBottom: 12,
    paddingVertical: 12,
  },
  // From Figma
  // Button measurements
  marginHorizontal: 16,
  largeButtonHeight: 56,
  normalButtonHeight: 48,
  smallButtonHeight: 40,
  largeButtonIconMargin: 16,
  normalButtonIconMargin: 8,
  smallButtonIconMargin: 8,
  largeButtonIconSize: 24,
  normalButtonIconSize: 20,
  smallButtonIconSize: 24,
  paddingHorizontal: 16,
  // Yara logo
  yaraLogo: {
    width: 125.31,
    height: 96,
  },

  // ListItem
  listItem: {
    largeMarginHorizontal: 24,
    smallMarginHorizontal: 16,
    iconSize: 24,
    imageSize: 24,
  },

  // CardWithCheckbox
  cardWithCheckbox: {
    iconSize: 48,
  },

  // Snackbar
  snackbar: {
    iconSize: 24,
  },

  leaderboardBar: {
    imageSize: 48,
    iconSize: 24,
  },

  leaderboardListItem: {
    iconSize: 32,
  },

  // Text Fields measurements
  textFieldIconSize: 24,
  textFieldHeight: 80,
  textFieldInnerContainerHeight: 56,
  textFieldTextInputHeight: 24,
  choiceChip: {
    iconSizeSmall: 22,
    iconSizeNormal: 24,
    heightSmall: 32,
    heightNormal: 40,
    borderRadiusSmall: 32,
    borderRadiusNormal: 32,
  },
  navBar: {
    skeletonButtonHeight: 64,
    skeletonButtonWidth: 36,
    skeletonTitleWidth: 160,
    skeletonTitleHeight: 10,
    skeletonCaptionWidth: 104,
    skeletonCaptionheight: 7,
  },
  taskFull: {
    iconMessage: 24,
  },
  cardLinear: {
    cardHeight: 154,
    cardIconSize: 24,
    cardImageSize: 80,
    margin: 24,
    borderRadius: 8,
    horizontalMargin: 16,
  },
  coachMaster: {
    leftIconWidth: 24,
    leftIconHeight: 24,
    bubbleIconWidth: 30,
    bubbleIconHeight: 16,
  },
  // Skeleton
  skeletonSpeed: 2000,
  stepper: {
    height: 164,
    width: 288,
    innerContainerWidth: 256,
    innerContainerHeight: 56,
    verticalMargin: 16,
    horizontalMargin: 16,
    buttonSize: 56,
  },
  //maps
  map: {
    largeIconSize: 80,
    iconWidth: 42,
    iconHeight: 28,
    coachMarkTop: 168,
    coachMarkBottom: 146,
    navigationBarHeight: 80,
  },
  takeMyFarmPhoto: {
    cacelIconWidth: 24,
    cancelIconHeight: 24,
    captureIconWidth: 62,
    captureIconHeight: 62,
    aimIconWidth: 80,
    aimIconHeight: 80,
    locationAddIconWidth: 24,
    locationAddIconHeight: 24,
  },
  navigationBar: {
    horizontalMargin: 16,
    approxRightItemWidth: 32,
    leftIconSize: 24,
    statusBarHeight: 24,
    iconMoreHorizontalSize: 18,
    choiceChipWidth: 110,
    titleComponentContainerLeftMarginWithLeftItem: 32,
  },
  savedLocation: {
    horizontalMargin: 16,
    topMargin: 24,
    bottomMargin: 128,
  },
  mobileNumber: {
    countryCodeContainerWidth: 84,
    countryCodeContainerHeight: 56,
    countryCodeContainerBorderRadius: 6,
    margin: 16,
    marginHorizontal: 16,
  },
  cropCalendar: {
    iconSize: 24,
    potatoBadgeSize: 40,
  },
  cardListItem: {
    cardHeight: 80,
    cardIconSize: 48,
    margin: 16,
    borderRadius: 8,
    horizontalMargin: 16,
    borderWidth: 1,
  },
  yieldSlider: {
    iconSize: 28,
    height: 172,
    itemSize: 48,
    borderRadius: 8,
  },
  tabs: {
    paddingHorizontal: 16,
    height: 56,
    underLineHeight: 3,
    underLineMargin: 16,
    underLineRadius: 9,
  },
  fertilizerList: {
    paddingVertical: 4,
    content: {
      paddingHorizontal: 16,
      paddingVertical: 4,
    },
    itemHeight: 48,
    skeleton: {
      tabTextHeight: 9,
      tabTextWidth: 96,
      fertItemTitleWidth: 196,
      fertItemTitleHeight: 9,
      fertItemQuantityWidth: 64,
      fertItemQuantityHeight: 9,
    },
  },
  potatoSowingIllustration: {
    containerHeight: 216,
    fieldHeight: 144,
    potatoWidth: 52,
    potatoHeight: 72,
    planToPlantSpacingContainerWidth: 80,
    planToPlantSpacingContainerHeight: 42,
    planterSizeContainerWidth: 44,
    planterSizeContainerHeight: 48,
    arrowVerticalWidth: 24,
    arrowVerticalHeight: 48,
    arrowHorizontalWidth: 80,
    arrowHorizontalHeight: 24,
  },
  cropDoctorCamera: {
    snapButtonContainerHeight: 112,
    actionBar: {
      iconContainerWidth: 48,
      iconContainerHeight: 48,
      paddingTop: 4,
      paddingBottom: 20,
      closeIconWidth: 24,
      closeIconHeight: 24,
      flashIconWidth: 24,
      flashIconHeight: 24,
    },
    coachmark: {
      paddingTop: 10,
      paddingBottom: 2,
    },
    snapButton: {
      container: {
        width: 64,
        height: 64,
      },
      icon: {
        width: 24,
        height: 24,
      },
    },
  },
  cropDoctorPreview: {
    navbarHeight: 80,
    imageContainer: {
      paddingTop: 16,
      paddingBottom: 62,
    },
    bottomContainer: {
      height: 112,
    },
  },
  addImageItem: {
    iconWidth: 24,
    iconHeight: 24,
  },
  addImageGroup: {
    image: {
      marginLeft: 8,
    },
  },
  stateSelection: {
    supportedStates: {
      paddingVertical: 16,
      listMarginTop: 12,
    },
    otherStates: {
      marginTop: 8,
      marginBottom: 12,
      paddingTop: 20,
      paddingBottom: 12,
      subTitleMarginTop: 16,
      listMarginTop: 20,
    },
  },
  messageCard: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginVertical: 4,
    borderRadius: 8,
    imageHeight: 250,
  },
  chatScreen: {
    iconSize: 48,
    paddingHorizontal: 22,
    paddingVertical: 22,
    largePaddingHorizontal: 12,
    largePaddingVertical: 12,
    marginTop: 4,
    errorContainer: {
      marginTop: 4,
      marginBottom: 68,
      marginHorizontal: 16,
    },
    articleContainer: {
      marginTop: 12,
      width: width - 66,
    },
    feedbackContainer: {
      marginTop: 25,
      marginHorizontal: 16,
      paddingVertical: 12,
    },
    feedBackButton: {
      marginTop: 12,
    },
    messagesInnerContainer: {
      paddingBottom: 100,
    },
  },
  notifyMeScreen: {
    textField: {
      marginTop: height * 0.15,
    },
    agreeAndContinueButton: {
      marginHorizontal: 12,
    },
    snackBar: {
      left: 12,
      bottom: 12,
      right: 12,
    },
  },
  notifyMeThankYouScreen: {
    doneIcon: {
      width: 80,
      height: 80,
      marginTop: height * 0.2,
    },
    title: {
      marginTop: 40,
    },
    subTitle: {
      marginTop: 16,
      marginHorizontal: 16,
    },
    finishButton: {
      bottom: 44,
    },
  },
  multiSelectionList: {
    skeletonItem: {
      height: 56,
      borderRadius: 6,
      marginTop: 12,
    },
  },
  coachmark: {
    skeletonDetailsContainer: {
      height: 58,
    },
    skeletonImage: {
      marginLeft: 16,
      height: 18,
      width: 18,
      borderRadius: 9,
    },
    skeletonDataContainer: {
      marginLeft: 16,
      marginRight: 12,
    },
    skeletonTitle: {
      width: '100%',
      height: 7,
    },
    skeletonSubTitle: {
      height: 7,
      marginTop: 12,
      marginRight: 52,
    },
  },
};

export default metrics;
