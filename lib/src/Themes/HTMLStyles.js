import { Fonts, Colors } from './index'

export const classesStyles = {
  'ql-size-large': {
    ...Fonts.style().title.large,
    color: Colors.ahua.black.number100
  },
  'ql-size-small': {
    ...Fonts.style().title.small,
    color: Colors.ahua.black.number100
  },
  'ql-size-huge': {
    ...Fonts.style().title.extraLarge,
    color: Colors.ahua.black.number100
  }
}

export const tagsStyles = {
  'h1': {
    ...Fonts.style().title.extraLarge,
    color: Colors.ahua.black.number100
  },
  'h2': {
    ...Fonts.style().title.large,
    color: Colors.ahua.black.number100
  },
  'h3': {
    ...Fonts.style().title.normal,
    color: Colors.ahua.black.number100
  },
  'h4': {
    ...Fonts.style().title.small,
    color: Colors.ahua.black.number100
  },
  'p': {
    ...Fonts.style().body.normal.regular,
    color: Colors.ahua.black.number80
  },
  'ol': {
    ...Fonts.style().body.normal.regular,
    color: Colors.ahua.black.number80
  },
  'ul': {
    ...Fonts.style().body.normal.regular,
    color: Colors.ahua.black.number80
  },
  'strong': {
    ...Fonts.style().body.normal.semiBold,
    color: Colors.ahua.black.number100
  },
  'u': {
    ...Fonts.style().body.normal.regular,
    color: Colors.ahua.black.number80
  }
}

