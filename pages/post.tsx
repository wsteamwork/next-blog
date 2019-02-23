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
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IndexMainCard from '@/components/Cards/IndexMainCard';
import FormComment from '@/components/Input/FormComment';
import SocialShareContainer from '@/components/Bars/SocialShareContainer';
import {grey} from '@material-ui/core/colors';
import ParallaxPostCard from '@/components/Cards/ParallaxPostCard';
import ToTheTop from '@/components/Button/ToTheTop';
import NextSeo from 'next-seo';
import {useSpring, animated, config} from 'react-spring';
import LazyLoad from 'react-lazyload';
import ReactPaginate from 'react-paginate';

const styles: any = (theme: ThemeCustom) => createStyles({
  boxContent: {
    paddingTop: 40,
  }
});

interface IPostPage extends WithRouterProps, Partial<WithStyles<typeof styles>> {
  classes: any;
}

const PostPage: NextComponentType<IPostPage> = (props) => {
  const {classes} = props;

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

  return (
    <Fragment>
      <NavTop />
      <ToTheTop />
      <ParallaxPostCard />
      <GridContainer xs = {11} className = {classes.boxContent}>
        <Grid container spacing = {32}>
          <Grid item xs = {1}>
            <animated.div style = {socialAnimate}>
              <SocialShareContainer />
            </animated.div>
          </Grid>
          <Grid item xs = {8}>
            <FormComment />
          </Grid>
          <Grid item xs = {3}>
            <animated.div style = {socialAnimate}>
              <CategoryTitle title = 'Đăng ký nhận tin' scale = 'small' />
              <SubscribeEmail />
            </animated.div>
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
