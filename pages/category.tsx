import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import GridContainer from '@/layouts/Grid/Container';
import {Grid} from '@material-ui/core';
import CategoryTitle from '@/components/Bars/CategoryTitle';
import IndexMainCard from '@/components/Cards/IndexMainCard';
import NavTop from '@/components/ToolBar/NavTop';
import ToTheTop from '@/components/Button/ToTheTop';
import Slider, {Settings} from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SubscribeEmail from '@/components/Input/SubscribeEmail';
import Typography from '@material-ui/core/Typography';

const styles: any = (theme: ThemeCustom) => createStyles({
  slidePopular: {
    padding: '0 8px',
    '&:focus': {
      outline: 'none',
    },
  },
  boxPopular: {
    marginTop: 30,
    position: 'sticky',
    top: '8%',
  },
  article: {
    marginBottom: 30,
  },
  boxNew:{
    paddingBottom: 50,
  },
  titleCategory:{
    textAlign:'center',
    padding:'30px 0',
    textTransform:'capitalize',
    color:'#343434',
  }
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const Category: ComponentType<IProps> = (props: IProps) => {
  const {classes}              = props;
  const slidePopular: Settings = {
    speed: 500,
    swipeToSlide: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Fragment>
      <NavTop />
      <ToTheTop />
      <GridContainer xs = {12} sm = {12} md = {12} lg = {11}>
        <div>
          <Typography variant='h3' className={classes.titleCategory}>Bài viết nổi bật</Typography>
        </div>
        <Grid container spacing = {16} className={classes.boxNew}>

          <Grid item xs = {8}>
            <IndexMainCard
              cardStyle = 'inside' description = '' imgHeight = {500} contentAlign = 'center'
            />
          </Grid>
          <Grid item container spacing={8} xs = {4}>
            <Grid item xs={12}>
              <IndexMainCard
                cardStyle = 'inside' description = '' imgHeight = {240} contentAlign = 'center'
              />
            </Grid>
            <Grid item xs={12}>
              <IndexMainCard
                cardStyle = 'inside' description = '' imgHeight = {240} contentAlign = 'center'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing = {32}>
          <Grid item xs = {12} lg = {9}>
            <CategoryTitle scale = 'medium' title = 'Hot Girl' />
            {[0, 1, 2, 3, 4, 5].map(e => (
              <article className = {classes.article} key = {e}>
                <IndexMainCard
                  cardStyle = 'outside'
                  descriptionLength = {500}
                  horizontal
                  contentAlign = 'center'
                  imgHeight = {250}
                  rootSpacing = {32}
                  ratio = {{
                    image: 5,
                    content: 7,
                  }}
                />
              </article>
            ))}

          </Grid>
          <Grid item lg = {3}>
            <div>
              <CategoryTitle title = 'Đăng ký nhận tin' scale = 'small' />
              <SubscribeEmail />
            </div>
            <div className = {classes.boxPopular}>
              <CategoryTitle scale = 'small' title = 'Hot Girl' />
              <Slider {...slidePopular}>
                <div className = {classes.slidePopular}>
                  <IndexMainCard cardStyle = 'outside' description = '' />
                </div>
                <div className = {classes.slidePopular}>
                  <IndexMainCard cardStyle = 'outside' description = '' />
                </div>
              </Slider>
            </div>
          </Grid>
        </Grid>
      </GridContainer>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(Category);
