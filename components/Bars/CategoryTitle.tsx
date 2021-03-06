import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles, CSSProperties} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment, useMemo} from 'react';
import {compose} from 'recompose';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Gray from '@material-ui/core/colors/grey';
import Blue from '@material-ui/core/colors/blue';
import Link from 'next/link';

const styles: any = (theme: ThemeCustom) => createStyles({
  categoryTitle: {
    color: Gray[800],
    borderBottom: `2px ${Gray[700]} solid`,
    paddingBottom: 12,
    fontWeight: 600,
    marginBottom: -2,
  },
  categoryViewAll: {
    color: Blue[500],
    paddingBottom: 12,
    fontWeight: 500,
    marginBottom: -2,
  },
  categoryTitleContainer: {
    borderBottom: `2px ${Gray[300]} solid`,
    marginBottom: 30
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {
  title: string
  /**
   * Customize size of title
   */
  size?: number
  /**
   * Fixed size of title
   */
  scale?: 'small' | 'medium' | 'large'

  category_url: string
  subTitle: string
}

// @ts-ignore
const CategoryTitle: ComponentType<IProps> = (props: IProps) => {
  const {classes, title, size, scale, category_url, subTitle} = props;

  const titleStyles = useMemo<CSSProperties>(() => {
    let customSize = size;
    switch (scale) {
      case 'small':
        customSize = 1.175;
        break;
      case 'medium':
        customSize = 1.725;
        break;
      case 'large':
        customSize = 2.175;
        break;
    }

    return {
      fontSize: customSize ? `${customSize}rem` : undefined,
    };
  }, [size]);

  return (
    <Fragment>
      <Grid justify = 'space-between' container item xs = {12} className = {classes.categoryTitleContainer}>
        <Typography style = {titleStyles} variant = 'h4' component = 'h3' classes = {{
          root: classes.categoryTitle,
        }}>
          {title}
        </Typography>
        <Typography align = 'right' variant = 'h6' component = 'h5' classes = {{
          root: classes.categoryViewAll,
        }}>
          <Link href = {category_url ? category_url : ''}><a style = {{textDecoration: 'none'}}>{subTitle}</a></Link>
        </Typography>
      </Grid>
    </Fragment>
  );
};

CategoryTitle.defaultProps = {
  size: 0,
  scale: 'medium',
};

export default compose<IProps, any>(
  withStyles(styles),
)(CategoryTitle);
