import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import Typography from '@material-ui/core/Typography/Typography';
import Gray from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid/Grid';
import IndexMainCard from '@/components/Cards/IndexMainCard';
import CategoryTitle from '@/components/Bars/CategoryTitle';
import ReactParallax from 'react-parallax';

const styles: any = (theme: ThemeCustom) => createStyles({});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const MainIndexContent: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <CategoryTitle title = 'Tin họa mi hót' />
      <Grid container item xs = {12} spacing = {16}>
        <Grid item lg = {6}>
          <IndexMainCard />
        </Grid>
        <Grid item lg = {6}>
          <IndexMainCard />
        </Grid>
        <Grid item lg = {12}>
          <IndexMainCard cardStyle = 'inside' />
        </Grid>
        <Grid item lg = {6}>
          <IndexMainCard cardStyle = 'inside' imgHeight = {600} />
        </Grid>
        <Grid item lg = {6}>
          <IndexMainCard cardStyle = 'inside' imgHeight = {600} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(MainIndexContent);
