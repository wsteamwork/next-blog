import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import {Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const styles: any = (theme: ThemeCustom) => createStyles({
  avatar:{
    width: 70,
    height: 70,
    borderRadius: 8,
    display: 'block',
    overflow: 'hidden'
  },
  imgAvatar:{
    width: '100%',
    height: '100%',
    objectFit:'cover',
  },
  content:{
    marginBottom: 10,
    lineHeight: '135%',
    fontSize: 14,
    fontWeight: 600,
    paddingLeft:16,
  },
  time:{
    paddingLeft:16,
  }
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const Review: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={3}>
          <span className={classes.avatar}>
            <img src = '/static/room_demo.jpeg' alt = 'avatar' className={classes.imgAvatar}/>
          </span>
        </Grid>
        <Grid item xs={9}>
          <Typography variant='subtitle2' className={classes.content}>
            Review Of Photoshop CC
          </Typography>
          <div className={classes.time}>
            ngay va gio hien thi o day
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(Review);
