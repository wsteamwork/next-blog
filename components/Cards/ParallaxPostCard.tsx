import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment, useContext} from 'react';
import {compose} from 'recompose';
import ChipCard from '@/components/Button/ChipCard';
import {Typography} from '@material-ui/core';
import {Parallax} from 'react-parallax';
import {grey, red} from '@material-ui/core/colors';
import moment, {MomentInput} from 'moment';
import InformationIndicate from '@/components/Bars/InformationIndicate';
import {useSpring, config} from 'react-spring';
import {PostDetailsContext,IPostDetailsContext} from '@/store/context/PostDetailsContext';

const styles: any = (theme: Required<ThemeCustom>) => createStyles({
  insideParallax: {
    padding: 20,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    height: 450,
    width: '100%',
    background: 'linear-gradient(to bottom,rgba(50,50,50,0) 0%,rgba(16,15,15,.93) 89%,rgba(16,15,15,.95) 93%)',
    opacity: 0.9,
    content: '""',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    bottom: 0,
  },
  boxTitle: {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  Title: {
    width: 900,
    position: 'absolute',
    bottom: 16,
    paddingBottom: 16,
    textAlign: 'left',
  },
  postTitle: {
    color: grey[100],
    paddingBottom: 25,
    paddingTop: 10,
    fontSize: '2.5rem',
    lineHeight: 1.08,
  },
  postTime: {
    color: '#ffffff',
    borderRight: '1px solid #fff',
    paddingRight: 8,
  },
  postAuthor: {
    color: '#ffffff',
  },
  iconTitle: {
    verticalAlign: 'bottom',
  },
  customChip: {
    '&:hover': {
      backgroundColor: red[700],
    },
  },
});

interface IParallaxPostCardProps extends Partial<WithStyles<typeof styles>> {
  title?: string
  time?: MomentInput
  author?: string
  imageSrc?: string
  category?: string
  slugCategory: string
}

// @ts-ignore
const ParallaxPostCard: ComponentType<IParallaxPostCardProps> = (props) => {
  const {
          classes,
          category,
          slugCategory,
          author,
          title,
          imageSrc,
          time,
        } = props;
  const {state}   = useContext<IPostDetailsContext>(PostDetailsContext);

  const aniProps = useSpring({
    opacity: 1,
    transform: 'translate3d(0px,0,0)',
    from: {
      opacity: 0,
      transform: 'translate3d(0px,200px,0)',
    },
    config: config.slow,
  });

  return (
    <Fragment>
      <Parallax
        bgImage = {`https://s3-ap-southeast-1.amazonaws.com/westay-img/lg/${imageSrc}`}
        strength = {600} bgImageStyle = {{top: '-30%'}}>
        <div style = {{height: 450}}>
          <div className = {classes.insideParallax}>
            <div className = {classes.Title}>
              <ChipCard text = {category} slug = {slugCategory} customClasses = {{
                root: classes.customChip,
              }} />
              <Typography variant = 'h3' className = {classes.postTitle}>
                {title}
              </Typography>
              <InformationIndicate
                userName = {author}
                time = {time}
                customClasses = {{
                  root: classes.postAuthor,
                }}
              />
            </div>
          </div>
        </div>
      </Parallax>
    </Fragment>
  );
};

ParallaxPostCard.defaultProps = {
  title: '',
  author: 'Westay',
  category: '',
  time: '',
  imageSrc: '',
  slugCategory: 'Tổng hợp',
};

export default compose<IParallaxPostCardProps, any>(
  withStyles(styles),
)(ParallaxPostCard);
