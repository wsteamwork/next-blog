import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import Grid from '@material-ui/core/Grid/Grid';
import Slider, {Settings} from 'react-slick';
import classNames from 'classnames';
import _ from 'lodash';

const styles: any = (theme: ThemeCustom) => createStyles({
  imgSize: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
    maxWidth: 300,
    minWidth: 50,
    verticalAlign: 'middle',
    [theme!.breakpoints!.down!('lg')]: {
      height: 200,
    },
    [theme!.breakpoints!.only!('xl')]: {
      height: 200,
    },
    [theme!.breakpoints!.only!('sm')]: {
      height: 200,
    },
  },
  imgContainer: {
    marginTop: 12,
    maxHeight: 300,
    minWidth: 50,
  },
  item: {
    marginLeft: 6,
    marginRight: 6,
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const IndexCategoryCarousel: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  const settings: Settings = {
    speed: 300,
    dots: false,
    slidesToShow: 4,
    infinite: true,
    swipeToSlide: true,
  };

  return (
    <Fragment>
      <Grid container item xs = {12} className = {classes.imgContainer} justify = 'center'>
        <Slider {...settings}>
          {_.map([0, 1, 2, 3], (o, i) => (
            <Grid item container key = {i} className = {classNames({
              [classes.item]: true,
            })}>
              <img src = '/static/room_demo.jpeg' alt = '' className = {classes.imgSize} />
            </Grid>
          ))}
        </Slider>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(IndexCategoryCarousel);
