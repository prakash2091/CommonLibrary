const englishFontFamily = {
  black: 'NotoSans-Black',
  bold: 'NotoSans-Bold',
  medium: 'NotoSans-Medium',
  regular: 'NotoSans',
  semiBold: 'NotoSans-SemiBold'
}

const hindiFontFamily = {
  black: 'NotoSansDevanagariUI-Black',
  bold: 'NotoSansDevanagariUI-Bold',
  medium: 'NotoSansDevanagariUI-Medium',
  regular: 'NotoSansDevanagariUI',
  semiBold: 'NotoSansDevanagariUI-SemiBold'
}

let fontFamily = englishFontFamily

function setFontLanguage(locale) {
  if (locale === 'en') {
    fontFamily = englishFontFamily
  } else if (locale === 'hi') {
    fontFamily = hindiFontFamily
  }
}

function style() {
  return {
    headline: {
      extraLarge: {
        fontFamily: fontFamily.black,
        fontSize: 48,
        lineHeight: 64
      },
      large: {
        fontFamily: fontFamily.black,
        fontSize: 36,
        lineHeight: 42
      },
      normal: {
        fontFamily: fontFamily.black,
        fontSize: 28,
        lineHeight: 36
      },
      small: {
        fontFamily: fontFamily.black,
        fontSize: 24,
        lineHeight: 32
      },
      extraSmall: {
        fontFamily: fontFamily.black,
        fontSize: 20,
        lineHeight: 28,
        letterSpacing: 0.0018
      }
    },
    title: {
      extraLarge: {
        fontFamily: fontFamily.bold,
        fontSize: 24,
        lineHeight: 32
      },
      large: {
        fontFamily: fontFamily.bold,
        fontSize: 20,
        lineHeight: 28
      },
      normal: {
        fontFamily: fontFamily.bold,
        fontSize: 18,
        lineHeight: 24
      },
      small: {
        fontFamily: fontFamily.bold,
        fontSize: 16,
        lineHeight: 22
      },
      extraSmall: {
        fontFamily: fontFamily.bold,
        fontSize: 14,
        lineHeight: 20
      }
    },
    subtitle: {
      large: {
        fontFamily: fontFamily.medium,
        fontSize: 18,
        lineHeight: 26
      },
      normal: {
        fontFamily: fontFamily.medium,
        fontSize: 16,
        lineHeight: 24
      },
      small: {
        fontFamily: fontFamily.medium,
        fontSize: 14,
        lineHeight: 20
      }
    },
    body: {
      extraLarge: {
        regular: {
          fontFamily: fontFamily.regular,
          fontSize: 20,
          lineHeight: 32
        },
        medium: {
          fontFamily: fontFamily.medium,
          fontSize: 20,
          lineHeight: 32
        },
        semiBold: {
          fontFamily: fontFamily.semiBold,
          fontSize: 20,
          lineHeight: 32
        }
      },
      large: {
        regular: {
          fontFamily: fontFamily.regular,
          fontSize: 18,
          lineHeight: 28
        },
        medium: {
          fontFamily: fontFamily.medium,
          fontSize: 18,
          lineHeight: 28
        },
        semiBold: {
          fontFamily: fontFamily.semiBold,
          fontSize: 18,
          lineHeight: 28
        }
      },
      normal: {
        regular: {
          fontFamily: fontFamily.regular,
          fontSize: 16,
          lineHeight: 24
        },
        medium: {
          fontFamily: fontFamily.medium,
          fontSize: 16,
          lineHeight: 24
        },
        semiBold: {
          fontFamily: fontFamily.semiBold,
          fontSize: 16,
          lineHeight: 24
        }
      },
      small: {
        regular: {
          fontFamily: fontFamily.regular,
          fontSize: 14,
          lineHeight: 22.54
        },
        medium: {
          fontFamily: fontFamily.medium,
          fontSize: 14,
          lineHeight: 22.54
        },
        semiBold: {
          fontFamily: fontFamily.semiBold,
          fontSize: 14,
          lineHeight: 22.54
        }
      }
    },
    button: {
      normal: {
        fontFamily: fontFamily.bold,
        fontSize: 16,
        lineHeight: 24
      },
      small: {
        fontFamily: fontFamily.bold,
        fontSize: 14,
        lineHeight: 24
      },
      extraSmall: {
        fontFamily: fontFamily.bold,
        fontSize: 12,
        lineHeight: 24
      }
    },
    label: {
      large: {
        fontFamily: fontFamily.semiBold,
        fontSize: 16,
        lineHeight: 24
      },
      normal: {
        fontFamily: fontFamily.semiBold,
        fontSize: 14,
        lineHeight: 20
      },
      small: {
        fontFamily: fontFamily.semiBold,
        fontSize: 12,
        lineHeight: 18
      },
      extraSmall: {
        fontFamily: fontFamily.semiBold,
        fontSize: 10,
        lineHeight: 14
      }
    },
    caption: {
      large: {
        fontFamily: fontFamily.regular,
        fontSize: 16,
        lineHeight: 22
      },
      normal: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        lineHeight: 20
      },
      small: {
        fontFamily: fontFamily.regular,
        fontSize: 12,
        lineHeight: 18
      },
      extraSmall: {
        fontFamily: fontFamily.medium,
        fontSize: 10,
        lineHeight: 14
      }
    },
    list: {
      large: {
        fontFamily: fontFamily.medium,
        fontSize: 16,
        lineHeight: 24
      },
      small: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        lineHeight: 17.5
      }
    }
  }
}

export default {
  fontFamily,
  style,
  setFontLanguage
}
