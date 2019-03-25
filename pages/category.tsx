import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment, useEffect, useState} from 'react';
import {compose} from 'recompose';
import GridContainer from '@/layouts/Grid/Container';
import {Grid} from '@material-ui/core';
import CategoryTitle from '@/components/Bars/CategoryTitle';
import IndexMainCard from '@/components/Cards/IndexMainCard';
import NavTop from '@/components/ToolBar/NavTop';
import ToTheTop from '@/components/Button/ToTheTop';
import Slider, {Settings} from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SubscribeEmail from '@/components/Input/SubscribeEmail';
import Typography from '@material-ui/core/Typography';
import {NextComponentType} from 'next';
import {axios} from '@/store/utils/axiosBase';
import {BlogIndexRes, MetaCategory} from '@/types/Requests/Blog/BlogRespones';
import _ from 'lodash';
import PostWrapper from '@/components/Wrapper/PostWrapper';
import NextSeo from 'next-seo';
import moment from 'moment';
import PaginateBar from '@/components/Bars/PaginateBar';
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/vi_VN';
import 'rc-pagination/assets/index.css';
import {AxiosRes} from '@/types/Requests/ResponseTemplate';
import {ReactScrollLinkProps} from 'react-scroll/modules/components/Link';
import {animateScroll as scroll} from 'react-scroll/modules';
import classNames from 'classnames';
import '/styles/customPaginate.scss';

