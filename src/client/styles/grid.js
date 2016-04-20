//TODO: encapsulate back to private function when card design is done

//typical sizes:
/*
  portrait:
    iPhone 4,5    375px
    iPhone 6      320px
    iPhone 6+     414px
    Galaxy S3     360px
  landscape:
    iPhone 4      480px
    iPhone 5      568px
    iPhone 6      667px (574px container)
    iPhone 6+     736px (574px container)
    Galaxy S3     640px (574px container)
*/

const ContainerWidth = {
  XS: 375,
  SM: 574,
  MD: 728,
  LG: 938,
  XL: 1148,
  XXL: 1384
}

export default {
  ContainerWidth : ContainerWidth,

  getContainerWidth(browserWidth) {
    //should match variables from bootstrap

    const Breakpoints = {
      XS: 0,    // Extra small screen / phone
      SM: 544,  // Small screen / phone
      MD: 768,  // Medium screen / tablet
      LG: 992,  // Large screen / desktop
      XL: 1200,  // Extra large screen / wide desktop
      XXL: 1440,  // Extra large screen / wide desktop
    }

    if (browserWidth <= ContainerWidth.SM) {
      return browserWidth //container becomes fluid for small size
    } else if (browserWidth > ContainerWidth.SM && browserWidth < Breakpoints.MD) {
      return ContainerWidth.SM
    } else if (browserWidth >= Breakpoints.MD && browserWidth < Breakpoints.LG) {
      return ContainerWidth.MD
    } else if (browserWidth >= Breakpoints.LG && browserWidth < Breakpoints.XL) {
      return ContainerWidth.LG
    } else if (browserWidth >= Breakpoints.XL && browserWidth < Breakpoints.XXL) {
      return ContainerWidth.XL
    } else if (browserWidth >= Breakpoints.XXL) {
      return ContainerWidth.XXL
    }
  },
  init(containerWidth) {
    return {
      //returns widh in px of Container's content area (width without paddings)
      getColumnContentWidth(numberOfCols) {
        const COLUMNS = 14
        const GUTTER_PX = 16

        const oneColPercent = (100 / COLUMNS) / 100
        return containerWidth * (oneColPercent * numberOfCols) - GUTTER_PX
      }
    }
  },

}