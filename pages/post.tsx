import React, {Fragment, useReducer} from 'react';
import {compose} from 'recompose';
import {withRouter, WithRouterProps} from 'next/router';
import {NextComponentType, NextContext} from 'next';
import NavTop from '@/components/ToolBar/NavTop';
import Slider, {Settings} from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {Grid} from '@material-ui/core';
import GridContainer from '@/layouts/Grid/Container';
import SubscribeEmail from '@/components/Input/SubscribeEmail';
import CategoryTitle from '@/components/Bars/CategoryTitle';
import SocialShareContainer from '@/components/Bars/SocialShareContainer';
import ParallaxPostCard from '@/components/Cards/ParallaxPostCard';
import ToTheTop from '@/components/Button/ToTheTop';
import IndexMainCard from '@/components/Cards/IndexMainCard';
import Divider from '@material-ui/core/Divider';
import SliderArrowButton from '@/components/Button/SliderArrowButton';
import Review from '@/components/Cards/Review';
import {useSpring, config} from 'react-spring';
import {axios} from '@/store/utils/axiosBase';
import {AxiosRes} from '@/types/Requests/ResponseTemplate';
import {BlogIndexRes} from '@/types/Requests/Blog/BlogRespones';
import moment from 'moment';
import {
  PostDetailsState,
  PostDetailsReducer,
  PostDetailsContext,
  getSlider,
  getDetails,
} from '@/store/context/PostDetailsContext';
import _ from 'lodash';
// @ts-ignore
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import {BlogIndexGetParams} from '@/types/Requests/Blog/BlogRequests';

const styles: any = (theme: ThemeCustom) => createStyles({
  boxContent: {
    paddingTop: 40,
  },
  socialSticky: {
    position: 'sticky',
    top: '20%',
  },
  boxPopular: {
    marginTop: 30,
    position: 'sticky',
    top: '15%',
  },
  slidePopular: {
    padding: '0 8px',
    '&:focus': {
      outline: 'none',
    },
  },
  dividerPost: {
    margin: '30px 0',
    backgroundColor: 'transparent',
  },
  boxContentDetail: {
    marginTop: -30,
  },
  tagIMG_inHtmlPare: {
    width: '100% !important',
    objectFit: 'cover',
  },
  titleSlider:{
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    fontSize: '1.375rem',
  }
});

interface IPostPage extends WithRouterProps, Partial<WithStyles<typeof styles>> {
  classes: any;
  initState: PostDetailsState;
}

// @ts-ignore
const PostPage: NextComponentType<IPostPage> = (props) => {
  const {classes, initState,} = props;
  const [state, dispatch]                     = useReducer(PostDetailsReducer, initState);

  const {postDetails,sliderHot,sliderNew} = state;

  const slidePopular: Settings = {
    speed: 500,
    swipeToSlide: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const slideRelated: Settings = {
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: 'ondemand',
    nextArrow: <SliderArrowButton arrow = 'next' />,
    prevArrow: <SliderArrowButton arrow = 'prev' />,
  };

  const socialAnimate = useSpring({
    from: {
      transform: 'translateY(100px)',
      opacity: 0,
    },
    transform: 'translateY(0)',
    opacity: 1,
    config: config.slow,
    delay: 4000,
  });

  const transformHtmlContent = (node: any, index: number) => {
    if (node.name === 'img') {
      node.attribs.class = classes.tagIMG_inHtmlPare;
      return convertNodeToElement(node, index, transformHtmlContent);
    }
  };

  return (
    <Fragment>
      <PostDetailsContext.Provider value = {{state, dispatch}}>
        <NavTop />
        <ToTheTop />
        <ParallaxPostCard title={postDetails.title} time={moment(postDetails.created_at).format('DD/MM/YYYY')}/>
        <GridContainer xs = {11} className = {classes.boxContent}>
          <Grid container spacing = {40}>
            <Grid item container xs = {9}>
              <Grid item xs = {1}>
                <div className = {classes.socialSticky}>
                  <SocialShareContainer />
                </div>
              </Grid>
              <Grid item xs = {11} className = {classes.boxContentDetail}>
                <article>
                  {ReactHtmlParser(postDetails.content, {
                    transform: transformHtmlContent,
                  })}
                </article>
                <Divider style = {{marginTop: '50px'}} />
                {/*<Review />*/}
                {/*<FormComment />*/}
              </Grid>
              <Grid item xs = {12}>
                <Divider className = {classes.dividerPost} />
                <div>
                  <CategoryTitle title = 'Bài viết liên quan' scale = 'medium' />
                </div>
                <div>
                  <Slider {...slideRelated}>
                    {_.map(sliderNew, (o) => (
                      <Fragment key = {o.id}>
                        <div className = {classes.slidePopular}>
                          <IndexMainCard cardStyle = 'outside' description = '' />
                        </div>
                      </Fragment>
                    ))}
                  </Slider>
                </div>
              </Grid>
            </Grid>
            <Grid item xs = {3}>
              <div>
                <CategoryTitle title = 'Đăng ký nhận tin' scale = 'small' />
                <SubscribeEmail />
              </div>
              <div className = {classes.boxPopular}>
                <CategoryTitle title = 'Bài viết nổi bật' scale = 'small' />
                <Slider {...slidePopular}>
                  {_.map(sliderHot, (o) => (
                    <Fragment key = {o.id}>
                      <div className = {classes.slidePopular}>
                        <IndexMainCard
                          customClasses={{title:classes.titleSlider}}
                          cardStyle = 'outside' description = '' title = {o.title} />
                      </div>
                    </Fragment>
                  ))}
                </Slider>
              </div>
            </Grid>
          </Grid>
        </GridContainer>
      </PostDetailsContext.Provider>
    </Fragment>
  );
};

// @ts-ignore
PostPage.getInitialProps = async (context:any) => {
  const {id}                                = context.query;
  // const res: AxiosRes<BlogIndexRes>         = await axios.get(`blogs/${id}?include=categories.details,user`);
  // const resSliderHot: AxiosRes<BlogIndexRes[]> = await axios.get(`blogs?limit=6&hot=1`);
  // const resSliderNew: AxiosRes<BlogIndexRes[]> = await axios.get(`blogs?limit=8&new=1`);
  // const post                                = res.data.data;
  // const sliderHot                           = resSliderHot.data.data;
  // const sliderNew                           = resSliderNew.data.data;
  const sliderHotParams:BlogIndexGetParams ={
    limit:6,
    hot:1,
  };
  const sliderNewParams:BlogIndexGetParams ={
    limit:8,
    new:1,
  };
  let pDetails,sHot,sNew;
  const getData = await Promise.all([
    getDetails(parseInt(id)),
    getSlider(sliderHotParams),
    getSlider(sliderNewParams),
  ]).then(value => {
    pDetails = value[0];
    sHot = value[1];
    sNew = value[2];
    console.log(value[2]);
  });
  return {
    initState:{
      postDetails:pDetails.data,
      sliderHot:sHot.data,
      sliderNew:sNew.data,
    },
  };
};

export default compose(
  withRouter,
  withStyles(styles),
)(PostPage);
