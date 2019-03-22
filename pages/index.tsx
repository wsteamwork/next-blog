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
        <GridContainer xs = {11} xl={10}>
          <IndexCategoryCarousel />
          <Grid container spacing = {32} justify = 'center' alignContent = 'center'>
            <Grid item lg = {10}>
              <MainIndexContent />
            </Grid>
            {/*<Grid item lg = {4}>*/}
            {/*<SocialIndexBar />*/}
            {/*</Grid>*/}
          </Grid>
        </GridContainer>
      </BlogIndexContext.Provider>
    </Fragment>
  );
};

// @ts-ignore
Index.getInitialProps = async (ctx) => {
  const hotBlogParams: BlogIndexGetParams = {
    limit: 4,
    status: 1,
  };
  const blogEatParams: BlogIndexGetParams = {
    category: 3,
    status: 1,
    limit: 4,
  };
  const blogPlayParams: BlogIndexGetParams = {
    category: 2,
    status: 1,
    limit: 4,
  };
  const blogStayParams: BlogIndexGetParams = {
    category: 1,
    status: 1,
    limit: 4,
  };
  const blogAllParams: BlogIndexGetParams = {
    category: 4,
    status: 1,
    limit: 4,
  };

  const [hotBlog] = await Promise.all([
    getBlog(hotBlogParams),
  ]);
  const [blogEat] = await Promise.all([
    getBlog(blogEatParams),
  ]);
  const [blogStay] = await Promise.all([
    getBlog(blogStayParams),
  ]);
  const [blogPlay] = await Promise.all([
    getBlog(blogPlayParams),
  ]);
  const [blogAll] = await Promise.all([
    getBlog(blogAllParams),
  ]);

  return {
    initState: {
      hotBlogs: hotBlog.data,
      blogEat: blogEat.data,
      blogStay: blogStay.data,
      blogPlay: blogPlay.data,
      blogAll: blogAll.data,
    },
  };
};

export default compose<IProps, any>(
  withStyles(styles),
)(Index);
