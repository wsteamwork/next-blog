import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import Typography from '@material-ui/core/Typography/Typography';
import Gray from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid/Grid';
import IndexMainCard from '@/components/Cards/IndexMainCard';

const styles: any = (theme: ThemeCustom) => createStyles({
  categoryTitle: {
    borderBottom: `2px ${Gray[700]} solid`,
    paddingBottom: 12,
    fontWeight: 600,
    marginBottom: -2,
  },
  categoryTitleContainer: {
    borderBottom: `2px ${Gray[300]} solid`,
  },
  mainContent: {
    marginTop: 24,
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const MainIndexContent: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <Grid container item xs = {12} className = {classes.categoryTitleContainer}>
        <Typography variant = 'h4' classes = {{
          root: classes.categoryTitle,
        }}>
          Tin họa mi hót
        </Typography>
      </Grid>
      <Grid container item xs = {12} className = {classes.mainContent} spacing = {16}>
        <Grid item lg = {6}>
          <IndexMainCard />
        </Grid>
        <Grid item lg = {6}>
          <IndexMainCard />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(MainIndexContent);
