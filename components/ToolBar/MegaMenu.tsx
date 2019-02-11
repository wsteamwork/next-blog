import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {Fragment, ComponentType, useEffect} from 'react';
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
import MenuCard from '@/components/Cards/MenuCard';
import Grid from '@material-ui/core/Grid/Grid';

const styles: any = (theme: ThemeCustom) => createStyles({
  ignoreSpacing: {
    margin: 0,
    width: '100%',
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {
  index: number
  bindRef: HTMLElement
}

// @ts-ignore
const MegaMenu: ComponentType<IProps> = (props: IProps) => {
  const {classes, index, bindRef} = props;

  useEffect(() => {
    console.log(bindRef);
  }, [bindRef]);

  return (
    <Fragment>
      <Popper open = {index !== 0} placement = 'bottom' anchorEl = {bindRef} transition>
        {({TransitionProps}) => (
          <Fade {...TransitionProps} timeout = {200}>
            <Paper square elevation = {2}>
              <Fragment>
                <Grid container spacing = {24} className = {classes.ignoreSpacing}>
                  <Grid item xs = {3}>
                    <MenuCard />
                  </Grid>
                  <Grid item xs = {3}>
                    <MenuCard />
                  </Grid>
                  <Grid item xs = {3}>
                    <MenuCard />
                  </Grid>
                  <Grid item xs = {3}>
                    <MenuCard />
                  </Grid>
                </Grid>
              </Fragment>
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
