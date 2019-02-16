import React, {Fragment} from 'react';
import {compose} from 'recompose';
import {withRouter, WithRouterProps} from 'next/router';
import {NextComponentType} from 'next';
import NavTop from '@/components/ToolBar/NavTop';
import {Parallax} from 'react-parallax';
import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {Typography, Grid} from '@material-ui/core';
import AccessTimeOutlined from '@material-ui/icons/AccessTimeRounded';
import PersonRounded from '@material-ui/icons/PersonRounded';
import SocialShare from '@/components/Button/SocialShare';
import GridContainer from '@/layouts/Grid/Container';
import {Facebook, Twitter, Google} from 'mdi-material-ui';
import SubscribeEmail from '@/components/Input/SubscribeEmail';
import CategoryTitle from '@/components/Bars/CategoryTitle';
import ChipCard from '@/components/Button/ChipCard';
import Slider, {Settings} from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IndexMainCard from '@/components/Cards/IndexMainCard';

const styles: any = (theme: ThemeCustom) => createStyles({
  insideParallax: {
    padding: 20,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    height: 450,
    width: '100%',
    background: 'linear-gradient(to bottom,rgba(50,50,50,0) 0%,rgba(16,15,15,.93) 89%,rgba(16,15,15,.95) 93%)',
    transition: '.2s all ease-in-out',
    opacity: 0.9,
    content: '""',
    position: 'absolute',
    display: 'block',
    bottom: 0,
  },
  boxTitle: {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  Title: {
    width: 900,
    position: 'absolute',
    bottom: 0,
    paddingBottom: 16,
    margin: '0 auto',
    left: '50%',
    WebkitTransform: 'translateX(-50%) translateY(0%)',
    MozTransform: 'translateX(-50%) translateY(0%)',
    transform: 'translateX(-50%) translateY(0%)',
    textAlign: 'left',
  },
  postTitle: {
    color: '#ffffff',
    paddingBottom: 25,
    paddingTop: 10,
    fontSize: '2.5rem',
  },
  postTime: {
    color: '#ffffff',
    borderRight: '1px solid #fff',
    paddingRight: 8,
  },
  postAuthor: {
    color: '#ffffff',
    padding: '0 8px',
  },
  iconTitle: {
    verticalAlign: 'bottom',
  },
  boxContent: {
    paddingTop: 20,
  },
  iconColor: {
    color: '#505050',
  },
});

interface IPostPage extends WithRouterProps, Partial<WithStyles<typeof styles>> {
  classes: any;
}

const PostPage: NextComponentType<IPostPage> = (props) => {
  const {classes} = props;

  const settings: Settings = {
    speed: 500,
    swipeToSlide: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Fragment>
      <NavTop />
      <Parallax bgImage = '/static/room_demo.jpeg' strength = {500} bgImageStyle = {{top: '-30%'}}>
        <div style = {{height: 450}}>
          <div className = {classes.insideParallax}>
            <div className = {classes.boxTitle}>
              <div className = {classes.Title}>
                <ChipCard text = 'Mẹo vặt' />
                <Typography variant = 'h3' className = {classes.postTitle}>
                  Cuộc sống đâu lường trước điều gì !!!
                </Typography>
                <Typography variant = 'subtitle2'>
                  <span className = {classes.postTime}>
                    <AccessTimeOutlined className = {classes.iconTitle} /> 12-08-2011</span>
                  <span className = {classes.postAuthor}>
                    <PersonRounded className = {classes.iconTitle} /> Cristiano Messi </span>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <GridContainer xs = {11} className = {classes.boxContent}>
        <Grid container>
          <Grid item xs = {1} className = {classes.boxShare}>
            <SocialShare customClasses = {{
              icon: classes.iconColor,
            }}>
              <Facebook />
            </SocialShare >
            <SocialShare customClasses = {{
              icon: classes.iconColor,
            }}>
              <Twitter />
            </SocialShare>
            <SocialShare customClasses = {{
              icon: classes.iconColor,
            }}>
              <Google />
            </SocialShare>
          </Grid>
          <Grid item xs = {8}>

            <Slider {...settings}>
              <IndexMainCard/>
              <IndexMainCard/>
              <IndexMainCard/>
              <IndexMainCard/>
              <IndexMainCard/>
            </Slider>

          </Grid>
          <Grid item xs = {3}>
            <CategoryTitle title = 'Subscribe email' scale = 'small' />
            <SubscribeEmail />
          </Grid>
        </Grid>
      </GridContainer>
    </Fragment>
  );
};

export default compose(
  withRouter,
  withStyles(styles),
)(PostPage);
