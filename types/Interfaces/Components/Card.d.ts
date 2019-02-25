import {MomentInput} from 'moment';
import {GridSize, GridSpacing, GridItemsAlignment} from '@material-ui/core/Grid';
import {CustomClasses} from '@/types/Interfaces/CustomInterface';
import {ReactNode} from 'react';

type IndexMainCardClasses = 'image' | 'overlayContainer' | 'title' | 'chip'

export interface IIndexMainCard extends CustomClasses<IndexMainCardClasses> {
  /**
   * Placement of card content
   * @default 'outside'
   */
  cardStyle?: 'inside' | 'outside'

  /**
   * Name of author
   */
  author?: string

  /**
   * Image height
   */
  imgHeight?: number

  /**
   * Image alt
   */
  imgAlt?: string

  /**
   * Image source
   */
  imgSrc?: string

  /**
   * Image max height
   */
  maxHeight?: number

  /**
   * Content of chip text
   */
  chipText?: string

  /**
   * Description for card
   */
  description?: ReactNode

  /**
   * Card title
   */
  title?: string

  /**
   * Card show time
   */
  time?: MomentInput

  /**
   * Make card into horizontal position
   * @default false
   */
  horizontal?: boolean

  /**
   * Ratio between image and content
   * @default {}
   */
  ratio?: {
    image?: GridSize,
    content?: GridSize
  }

  /**
   * Maximum description length before truncate
   * @default 200
   */
  descriptionLength?: number

  /**
   * Spacing between item in card
   */
  rootSpacing?: GridSpacing

  /**
   * Card content align-item
   * @default 'stretch'
   */
  contentAlign?: GridItemsAlignment
}
