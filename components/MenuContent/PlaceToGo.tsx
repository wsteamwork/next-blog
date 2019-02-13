import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import Grid from '@material-ui/core/Grid/Grid';
import MenuCard from '@/components/Cards/MenuCard';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles: any = (theme: ThemeCustom) => createStyles({
  ignoreSpacing: {
    margin: 0,
    width: '100%',
  },
  buttonSize: {
    padding: 6,
  },
  page: {
    marginLeft: 4,
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const PlaceToGo: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <Grid container>
        <Grid container item xs = {12} spacing = {16} className = {classes.ignoreSpacing}>
          <Grid item xs = {3}>
            <MenuCard />
          </Grid>
          <Grid item xs = {3}>
            <MenuCard />
          </Grid>
          <Grid item xs = {3}>
            <MenuCard />
          </Grid>
          <Grid item xs = {3}>
            <MenuCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs = {12} className = {classes.page}>
        <IconButton classes = {{
          root: classes.buttonSize,
        }}>
          <ArrowLeft />
        </IconButton>
        <IconButton classes = {{
          root: classes.buttonSize,
        }}>
          <ArrowRight />
        </IconButton>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(PlaceToGo);
