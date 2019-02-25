declare module 'react-image' {
  import React from 'react';

  interface ReactImageProps {
    src: string | string[]

    unloader?: React.ReactElement

    decode?: boolean

    container?(children: React.ReactElement): React.ReactElement
  }

  export default class ReactImage extends React.Component<ReactImageProps, any> {
  }
}
