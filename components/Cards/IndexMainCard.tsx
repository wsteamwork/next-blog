import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import MenuCard from '@/components/Cards/MenuCard';
import Grid from '@material-ui/core/Grid/Grid';
import Gray from '@material-ui/core/colors/grey';
import Blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography/Typography';
import {useElementHover} from '@/store/hooks/AnimationHooks';

const styles: any = (theme: ThemeCustom) => createStyles({
  imgSize: {
    maxHeight: 300,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
    borderRadius: 12,
  },
  imgContainer: {
    position: 'relative',
  },
  chipTitle: {
    cursor: 'pointer',
    fontStyle: 'italic',
    borderRadius: 24,
    backgroundColor: Gray[900],
    padding: '6px 12px 4px 9px',
    '&:hover': {
      backgroundColor: Blue[700],
    },
  },
  transitionDuration: {
    transition: theme!.transitions!.create!(['color', 'background-color'], {
      duration: 200,
      easing: 'ease-in-out',
    }),
  },
  mainTitle: {
    padding: 5,
  },
  titleHover: {
    color: Blue[400],
    cursor: 'pointer',
  },
  overLayChip: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const IndexMainCard: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  const [cardHover, cardHoverProps] = useElementHover();
  return (
    <Fragment>
      <Grid container spacing = {16} {...cardHoverProps}>
        <Grid item xs = {12} container className = {classes.imgContainer}>
          <img src = '/static/room_demo.jpeg' alt = '' className = {classes.imgSize} />
          <Grid item xs = {12} className = {classes.overLayChip}>
            <div className = {classNames(
              classes.chipTitle,
              classes.transitionDuration,
            )}>
              <Typography
                variant = 'subtitle2'
                color = 'primary'
              >
                Mẹo vặt
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item xs = {12}>
          <Typography variant = 'h4' className = {
            classNames({
              [classes.titleHover]: cardHover,
            }, classes.transitionDuration)
          }>
            Một ngôi nhà cực đẹp vừa được lên sóng
          </Typography>
        </Grid>
        <Grid item xs = {12}>
          <Typography variant = 'subheading'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi delectus, inventore maiores omnis
            qui. Cupiditate dicta dolorum eius esse, incidunt molestias quaerat quam quasi quod repellendus sit soluta
            voluptatem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi delectus, inventore maiores omnis
            qui. Cupiditate dicta dolorum eius esse, incidunt molestias quaerat quam quasi quod repellendus sit soluta
            voluptatem?
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(IndexMainCard);
