import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles, StyleRules, CSSProperties} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment, useMemo} from 'react';
import {compose} from 'recompose';
import MenuCard from '@/components/Cards/MenuCard';
import Grid from '@material-ui/core/Grid/Grid';
import Gray from '@material-ui/core/colors/grey';
import Blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography/Typography';
import {useElementHover} from '@/store/hooks/AnimationHooks';
import _ from 'lodash';
import moment from 'moment';

const styles: any = (theme: ThemeCustom) => createStyles({
  imgSize: {
    maxHeight: 300,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
    borderRadius: 12,
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
      borderRadius: 12,
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
  chipTitle: {
    cursor: 'pointer',
    fontStyle: 'italic',
    display: 'inline-block',
    borderRadius: 24,
    backgroundColor: Gray[900],
    padding: '6px 12px 4px 9px',
    '&:hover': {
      textShadow: '1px 1px 6px rgba(0,0,0,0.66)',
      backgroundColor: Blue[900],
    },
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
    position: 'absolute',
    bottom: 28,
    left: 28,
    maxWidth: '90%',
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

interface IProps extends Partial<WithStyles<typeof styles>> {
  cardStyle?: 'inside' | 'outside'
  imgHeight?: number
}

let placeHolder = 'Divided, sweet pudding is best rinsed with melted hollandaise sauce. Roast five white breads, tofu, and garlic in a large bucket over medium heat, roast for four minutes and blend with some pork butt. Sausages can be marinateed with warm quinoa, also try mash uping the tart with beer. To the springy rice add leek, chickpeas, mint sauce and cold onion?. Mash caviar roughly, then mix with white wine and serve carefully iced in bottle.';

// @ts-ignore
const IndexMainCard: ComponentType<IProps> = (props: IProps) => {
  const {classes, cardStyle, imgHeight} = props;

  const [cardHover, titleHoverProps] = useElementHover();

  const imgStyles = useMemo<CSSProperties>(() => ({
    maxHeight: imgHeight ? imgHeight : undefined,
    height: imgHeight ? imgHeight : undefined,
  }), [imgHeight]);

  const InsideDescription = () => (
    <Fragment>
      <Grid item xs = {12}>
        <Typography
          variant = 'h4'
          color = 'primary'
          classes = {{
            root: classNames(
              classes.title,
            ),
          }}
        >
          Một ngôi nhà cực đẹp vừa được lên sóng
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant = 'subtitle2' classes = {{
          root: classes.titleInside,
        }}>
          Nanahira, {moment().calendar()}
        </Typography>
      </Grid>
    </Fragment>
  );

  return (
    <Fragment>
      <Grid container spacing = {8}>
        <Grid item xs = {12} container className = {classes.imgContainer}>
          <div className = {classes.imgGradient}>
            <img src = '/static/room_demo.jpeg' alt = '' className = {classes.imgSize} style = {imgStyles} />
          </div>
          <Grid container item xs = {12} className = {classes.overLayContent} spacing = {8}>
            <Grid item xs = {12}>
              <div className = {classNames(
                classes.chipTitle,
                classes.transitionDuration,
              )}>
              <span>
                <Typography
                  variant = 'subtitle2'
                  color = 'primary'
                >
                Mẹo vặt
              </Typography>
              </span>
              </div>
            </Grid>
            {cardStyle === 'inside' ? (
              <Fragment>
                <InsideDescription />
              </Fragment>
            ) : ''}
          </Grid>
        </Grid>
        {cardStyle === 'outside' ? (
          <Fragment>
            <Grid item xs = {12}>
              <Typography
                variant = 'h4'
                className = {
                  classNames({
                    [classes.titleHover]: cardHover,
                  }, classes.transitionDuration)
                }
                classes = {{
                  root: classes.title,
                }}
                {...titleHoverProps}
              >
                Một ngôi nhà cực đẹp vừa được lên sóng
              </Typography>
            </Grid>
            <Grid item xs = {12}>
              <Typography variant = 'subtitle2' classes = {{
                root: classes.timeIndicate,
              }}>
                Nanahira, {moment().calendar()}
              </Typography>
            </Grid>
            <Grid item xs = {12}>
              <Typography variant = 'body2' classes = {{
                root: classes.description,
              }}>
                {_.truncate(placeHolder, {
                  length: 200,
                })}
              </Typography>
            </Grid>
          </Fragment>
        ) : ''}
      </Grid>
    </Fragment>
  );
};

IndexMainCard.defaultProps = {
  cardStyle: 'outside',
  imgHeight: 0,
};

export default compose<IProps, any>(
  withStyles(styles),
)(IndexMainCard);
