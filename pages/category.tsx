import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
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
import {BlogIndexRes} from '@/types/Requests/Blog/BlogRespones';
import moment from 'moment';
import _ from 'lodash';
import PostWrapper from '@/components/Wrapper/PostWrapper';
import NextSeo from 'next-seo';

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
});

interface IProps extends Partial<WithStyles<typeof styles>> {
  show: BlogIndexRes[],
  slider: BlogIndexRes[],
}

// @ts-ignore
const Category: NextComponentType<IProps> = (props: IProps) => {
  const {classes, show, slider} = props;
  const slidePopular: Settings  = {
    speed: 500,
    swipeToSlide: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Fragment>
      <NextSeo config = {{
        title: show ? (show[0].categories.data[0].details.data[0].name) : 'Westay - Blog du lịch',
        description: 'Thông tin du lịch ở trong và ngoài nước cập nhật mới nhất 2019, nơi bạn có thể tìm kiếm thông tin hữu ích, nhanh chóng và thuận tiện',
        canonical: show ? (`https://blog.westay.vn/${show[0].categories.data[0].details.data[0].slug}`) : '',
      }} />
      <NavTop />
      <ToTheTop />
      {show ? (
        <GridContainer xs = {12} sm = {12} md = {12} lg = {11} xl = {10}>
        <div>
          <Typography variant = 'h3' className = {classes.titleCategory}>
            {show[0].categories.data[0].details.data[0].name}
          </Typography>
        </div>
        <Grid container spacing = {16} className = {classes.boxNew}>
          <Grid item xs = {8}>
            <PostWrapper post = {show[0]}>
              <IndexMainCard
                cardStyle = 'inside' description = '' imgHeight = {500} contentAlign = 'center'
                title = {show[0].title}
                imgSrc = {show[0].image} imgAlt = {show[0].title}
                chipText = {show[0].categories.data[0].details.data[0].name}
                chipSlug = {show[0].categories.data[0].details.data[0].slug}
                time = {moment(show[0].created_at).format('DD/MM/YYYY')}
              />
            </PostWrapper>
          </Grid>
          <Grid item container spacing = {8} xs = {4}>
            <Grid item xs = {12}>
              <PostWrapper post = {show[1]}>
                <IndexMainCard
                  cardStyle = 'inside' description = '' imgHeight = {243} contentAlign = 'center'
                  title = {show[1].title}
                  imgSrc = {show[1].image} imgAlt = {show[1].title}
                  chipText = {show[1].categories.data[0].details.data[0].name}
                  chipSlug = {show[1].categories.data[0].details.data[0].slug}
                  time = {moment(show[1].created_at).format('DD/MM/YYYY')}
                />
              </PostWrapper>
            </Grid>
            <Grid item xs = {12}>
              <PostWrapper post = {show[2]}>
                <IndexMainCard
                  cardStyle = 'inside' description = '' imgHeight = {243} contentAlign = 'center'
                  title = {show[2].title}
                  imgSrc = {show[2].image} imgAlt = {show[2].title}
                  chipText = {show[2].categories.data[0].details.data[0].name}
                  chipSlug = {show[2].categories.data[0].details.data[0].slug}
                  time = {moment(show[2].created_at).format('DD/MM/YYYY')}
                />
              </PostWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing = {32}>
          <Grid item xs = {12} lg = {9}>
            <CategoryTitle scale = 'medium'
                           title = {`Chuyên mục - ${show[0].categories.data[0].details.data[0].name}`} />
            {_.map(show, (o, i) => i >= 3 ?
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
                      time = {moment(o.created_at).format('DD/MM/YYYY')}
                      link = {o}
                    />
                  </PostWrapper>
              </article>
              ) : '')}
          </Grid>
          <Grid item lg = {3}>
            <div>
              <CategoryTitle title = 'Đăng ký nhận tin' scale = 'medium' />
              <SubscribeEmail />
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
                                       time = {moment(o.created_at).format('DD/MM/YYYY')}
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
  let show;
  const resSlider      = await axios.get('blogs?include=categories.details,user&limit=6&hot=1&status=1');
  const slider         = resSlider.data.data;
  switch (slugCategory) {
    case 'o-dau' :
      const res1 = await axios.get(`blogs?include=categories.details,user&limit=30&category=1&status=1`);
      show       = res1.data.data;
      break;
    case 'choi-gi' :
      const res2 = await axios.get(`blogs?include=categories.details,user&limit=30&category=2&status=1`);
      show       = res2.data.data;
      break;
    case 'an-gi' :
      const res3 = await axios.get(`blogs?include=categories.details,user&limit=30&category=3&status=1`);
      show       = res3.data.data;
      break;
    case 'cam-nang-du-lich' :
      const res4 = await axios.get(`blogs?include=categories.details,user&limit=30&category=4&status=1`);
      show       = res4.data.data;
      break;
    default:
      return '';
  }

  return {show, slider};
};


export default compose<IProps, any>(
  withStyles(styles),
)(Category);
