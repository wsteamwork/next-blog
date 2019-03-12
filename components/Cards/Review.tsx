import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import {Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InformationIndicate from '@/components/Bars/InformationIndicate';

const styles: any = (theme: ThemeCustom) => createStyles({
  avatar:{
    width: 80,
    height: 80,
    borderRadius: '50%',
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
        <span className={classes.avatar}>
          <img src= '/static/background_blog.jfif' alt = 'avatar' className={classes.imgAvatar}/>
        </span>
        <Grid item xs={10}>
          <Typography variant='subtitle2' className={classes.content}>
            Thong tin rat huu ich va vo bo
          </Typography>
          <div className={classes.time}>
            <InformationIndicate userName='nguyen van a' time='2011-01-21'/>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(Review);
