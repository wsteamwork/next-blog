import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import Gray from '@material-ui/core/colors/grey';
import {Parallax} from 'react-parallax';
import '@/styles/indexCarousel.scss'

const styles: any = (theme: ThemeCustom) => createStyles({
  img: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
    // maxHeight: '60vh',
    width: '100%',
    verticalAlign: 'middle',
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
  infoOverlay: {
    position: 'absolute',
    bottom: 40,
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: Gray[100],
    padding: 12,
    borderRadius: 16,
    boxShadow: '2px 4px 17px 0px rgba(0,0,0,0.3)',
    textShadow: '1px 2px 5px rgba(164,164,164,0.5)',
    display: 'initial',
  },
  parallaxContainer: {
    width: '100%',
  },
  contentParallax: {
    display: 'flex',
    justifyContent: 'center',
    height: '68vh',
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
            bgImage= '/static/background_blog.jfif'
            strength = {-200}
            bgClassName = {classes.img}
            className = {classes.parallaxContainer}
            contentClassName = {classes.contentParallax}
          >
            {/* <Typography variant = 'subtitle2' component = 'a' classes = {{
              root: classes.infoOverlay,
            }}>
              Very simple but still keep the elegant style
            </Typography> */}
          </Parallax>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(IndexCarousel);
