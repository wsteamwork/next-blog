import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment, useEffect, useContext} from 'react';
import {compose} from 'recompose';
import Typography from '@material-ui/core/Typography/Typography';
import Gray from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid/Grid';
import IndexMainCard from '@/components/Cards/IndexMainCard';
import CategoryTitle from '@/components/Bars/CategoryTitle';
import ReactParallax from 'react-parallax';
import Button from '@material-ui/core/Button/Button';
import {BlogIndexContext, IBlogIndexContext} from '@/store/context/BlogIndexContext';
import _ from 'lodash';
import PostWrapper from '@/components/Wrapper/PostWrapper';

const styles: any = (theme: ThemeCustom) => createStyles({
  showMoreLabel: {
    padding: 8,
  },
  showMoreButton: {
    border: '1px solid rgba(0, 0, 0, 0.08)',
    boxShadow: '0px 0px 60px -6px rgba(0,0,0,0.14)',
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const MainIndexContent: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;
  const {state}   = useContext<IBlogIndexContext>(BlogIndexContext);

  const {hotBlogs} = state;

  return (
    <Fragment>
      <CategoryTitle title = 'Tin họa mi hót' />
      <Grid container item xs = {12} spacing = {16}>
        {_.map(hotBlogs, (o, i) => (
          <Grid item lg = {6} key = {o.id}>
            <PostWrapper post = {o}>
              <IndexMainCard
                title = {o.title}
                imgAlt = {o.title}
                description = {o.description}
              />
            </PostWrapper>
          </Grid>
        ))}
        <Grid container item xs = {12} justify = 'center'>
          <Button
            classes = {{
              label: classes.showMoreLabel,
              root: classes.showMoreButton,
            }}
            fullWidth
          >
            Xem thêm
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(MainIndexContent);
