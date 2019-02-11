import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment, useState} from 'react';
import {compose} from 'recompose';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import Gray from '@material-ui/core/colors/grey';
import Blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';

const styles: any = (theme: ThemeCustom) => createStyles({
  overLayChip: {
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  root: {
    maxWidth: 200,
  },
  chipTitle: {
    cursor: 'pointer',
    backgroundColor: Gray[900],
    padding: '0 3px 0 3px',
    '&:hover': {
      backgroundColor: Blue[300],
    },
  },
  transitionDuration: {
    transition: theme!.transitions!.create!(['color', 'background-color'], {
      duration: 200,
      easing: 'ease-in-out',
    }),
  },
  imgSize: {
    height: 150,
    width: 200,
  },
  imgContainer: {
    position: 'relative',
  },
  mainTitle: {
    padding: 5,
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const MenuCard: ComponentType<IProps> = (props: IProps) => {
  const {classes}                 = props;

  return (
    <Fragment>
      <Grid container className = {classes.root}>
        <Grid item container className = {classes.imgContainer}>
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
                Hà Nội
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item xs = {12} className = {classes.mainTitle}>
          <Typography variant = 'subtitle2'>
            Ngôi nhà có mái tôn màu đỏ trên đồi thảo nguyên
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(MenuCard);
