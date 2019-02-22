import React, {Fragment} from 'react';
import {compose} from 'recompose';
import {withRouter, WithRouterProps} from 'next/router';
import {NextComponentType} from 'next';
import NavTop from '@/components/ToolBar/NavTop';
import Slider, {Settings} from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {Typography, Grid} from '@material-ui/core';
import GridContainer from '@/layouts/Grid/Container';
import SubscribeEmail from '@/components/Input/SubscribeEmail';
import CategoryTitle from '@/components/Bars/CategoryTitle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FormComment from '@/components/Input/FormComment';
import SocialShareContainer from '@/components/Bars/SocialShareContainer';
import ParallaxPostCard from '@/components/Cards/ParallaxPostCard';
import ToTheTop from '@/components/Button/ToTheTop';
import IndexMainCard from '@/components/Cards/IndexMainCard';
import Divider from '@material-ui/core/Divider';
import SliderArrowButton from '@/components/Button/SliderArrowButton';
import Review from '@/components/Cards/Review';

const styles: any = (theme: ThemeCustom) => createStyles({
  boxContent: {
    paddingTop: 40,
  },
  socialSticky: {
    position: 'sticky',
    top: '10%',
  },
  boxPopular: {
    marginTop: 30,
    position: 'sticky',
    top: '10%',
  },
  slidePopular:{
    padding:'0 8px',
    '&:focus':{
      outline:'none',
    }
  },
  dividerPost:{
    margin:'30px 0',
    backgroundColor:'transparent'
  }
});

interface IPostPage extends WithRouterProps, Partial<WithStyles<typeof styles>> {
  classes: any;
}

const PostPage: NextComponentType<IPostPage> = (props) => {
  const {classes} = props;
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

  return (
    <Fragment>
      <NavTop />
      <ToTheTop />
      <ParallaxPostCard />
      <GridContainer xs = {11} className = {classes.boxContent}>
        <Grid container spacing = {32}>
          <Grid item container xs={9}>
            <Grid item xs = {1}>
              <div className = {classes.socialSticky}>
                <SocialShareContainer />
              </div>
            </Grid>
            <Grid item xs = {11}>
              <article>
                <p>US President Donald Trump says a woman who left the US to become a propagandist for the Islamic State
                   (IS) group will not be allowed to return.</p>

                <p>On Twitter, he said he had instructed Secretary of State Mike Pompeo "not to allow Hoda Muthana back
                   into
                   the country".</p>

                <p> Mr Pompeo had earlier stated that the 24-year-old was not a US citizen and would not be admitted.</p>

                <p>However, her family and her lawyer maintain that she has US citizenship.</p>

                <p>Ms Muthana, who grew up in Alabama, travelled to Syria to join IS when she was 20. She had told her
                   family she was going to a university event in Turkey.</p>
                <p>US President Donald Trump says a woman who left the US to become a propagandist for the Islamic State
                   (IS) group will not be allowed to return.</p>

                <p>On Twitter, he said he had instructed Secretary of State Mike Pompeo "not to allow Hoda Muthana back
                   into
                   the country".</p>

                <p> Mr Pompeo had earlier stated that the 24-year-old was not a US citizen and would not be admitted.</p>

                <p>However, her family and her lawyer maintain that she has US citizenship.</p>

                <p>Ms Muthana, who grew up in Alabama, travelled to Syria to join IS when she was 20. She had told her
                   family she was going to a university event in Turkey.</p>
                <p>US President Donald Trump says a woman who left the US to become a propagandist for the Islamic State
                   (IS) group will not be allowed to return.</p>

                <p>On Twitter, he said he had instructed Secretary of State Mike Pompeo "not to allow Hoda Muthana back
                   into
                   the country".</p>

                <p> Mr Pompeo had earlier stated that the 24-year-old was not a US citizen and would not be admitted.</p>

                <p>However, her family and her lawyer maintain that she has US citizenship.</p>

                <p>Ms Muthana, who grew up in Alabama, travelled to Syria to join IS when she was 20. She had told her
                   family she was going to a university event in Turkey.</p>
              </article>
              <Divider style={{margin:'60px 0 20px'}}/>
              <Review/>
              {/*<FormComment />*/}
            </Grid>
            <Grid item xs={12}>
              <Divider className={classes.dividerPost}/>
              <div>
                <CategoryTitle title = 'Bài viết liên quan' scale = 'medium' />
              </div>
              <div>
                <Slider {...slideRelated}>
                  <div className={classes.slidePopular}>
                    <IndexMainCard cardStyle='outside' description=''/>
                  </div>
                  <div className={classes.slidePopular}>
                    <IndexMainCard cardStyle='outside' description=''/>
                  </div>
                  <div className={classes.slidePopular}>
                    <IndexMainCard cardStyle='outside' description=''/>
                  </div>
                  <div className={classes.slidePopular}>
                    <IndexMainCard cardStyle='outside' description=''/>
                  </div>
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
                <div className={classes.slidePopular}>
                  <IndexMainCard cardStyle='outside' description=''/>
                </div>
                <div className={classes.slidePopular}>
                  <IndexMainCard cardStyle='outside' description=''/>
                </div>
              </Slider>
            </div>
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