const styles: any = (theme: ThemeCustom) => createStyles({
  slidePopular: {
    padding: '0 8px',
    '&:focus': {
      outline: 'none',
    },
  },
  boxPopular: {
    marginTop: 30,
    position: 'sticky',
    top: '15%',
  },
  article: {
    marginBottom: 30,
  },
  boxNew: {
    paddingBottom: 50,
  },
  titleCategory: {
    textAlign: 'center',
    padding: '30px 0',
    textTransform: 'capitalize',
    color: '#343434',
    fontFamily: '"Amatic SC",cursive',
    fontWeight: 700,
    '&::before,&::after': {
      backgroundImage: 'url("/static/line.png")',
      content: '""',
      display: 'inline-block',
      width: 140,
      height: 3,
      margin: '0px 10px',
      verticalAlign: 'middle',
    },
  },
  titleSlider: {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    fontSize: '1.375rem',
  },
  boxPaginate: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  paginate: {
    fontFamily: '"Amatic SC",cursive',
    fontWeight: 700,
    fontSize: 20,
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {
  show: BlogIndexRes[],
  slider: BlogIndexRes[],
  meta: MetaCategory,
  slugCategory: string,
}

// @ts-ignore
const Category: NextComponentType<IProps> = (props: IProps) => {
  const {classes, show, slider, meta, slugCategory} = props;
  const [currentPage, setCurrentPage]               = useState<number>(1);
  const [post, setPost]                             = useState<BlogIndexRes[]>(show);

  const getData = async (category?: number, pageID?: number) => {
    const res: AxiosRes<BlogIndexRes[]> =
            await axios.get(`blogs?include=categories.details,user&category=${category}&status=1&limit=9&page=${pageID}`);
    setPost(res.data.data);
    return post;
  };

  useEffect(() => {
    moment.locale('vi');
    switch (slugCategory) {
      case 'o-dau' :
        getData(1, currentPage);
        break;
      case 'choi-gi' :
        getData(2, currentPage);
        break;
      case 'an-gi' :
        getData(3, currentPage);
        break;
      case 'cam-nang-du-lich' :
        getData(4, currentPage);
        break;
      default:
        return null;
    }
  }, [currentPage, slugCategory]);

  const ChangePage = (current: number) => {
    setCurrentPage(current);
    let duration                              = 500 + window.scrollY * 0.1;
    let effect: Partial<ReactScrollLinkProps> = {
      smooth: 'easeInOutQuad',
      isDynamic: true,
      duration,
    };
    scroll.scrollToTop(effect);
  };

  const slidePopular: Settings  = {
    speed: 500,
    swipeToSlide: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Fragment>
      <NextSeo config = {{
        title: post ? (post[0].categories.data[0].details.data[0].name) : 'Westay - Blog du lịch',
        description: 'Thông tin du lịch ở trong và ngoài nước cập nhật mới nhất 2019, nơi bạn có thể tìm kiếm thông tin hữu ích, nhanh chóng và thuận tiện',
        canonical: post ? (`https://blog.westay.vn/${post[0].categories.data[0].details.data[0].slug}`) : '',
      }} />
      <NavTop />
      <ToTheTop />
      {post ? (
        <GridContainer xs = {12} sm = {12} md = {12} lg = {11} xl = {10}>
        <div>
          <Typography variant = 'h3' className = {classes.titleCategory}>
            {post[0].categories.data[0].details.data[0].name}
          </Typography>
        </div>
        <Grid container spacing = {16} className = {classes.boxNew}>
          <Grid item xs = {8}>
            <PostWrapper post = {post[0]}>
              <IndexMainCard
                cardStyle = 'inside' description = '' imgHeight = {500} contentAlign = 'center'
                title = {post[0].title}
                imgSrc = {post[0].image} imgAlt = {post[0].title}
                chipText = {post[0].categories.data[0].details.data[0].name}
                chipSlug = {post[0].categories.data[0].details.data[0].slug}
                time = {post[0].created_at}
              />
            </PostWrapper>
          </Grid>
          <Grid item container spacing = {8} xs = {4}>
            <Grid item xs = {12}>
              <PostWrapper post = {post[1]}>
                <IndexMainCard
                  cardStyle = 'inside' description = '' imgHeight = {243} contentAlign = 'center'
                  title = {post[1].title}
                  imgSrc = {post[1].image} imgAlt = {post[1].title}
                  chipText = {post[1].categories.data[0].details.data[0].name}
                  chipSlug = {post[1].categories.data[0].details.data[0].slug}
                  time = {post[1].created_at}
                />
              </PostWrapper>
            </Grid>
            <Grid item xs = {12}>
              <PostWrapper post = {post[2]}>
                <IndexMainCard
                  cardStyle = 'inside' description = '' imgHeight = {243} contentAlign = 'center'
                  title = {post[2].title}
                  imgSrc = {post[2].image} imgAlt = {post[2].title}
                  chipText = {post[2].categories.data[0].details.data[0].name}
                  chipSlug = {post[2].categories.data[0].details.data[0].slug}
                  time = {post[2].created_at}
                />
              </PostWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing = {32}>
          <Grid item xs = {12} lg = {9}>
            <CategoryTitle scale = 'medium'
                           title = {`Chuyên mục - ${post[0].categories.data[0].details.data[0].name}`} />
            {_.map(post, (o, i) => i >= 3 ?
              (
                <article className = {classes.article} key = {o.id}>
                  <PostWrapper post = {o}>
                    <IndexMainCard
                      cardStyle = 'outside'
                      descriptionLength = {500}
                      horizontal
                      contentAlign = 'center'
                      imgHeight = {250}
                      rootSpacing = {32}
                      ratio = {{
                        image: 5,
                        content: 7,
                      }}
                      title = {o.title}
                      imgSrc = {o.image} imgAlt = {o.title}
                      description = {o.description}
                      chipText = {o.categories.data[0].details.data[0].name}
                      chipSlug = {o.categories.data[0].details.data[0].slug}
                      time = {o.created_at}
                      link = {o}
                    />
                  </PostWrapper>
                </article>
              ) : '')}
            {/*<PaginateBar pageCount={meta.total_pages} onPageChange={pageChange}/>*/}
            <div className = {classes.boxPaginate}>
              <Pagination className = 'ant-pagination' locale = {localeInfo} total = {meta.total}
                          pageSize = {meta.per_page} current = {currentPage}
                          onChange = {ChangePage} />
            </div>
          </Grid>
          <Grid item lg = {3}>
            <div>
              <CategoryTitle title = 'Đăng ký nhận tin' scale = 'medium' />
              <SubscribeEmail note = {true} />
            </div>
            <div className = {classes.boxPopular}>
              <CategoryTitle scale = 'medium' title = 'Bài viết nổi bật' />
              <Slider {...slidePopular}>
                {_.map(slider, (o) => (
                  <Fragment key = {o.id}>
                    <div className = {classes.slidePopular}>
                      <PostWrapper post = {o}>
                        <IndexMainCard cardStyle = 'outside' description = ''
                                       customClasses = {{title: classes.titleSlider}}
                                       title = {o.title} imgHeight = {190}
                                       imgSrc = {o.image} imgAlt = {o.title}
                                       chipText = {o.categories.data[0].details.data[0].name}
                                       chipSlug = {o.categories.data[0].details.data[0].slug}
                                       time = {o.created_at}
                        />
                      </PostWrapper>
                    </div>
                  </Fragment>
                ))}
              </Slider>
            </div>
          </Grid>
        </Grid>
      </GridContainer>
      ) : ''}
    </Fragment>
  );
};

// @ts-ignore
Category.getInitialProps = async (context) => {
  const {slugCategory} = context.query;
  const resSlider      = await axios.get('blogs?include=categories.details,user&limit=6&hot=1&status=1');
  const slider         = resSlider.data.data;
  let show, meta;
  switch (slugCategory) {
    case 'o-dau' :
      const res1 = await axios.get(`blogs?include=categories.details,user&category=1&status=1&limit=10&page=1`);
      show       = res1.data.data;
      meta       = res1.data.meta.pagination;
      break;
    case 'choi-gi' :
      const res2 = await axios.get(`blogs?include=categories.details,user&category=2&status=1&limit=10&page=1`);
      show       = res2.data.data;
      meta       = res2.data.meta.pagination;
      break;
    case 'an-gi' :
      const res3 = await axios.get(`blogs?include=categories.details,user&category=3&status=1&limit=10&page=1`);
      show       = res3.data.data;
      meta       = res3.data.meta.pagination;
      break;
    case 'cam-nang-du-lich' :
      const res4 = await axios.get(`blogs?include=categories.details,user&category=4&status=1&limit=10&page=1`);
      show       = res4.data.data;
      meta       = res4.data.meta.pagination;
      break;
    default:
      return '';
  }

  return {show, slider, meta, slugCategory};
};


export default compose<IProps, any>(
  withStyles(styles),
)(Category);
