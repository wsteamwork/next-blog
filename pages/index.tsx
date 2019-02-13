import React, {Fragment, useLayoutEffect, useEffect} from 'react';
import {createStyles, WithStyles, withStyles} from '@material-ui/core/styles';
import {NextComponentType} from 'next';
import {compose} from 'recompose';
import NavTop from '@/components/ToolBar/NavTop';
import IndexCarousel from '@/components/Carousel/IndexCarousel';
import GridContainer from '@/layouts/Grid/Container';
import Grid from '@material-ui/core/Grid/Grid';
import IndexCategoryCarousel from '@/components/Carousel/IndexCategoryCarousel';
import MainIndexContent from '@/layouts/Index/MainIndexContent';
import 'moment/locale/vi';
import moment from 'moment';

const styles = createStyles({
  mainContent: {
    marginTop: 32,
  },
});

interface IProps extends WithStyles<typeof styles> {

}

const Index: NextComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  useEffect(() => {
    moment.locale('vi');
  }, []);

  return (
    <Fragment>
      <NavTop />
      <IndexCarousel />
      <GridContainer xs = {11}>
        <IndexCategoryCarousel />
        <Grid container item lg = {8} className = {classes.mainContent}>
          <MainIndexContent />
        </Grid>
        <Grid container item lg = {4}>

        </Grid>
      </GridContainer>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(Index);
