import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Gray from '@material-ui/core/colors/grey';

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
});

interface IProps extends Partial<WithStyles<typeof styles>> {
  title: string
}

// @ts-ignore
const CategoryTitle: ComponentType<IProps> = (props: IProps) => {
  const {classes, title} = props;

  return (
    <Fragment>
      <Grid container item xs = {12} className = {classes.categoryTitleContainer}>
        <Typography variant = 'h4' classes = {{
          root: classes.categoryTitle,
        }}>
          {title}
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(CategoryTitle);
