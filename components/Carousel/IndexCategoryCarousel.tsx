import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import Grid from '@material-ui/core/Grid/Grid';
import Slider, {Settings} from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import classNames from 'classnames';
import _ from 'lodash';
import IndexMainCard from '@/components/Cards/IndexMainCard';
import SliderArrowButton from '@/components/Button/SliderArrowButton';

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
  slide: {
    padding: 12,
    '&:focus':{
      outline:'none',
    }
  },
  slideContainer: {
    marginTop: 20,
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
    arrows: true,
    lazyLoad: 'ondemand',
    nextArrow: <SliderArrowButton arrow = 'next' />,
    prevArrow: <SliderArrowButton arrow = 'prev' />,
  };

  return (
    <Fragment>
      <Grid item xs = {12} className = {classes.slideContainer}>
        <Slider {...settings}>
          {_.map([0, 1, 2, 3, 4, 5, 6], (o, i) => (
            <div className = {classes.slide} key = {o}>
              <IndexMainCard />
            </div>
          ))}
        </Slider>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(IndexCategoryCarousel);
