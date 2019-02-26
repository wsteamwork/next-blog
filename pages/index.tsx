import React, {Fragment, useLayoutEffect, useEffect, useReducer} from 'react';
import {createStyles, WithStyles, withStyles} from '@material-ui/core/styles';
import {NextComponentType, NextFunctionComponent} from 'next';
import {compose} from 'recompose';
import NavTop from '@/components/ToolBar/NavTop';
import IndexCarousel from '@/components/Carousel/IndexCarousel';
import GridContainer from '@/layouts/Grid/Container';
import Grid from '@material-ui/core/Grid/Grid';
import IndexCategoryCarousel from '@/components/Carousel/IndexCategoryCarousel';
import MainIndexContent from '@/layouts/Index/MainIndexContent';
import 'moment/locale/vi';
import moment from 'moment';
import SocialIndexBar from '@/layouts/Index/SocialIndexBar';
import {ThemeCustom} from '@/components/Theme/Theme';
import ToTheTop from '@/components/Button/ToTheTop';
import NextSeo from 'next-seo';
import {
  BlogIndexReducer,
  IBlogIndexContext,
  BlogIndexInit,
  BlogIndexState,
  BlogIndexAction,
  BlogIndexContext, getBlog,
} from '@/store/context/BlogIndexContext';
import {BlogIndexGetParams} from '@/types/Requests/Blog/BlogRequests';

const styles: any = (theme: ThemeCustom) => createStyles({
  mainContent: {
    marginTop: 32,
  },
});

interface IProps extends WithStyles<typeof styles> {
  initState: BlogIndexState
}

// @ts-ignore
const Index: NextFunctionComponent<IProps> = (props) => {
  const {classes, initState} = props;
  const [state, dispatch]    = useReducer(BlogIndexReducer, initState);

  useEffect(() => {
    moment.locale('vi');
  }, []);

  return (
    <Fragment>
      <NextSeo config = {{
        title: 'Kênh thông tin tổng hợp về homestay - Westay.vn',
      }} />
      <BlogIndexContext.Provider value = {{state, dispatch}}>
        <ToTheTop />
        <NavTop />
        <IndexCarousel />
        <GridContainer xs = {11}>
          <IndexCategoryCarousel />
          <Grid container className = {classes.mainContent} spacing = {32}>
            <Grid item lg = {8}>
              <MainIndexContent />
            </Grid>
            <Grid item lg = {4}>
              <SocialIndexBar />
            </Grid>
          </Grid>
        </GridContainer>
      </BlogIndexContext.Provider>
    </Fragment>
  );
};

// @ts-ignore
Index.getInitialProps = async (ctx) => {
  const hotBlogParams: BlogIndexGetParams = {
    limit: 10,
  };

  const [hotBlog] = await Promise.all([
    getBlog(hotBlogParams),
  ]);

  return {
    initState: {
      hotBlogs: hotBlog.data,
    },
  };
};

export default compose<IProps, any>(
  withStyles(styles),
)(Index);
