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
import Link from 'next/link';

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

  const {hotBlogs, blogEat, blogPlay, blogStay, blogAll} = state;

  return (
    <Fragment>
      <CategoryTitle style = {{marginTop: 10}} subTitle = 'Xem thêm' title = 'Ở đâu'  category_url = '/o-dau' />
      <Grid container item xs = {12} spacing = {16}>
        {_.map(blogStay, (o, i) => (
          <Grid item lg = {6} key = {o.id}>
            <PostWrapper post = {o}>
              <IndexMainCard
                imgHeight = {260}
                chipText='Ở đâu'
                imgSrc = {`https://s3-ap-southeast-1.amazonaws.com/westay-img/lg/${o.image}`}
                title = {o.title}
                imgAlt = {o.title}
                time = {o.created_at}
                description = {o.description}
              />
            </PostWrapper>
          </Grid>
        ))}
        <Grid container item xs = {12} justify = 'center'>
          {/* <Button
            classes = {{
              label: classes.showMoreLabel,
              root: classes.showMoreButton,
            }}
            fullWidth
          >
            <Link href = '/category'><a style = {{textDecoration: 'none'}}>Xem thêm</a></Link>
          </Button> */}
        </Grid>
      </Grid>

      <CategoryTitle style = {{marginTop: 10}} subTitle = 'Xem thêm' title = 'Chơi gì'  category_url = '/choi-gi' />
      <Grid container item xs = {12} spacing = {16}>
        {_.map(blogPlay, (o, i) => (
          <Grid item lg = {6} key = {o.id}>
            <PostWrapper post = {o}>
              <IndexMainCard
                imgHeight = {260}
                chipText = 'Chơi gì'
                imgSrc = {`https://s3-ap-southeast-1.amazonaws.com/westay-img/lg/${o.image}`}
                title = {o.title}
                imgAlt = {o.title}
                time = {o.created_at}
                description = {o.description}
              />
            </PostWrapper>
          </Grid>
        ))}
        <Grid container item xs = {12} justify = 'center'>
          {/* <Button
            classes = {{
              label: classes.showMoreLabel,
              root: classes.showMoreButton,
            }}
            fullWidth
          >
            <Link href = '/category'><a style = {{textDecoration: 'none'}}>Xem thêm</a></Link>
          </Button> */}
        </Grid>
      </Grid>
      <CategoryTitle style = {{marginTop: 10}} subTitle = 'Xem thêm' title = 'Ăn gì' category_url = '/an-gi'/>
      <Grid container item xs = {12} spacing = {16}>
        {_.map(blogEat, (o, i) => (
          <Grid item lg = {6} key = {o.id}>
            <PostWrapper post = {o}>
              <IndexMainCard
                imgHeight = {260}
                chipText = 'Ăn gì'
                imgSrc = {`https://s3-ap-southeast-1.amazonaws.com/westay-img/lg/${o.image}`}
                title = {o.title}
                imgAlt = {o.title}
                time = {o.created_at}
                description = {o.description}
              />
            </PostWrapper>
          </Grid>
        ))}
        <Grid container item xs = {12} justify = 'center'>
          {/* <Button
            classes = {{
              label: classes.showMoreLabel,
              root: classes.showMoreButton,
            }}
            fullWidth
          >
            <Link href = '/category'><a style = {{textDecoration: 'none'}}>Xem thêm</a></Link>
          </Button> */}
        </Grid>
      </Grid>
      {/* <CategoryTitle style = {{marginTop: 10}} subTitle = 'Xem thêm' title = 'Cẩm nang du lịch' />
      <Grid container item xs = {12} spacing = {16}>
        {_.map(blogAll, (o, i) => (
          <Grid item lg = {6} key = {o.id}>
            <PostWrapper post = {o}>
              <IndexMainCard
                imgHeight = {260}
                chipText = {o.tags.data.length !== 0 ? o.tags.data[0].name : 'Westay'}
                imgSrc = {`https://s3-ap-southeast-1.amazonaws.com/westay-img/lg/${o.image}`}
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
            <Link href = '/category'><a style = {{textDecoration: 'none'}}>Xem thêm</a></Link>
          </Button>
        </Grid>
      </Grid> */}
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(MainIndexContent);
