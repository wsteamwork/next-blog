import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles, StyleRules, CSSProperties, ClassNameMap} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment, useMemo} from 'react';
import {compose} from 'recompose';
import MenuCard from '@/components/Cards/MenuCard';
import Grid, {GridSize, GridSpacing, GridItemsAlignment} from '@material-ui/core/Grid/Grid';
import Gray from '@material-ui/core/colors/grey';
import Blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography/Typography';
import {useElementHover} from '@/store/hooks/AnimationHooks';
import _ from 'lodash';
import moment, {MomentInput} from 'moment';
import ChipCard from '@/components/Button/ChipCard';
import InformationIndicate from '@/components/Bars/InformationIndicate';
import Hidden from '@material-ui/core/Hidden/Hidden';
import CardDescription from '@/components/Content/CardDescription';
import {CustomClasses} from '@/types/Interfaces/CustomInterface';
import {IIndexMainCard} from '@/types/Interfaces/Components/Card';

const styles: any = (theme: ThemeCustom) => createStyles({
  imgSize: {
    maxHeight: '100%',
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
    borderRadius: 8,
  },
  imgGradient: {
    position: 'relative',
    overflow: 'hidden',
    maxHeight: '99%',
    '&:after': {
      transition: theme!.transitions!.create!(['all'], {
        duration: 200,
        easing: 'ease-in-out',
      }),
      display: 'block',
      position: 'absolute',
      bottom: 0,
      backgroundImage: 'linear-gradient(to top,#000, transparent)',
      opacity: .67,
      content: `''`,
      width: '100%',
      borderRadius: 8,
      height: '60%',
    },
    '&:hover:after': {
      opacity: .86,
    },
  },
  imgContainer: {
    position: 'relative',
    cursor: 'pointer',
  },
  transitionDuration: {
    transition: theme!.transitions!.create!(['color', 'background-color'], {
      duration: 200,
      easing: 'ease-in-out',
    }),
  },
  mainTitle: {
    padding: 5,
  },
  titleHover: {
    color: Blue[400],
    cursor: 'pointer',
  },
  overLayContent: {
    opacity: .92,
    pointerEvents: 'none',
    position: 'absolute',
    bottom: 32,
    left: 32,
    maxWidth: '90%',
    '&:hover': {
      opacity: 1,
    },
  },
  title: {
    fontSize: '1.675rem',
  },
  description: {
    color: 'rgba(0,0,0,0.7)',
  },
  timeIndicate: {
    color: 'rgba(0,0,0,0.46)',
  },
  titleInside: {
    color: Gray[400],
    fontSize: '0.775rem',
  },
});

interface IProps extends Partial<WithStyles<typeof styles>>, IIndexMainCard {

}

// @ts-ignore
const IndexMainCard: ComponentType<IProps> = (props: IProps) => {
  const {
          classes,
          cardStyle,
          imgHeight,
          maxHeight,
          customClasses,
          chipText,
          title,
          description,
          author,
          time,
          horizontal,
          descriptionLength,
          ratio,
          rootSpacing,
          contentAlign,
        } = props;

  const [cardHover, titleHoverProps] = useElementHover();

  const imgStyles = useMemo<CSSProperties>(() => ({
    maxHeight: imgHeight ? imgHeight : maxHeight,
    height: imgHeight ? imgHeight : undefined,
  }), [imgHeight]);

  const horizontalBreakpoint = useMemo(() => horizontal ? 6 : 12, [horizontal]);

  const InsideDescription = () => (
    <Fragment>
      <Grid item xs = {12}>
        <Typography
          variant = 'h4'
          component = 'h4'
          color = 'primary'
          classes = {{
            root: classNames(
              classes.title,
              customClasses.title,
            ),
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <InformationIndicate
          customClasses = {{
            root: classes.titleInside,
          }}
          userName = {author}
          time = {time}
        />
      </Grid>
    </Fragment>
  );

  return (
    <Fragment>
      <Grid container spacing = {rootSpacing}>
        <Grid item xs = {ratio.image || horizontalBreakpoint} container className = {classes.imgContainer}>
          <div className = {classes.imgGradient}>
            <img
              src = '/static/room_demo.jpeg'
              alt = 'my-room'
              className = {classNames(
                classes.imgSize,
                customClasses.image,
              )} style = {imgStyles} />
          </div>
          <Grid
            container
            item xs = {12}
            className = {classNames(
              classes.overLayContent,
              customClasses.overlayContainer,
            )}
            spacing = {8}
          >
            <Hidden xsUp = {!chipText}>
              <Grid item xs = {12}>
                <ChipCard text = {chipText} />
              </Grid>
            </Hidden>
            {cardStyle === 'inside' ? (
              <Fragment>
                <InsideDescription />
              </Fragment>
            ) : ''}
          </Grid>
        </Grid>
        <Grid container item xs = {ratio.content || horizontalBreakpoint} alignItems = {contentAlign}>
          {cardStyle === 'outside' ? (
            <Grid item xs = {12}>
              <Grid container spacing = {8}>
                <Grid item xs = {12}>
                  <Typography
                    variant = 'h4'
                    className = {
                      classNames({
                          [classes.titleHover]: cardHover,
                        },
                        classes.transitionDuration,
                        customClasses.title,
                      )
                    }
                    classes = {{
                      root: classes.title,
                    }}
                    {...titleHoverProps}
                  >
                    {title}
                  </Typography>
                </Grid>
                <Grid item xs = {12}>
                  <InformationIndicate
                    userName = {author}
                    time = {time}
                  />
                </Grid>
                <Hidden xsUp = {!description}>
                  <Grid item xs = {12}>
                    <CardDescription text = {description} length = {descriptionLength} />
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          ) : ''}
        </Grid>
      </Grid>
    </Fragment>
  );
};

IndexMainCard.defaultProps = {
  cardStyle: 'outside',
  imgHeight: 0,
  chipText: 'Mẹo vặt',
  author: 'Nanahira',
  rootSpacing: 24,
  contentAlign: 'stretch',
  customClasses: {},
  ratio: {},
  time: '2019-02-16',
  descriptionLength: 200,
  title: 'Một ngôi nhà cực đẹp vừa được lên sóng',
  description: 'Divided, sweet pudding is best rinsed with melted hollandaise sauce. Roast five white breads, tofu, and garlic in a large bucket over medium heat, roast for four minutes and blend with some pork butt. Sausages can be marinateed with warm quinoa, also try mash uping the tart with beer. To the springy rice add leek, chickpeas, mint sauce and cold onion?. Mash caviar roughly, then mix with white wine and serve carefully iced in bottle.',
};

export default compose<IProps, any>(
  withStyles(styles),
)(IndexMainCard);
