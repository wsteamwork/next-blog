import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {Fragment, ComponentType, useEffect, useState, Dispatch} from 'react';
import {compose} from 'recompose';
import {NextComponentType} from 'next';
import GridContainer from '@/layouts/Grid/Container';
import Paper from '@material-ui/core/Paper/Paper';
import Popper from '@material-ui/core/Popper/Popper';
import Typography from '@material-ui/core/Typography/Typography';
import Fade from '@material-ui/core/Fade/Fade';
import GridList from '@material-ui/core/GridList/GridList';
import GridListTile from '@material-ui/core/GridListTile/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar/GridListTileBar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MenuCard from '@/components/Cards/MenuCard';
import Grid from '@material-ui/core/Grid/Grid';
import PlaceToGo from '@/components/MenuContent/PlaceToGo';
import {useElementHover} from '@/store/hooks/AnimationHooks';

const styles: any = (theme: ThemeCustom) => createStyles({});

interface IProps extends Partial<WithStyles<typeof styles>> {
  index: number
  setIndex: Dispatch<number>
  bindRef: HTMLElement
}

// @ts-ignore
const MegaMenu: ComponentType<IProps> = (props: IProps) => {
  const {classes, index, bindRef, setIndex} = props;
  const [hover, hoverProps]                 = useElementHover();

  useEffect(() => {
    if (!hover) {
      setIndex(0);
    }
  }, [hover]);

  return (
    <Fragment>
      <Popper open = {index !== 0 || hover} placement = 'bottom' anchorEl = {bindRef} transition>
        {({TransitionProps}) => (
          <Fade {...TransitionProps} timeout = {200}>
            <Paper square elevation = {2} {...hoverProps}>
              <PlaceToGo />
            </Paper>
          </Fade>
        )}
      </Popper>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(MegaMenu);
