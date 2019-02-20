import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import Grid from '@material-ui/core/Grid/Grid';
import MenuCard from '@/components/Cards/MenuCard';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import _ from 'lodash';
import IndexMainCard from '@/components/Cards/IndexMainCard';

const styles: any = (theme: ThemeCustom) => createStyles({
  ignoreSpacing: {
    margin: 0,
    width: '100%',
  },
  buttonSize: {
    padding: 6,
  },
  page: {
    marginLeft: 8,
    paddingBottom: 8,
  },
  trickOverlay: {
    bottom: 12,
    left: 12,
  },
  smallTitle: {
    fontSize: '1.025rem',
    fontWeight: 600,
  },

});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const PlaceToGo: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <Grid container>
        <Grid container item xs = {12} spacing = {16} className = {classes.ignoreSpacing}>
          {_.map([0, 1, 2, 3], o => (
            <Grid item xs = {3} key = {o}>
              <IndexMainCard
                rootSpacing = {8}
                customClasses = {{
                  overlayContainer: classes.trickOverlay,
                  title: classes.smallTitle,
                }}
                chipText = 'Nghỉ'
                description = ''
                time = ''
                author = ''
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container item xs = {12} className = {classes.page}>
        <IconButton classes = {{
          root: classes.buttonSize,
        }}>
          <ArrowLeft />
        </IconButton>
        <IconButton classes = {{
          root: classes.buttonSize,
        }}>
          <ArrowRight />
        </IconButton>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(PlaceToGo);
