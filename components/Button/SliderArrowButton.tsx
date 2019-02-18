import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment, useContext} from 'react';
import {compose} from 'recompose';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Gray from '@material-ui/core/colors/grey';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import {CustomArrowProps} from 'react-slick';
import {GlobalContext, IGlobalContext} from '@/store/context/GlobalContext';

const styles: any = (theme: ThemeCustom) => createStyles({
  root: {
    zIndex: 1,
    position: 'absolute',
    top: '50%',
    backgroundColor: 'ghostwhite',
    '&:hover': {
      backgroundColor: 'ghostwhite',
    },
  },
  arrowRight: {
    right: '-2%',
  },
  arrowLeft: {
    left: '-2%',
  },
});

interface IProps extends Partial<WithStyles<typeof styles>>, CustomArrowProps {
  arrow: 'prev' | 'next'
}

// @ts-ignore
const SliderArrowButton: ComponentType<IProps> = (props: IProps) => {
  const {classes, arrow, onClick} = props;

  return (
    <Fragment>
      <Fab
        className = {classNames({
          [classes.arrowRight]: arrow === 'next',
          [classes.arrowLeft]: arrow === 'prev',
        }, classes.root)}
        size = 'small'
        disableFocusRipple
        disableRipple
        onClick = {onClick}
      >
        {arrow === 'next' ? <ArrowRight /> : <ArrowLeft />}
      </Fab>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(SliderArrowButton);
