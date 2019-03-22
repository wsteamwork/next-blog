import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import {Parallax} from 'react-parallax';
import '@/styles/indexCarousel.scss'
import {Divider} from '@material-ui/core';
import {INSTAGRAM_WESTAY_URL, FACEBOOK_WESTAY_URL} from '@/store/constant/general';
import SubscribeEmail from '@/components/Input/SubscribeEmail';

const styles: any = (theme: ThemeCustom) => createStyles({
  img: {
    // maxHeight: '60vh',
    width: '100% !important',
    height: '500px !important',
    objectFit: 'cover',
    top: '20%',
  },
  root: {
    position: 'relative',
  },
  infoOverlayContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    textAlign: 'center',
  },
  insideParalax: {
    position: 'absolute',
    padding: 20,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    boxShadow: '2px 4px 17px 0px rgba(0,0,0,0.3)',
    display: 'initial',
  },
  title: {
    cursor: 'default',
    color: '#fff',
    fontFamily: '"Amatic SC", cursive',
  },
  parallaxContainer: {
    width: '100%',
  },
  contentParallax: {
    display: 'flex',
    justifyContent: 'center',
    height: '55vh',
  },
  line: {
    margin: '10px 0',
    backgroundColor: '#fff',
  },
  imgSocial: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
  subTitle: {
    color: '#fff',
    textAlign: 'left',
    fontFamily: '"Mali",cursive',
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const IndexCarousel: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <Grid container>
        <Grid container item xs = {12}>
          <Parallax
            bgImage = '/static/bg-travel.jpg'
            strength = {500}
            bgClassName = {classes.img}
            className = {classes.parallaxContainer}
            contentClassName = {classes.contentParallax}
          >
            <div className = {classes.insideParalax}>
              <Typography variant = 'h4'>
              <span className = {classes.title}>
                Kênh thông tin, kinh nghiệm du lịch, điểm đến hấp dẫn
              </span>
              </Typography>
              <Divider className = {classes.line} />
              <Grid container justify = 'space-between'>
                <Grid item xs = {3} md = {2} lg = {4} style = {{textAlign: 'left'}}>
                  <Typography variant = 'subtitle2' className = {classes.subTitle}>
                    Mạng xã hội:
                  </Typography>
                  <a href = {FACEBOOK_WESTAY_URL}>
                    <img src = '/static/fb.png' alt = 'facebook' className = {classes.imgSocial} />
                  </a>
                  <a href = {INSTAGRAM_WESTAY_URL}>
                    <img src = '/static/ist.png' alt = 'instagram' className = {classes.imgSocial} />
                  </a>
                </Grid>
                <Grid item xs = {7} md = {6} lg = {6}>
                  <Typography variant = 'subtitle2' className = {classes.subTitle}>
                    Đăng kí nhận tin:
                  </Typography>
                  <SubscribeEmail note = {false} />
                </Grid>
              </Grid>
            </div>
          </Parallax>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(IndexCarousel);
