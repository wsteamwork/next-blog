declare module 'react-parallax' {
  import * as CSS from 'csstype';
  import React from 'react';

  interface CSSStyles extends CSS.Properties<number | string> {
    // Allow pseudo selectors and media queries
    [k: string]: CSS.Properties<number | string>[keyof CSS.Properties];
  }

  export interface ReactParallaxProps {

    /**
     *
     */
    bgImage?: string

    /**
     *
     */
    bgImageAlt?: string

    /**
     *
     */
    bgImageSizes?: string

    /**
     *
     */
    bgImageSrcSet?: string

    /**
     *
     */
    style?: object

    /**
     *
     */
    bgStyle?: CSSStyles

    /**
     *
     */
    bgClassName?: string

    /**
     *
     */
    contentClassName?: string

    bgImageStyle?: object

    strength?: number

    blur?: {
      min: number,
      max: number
    } | number

    renderLayer?(percentage: number): React.ReactElement

    disable?: boolean

    className?: string

    parent?: React.ReactNode

    log?: boolean
  }

  export class Parallax extends React.Component<ReactParallaxProps, any> {

  }
}
