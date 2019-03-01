import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import Typography from '@material-ui/core/Typography/Typography';
import Gray from '@material-ui/core/colors/grey';
import Blue from '@material-ui/core/colors/blue';

const styles: any = (theme: Required<ThemeCustom>) => createStyles({
  typo: {
    borderBottom: `2px ${Gray[200]} solid`,
    paddingTop: 8,
    cursor: 'pointer',
    color: Gray[700],
    transition: theme.transitions.create(['all'], {
      easing: 'ease-in-out',
      duration: 300,
    }),
    '&:hover': {
      color: Blue[500],
      borderColor: 'transparent',
    },
    '&:after': {
      display: 'block',
      content: `''`,
      paddingBottom: 8,
      borderBottom: `2px ${Gray[500]} solid`,
      transform: 'scaleX(0)',
      transition: theme.transitions.create('all', {
        easing: 'ease-in-out',
        duration: 250,
      }),
    },
    '&:hover:after': {
      transform: 'scaleX(1)',
    },
  },
});

interface ICategoryListItemProps extends Partial<WithStyles<typeof styles>> {
  label: React.ReactNode
  categoryUrl: string
}

// @ts-ignore
const CategoryListItem: ComponentType<ICategoryListItemProps> = (props: ICategoryListItemProps) => {
  const {classes, label, categoryUrl} = props;

  return (
    <Fragment>
      <Typography variant = 'subtitle2' classes = {{
        root: classes.typo,
      }} component = 'a'>
        <a style ={{textDecoration: 'none', color: 'black'}} href = {categoryUrl}>{label}</a>
      </Typography>
    </Fragment>
  );
};

export default compose<ICategoryListItemProps, any>(
  withStyles(styles),
)(CategoryListItem);
