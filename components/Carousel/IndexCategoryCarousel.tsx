import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment, useContext} from 'react';
import {compose} from 'recompose';
import Grid from '@material-ui/core/Grid/Grid';
import Slider, {Settings} from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import classNames from 'classnames';
import _ from 'lodash';
import IndexMainCard from '@/components/Cards/IndexMainCard';
import SliderArrowButton from '@/components/Button/SliderArrowButton';
import {BlogIndexContext, IBlogIndexContext} from '@/store/context/BlogIndexContext';
import Link from 'next/link';
import PostWrapper from '@/components/Wrapper/PostWrapper';

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
    '&:focus': {
      outline: 'none',
    },
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
  const {state}   = useContext<IBlogIndexContext>(BlogIndexContext);

  const {hotBlogs} = state;
  // console.log(hotBlogs);

  const settings: Settings = {
    speed: 300,
    dots: false,
    slidesToShow: 4,
    infinite: true,
    swipeToSlide: true,
    arrows: true,
    // lazyLoad: 'ondemand',
    nextArrow: <SliderArrowButton arrow = 'next' />,
    prevArrow: <SliderArrowButton arrow = 'prev' />,
  };

  return (
    <Fragment>
      <Grid item xs = {12} className = {classes.slideContainer}>
        {/* <Slider {...settings}>
          {_.map(hotBlogs, (post) => (
            <Fragment key = {post.id}>
              <div className = {classes.slide}>
                <PostWrapper post = {post}>
                  <IndexMainCard
                    title = {post.title}
                    description = ''
                    imgAlt = {post.title}
                    imgSrc={post.image}
                  />
                </PostWrapper>
              </div>
            </Fragment>
          ))}
        </Slider> */}
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(IndexCategoryCarousel);
