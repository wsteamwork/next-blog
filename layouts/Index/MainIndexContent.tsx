import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment, useContext} from 'react';
import {compose} from 'recompose';
import Grid from '@material-ui/core/Grid/Grid';
import IndexMainCard from '@/components/Cards/IndexMainCard';
import CategoryTitle from '@/components/Bars/CategoryTitle';
import {BlogIndexContext, IBlogIndexContext} from '@/store/context/BlogIndexContext';
import _ from 'lodash';
import PostWrapper from '@/components/Wrapper/PostWrapper';
import Link from 'next/link';
import classNames from 'classnames';

const styles: any = (theme: ThemeCustom) => createStyles({
  showMoreLabel: {
    padding: 8,
  },
  showMoreButton: {
    border: '1px solid rgba(0, 0, 0, 0.08)',
    boxShadow: '0px 0px 60px -6px rgba(0,0,0,0.14)',
  },
  ImgTitle: {
    overflow: 'hidden',
    textAlign: 'center',
    fontFamily: '"Mali",cursive',
    fontSize: 24,
    lineHeight: '40px',
    textTransform: 'uppercase',
    fontWeight: 'normal',
    letterSpacing: 2,
    marginBottom: 30,
  },
  lineTitle: {
    display: 'inline-block',
    position: 'relative',
    paddingTop: 40,
    cursor: 'pointer',
    '&::before,&::after': {
      backgroundImage: 'url("/static/line-long.png")',
      content: '""',
      display: 'inline-block',
      width: 300,
      height: 3,
      verticalAlign: 'middle',
      position: 'absolute',
      top: 25,
      left: -300,
      cursor: 'initial',
    },
    '&::after': {
      right: -300,
      left: 'unset',
    },
  },
  titlePost: {
    fontSize: '1.075rem',
  },
  imgPost: {
    '&::after': {
      bottom: 2,
    },
  },
  boxCategory: {
    marginBottom: 50,
  },
  ImgAnGi: {
    background: 'url("/static/coffee.svg") no-repeat center top',
    backgroundSize: 40,
  },
  ImgODau: {
    background: 'url("/static/building.svg") no-repeat center top',
    backgroundSize: 40,
  },
  ImgChoiGi: {
    background: 'url("/static/toy.svg") no-repeat center top',
    backgroundSize: 40,
  },
  ImgCamNang: {
    background: 'url("/static/suitcase.svg") no-repeat center top',
    backgroundSize: 40,
  }
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
      <Grid container item xs = {12} spacing = {16} className = {classes.boxCategory}>
        <Grid item xs = {12}>
          <h4 className = {classNames(classes.ImgTitle, classes.ImgODau)}>
            <Link href = '/o-dau'><span className = {classes.lineTitle}>Ở đâu</span></Link>
          </h4>
        </Grid>
        {_.map(blogStay, (o, i) => (
          <Grid item lg = {6} key = {o.id}>
            <PostWrapper post = {o}>
              <IndexMainCard
                customClasses = {{title: classes.titlePost, maskImage: classes.imgPost}}
                cardStyle = 'outside'
                horizontal
                contentAlign = 'center'
                imgHeight = {155}
                rootSpacing = {32}
                ratio = {{
                  image: 5,
                  content: 7,
                }}
                chipText='Ở đâu'
                chipSlug = {o.categories.data[0].details.data[0].slug}
                imgSrc = {`${o.image}`}
                title = {o.title}
                imgAlt = {o.title}
                time = {o.created_at}
                description = ''
              />
            </PostWrapper>
          </Grid>
        ))}
      </Grid>

      <Grid container item xs = {12} spacing = {16} className = {classes.boxCategory}>
        <Grid item xs = {12}>
          <h4 className = {classNames(classes.ImgTitle, classes.ImgChoiGi)}>
            <Link href = '/choi-gi'><span className = {classes.lineTitle}>Chơi gì</span></Link>
          </h4>
        </Grid>
        {_.map(blogPlay, (o, i) => (
          <Grid item lg = {6} key = {o.id}>
            <PostWrapper post = {o}>
              <IndexMainCard
                customClasses = {{title: classes.titlePost, maskImage: classes.imgPost}}
                cardStyle = 'outside'
                horizontal
                contentAlign = 'center'
                imgHeight = {155}
                rootSpacing = {32}
                ratio = {{
                  image: 5,
                  content: 7,
                }}
                chipText = 'Chơi gì'
                chipSlug = {o.categories.data[0].details.data[0].slug}
                imgSrc = {`${o.image}`}
                title = {o.title}
                imgAlt = {o.title}
                time = {o.created_at}
                description = ''
              />
            </PostWrapper>
          </Grid>
        ))}
      </Grid>
      <Grid container item xs = {12} spacing = {16} className = {classes.boxCategory}>
        <Grid item xs = {12}>
          <h4 className = {classNames(classes.ImgTitle, classes.ImgAnGi)}>
            <Link href = '/an-gi'><span className = {classes.lineTitle}>Ăn gì</span></Link>
          </h4>
        </Grid>
        {_.map(blogEat, (o, i) => (
          <Grid item lg = {6} key = {o.id}>
            <PostWrapper post = {o}>
              <IndexMainCard
                customClasses = {{title: classes.titlePost, maskImage: classes.imgPost}}
                cardStyle = 'outside'
                horizontal
                contentAlign = 'center'
                imgHeight = {155}
                rootSpacing = {32}
                ratio = {{
                  image: 5,
                  content: 7,
                }}
                chipText = 'Ăn gì'
                chipSlug = {o.categories.data[0].details.data[0].slug}
                imgSrc = {`${o.image}`}
                title = {o.title}
                imgAlt = {o.title}
                time = {o.created_at}
                description = ''
              />
            </PostWrapper>
          </Grid>
        ))}
      </Grid>
      <Grid container item xs = {12} spacing = {16} className = {classes.boxCategory}>
        <Grid item xs = {12}>
          <h4 className = {classNames(classes.ImgTitle, classes.ImgCamNang)}>
            <Link href = '/cam-nang-du-lich'><span className = {classes.lineTitle}>Cẩm nang</span></Link>
          </h4>
        </Grid>
        {_.map(blogAll, (o, i) => (
          <Grid item lg = {6} key = {o.id}>
            <PostWrapper post = {o}>
              <IndexMainCard
                customClasses = {{title: classes.titlePost, maskImage: classes.imgPost}}
                cardStyle = 'outside'
                horizontal
                contentAlign = 'center'
                imgHeight = {155}
                rootSpacing = {32}
                ratio = {{
                  image: 5,
                  content: 7,
                }}
                chipText = 'Cẩm nang'
                chipSlug = {o.categories.data[0].details.data[0].slug}
                imgSrc = {`${o.image}`}
                title = {o.title}
                imgAlt = {o.title}
                time = {o.created_at}
                description = ''
              />
            </PostWrapper>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(MainIndexContent);
