import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment, Dispatch, MutableRefObject, useEffect} from 'react';
import {compose} from 'recompose';
import {useElementHover} from '@/store/hooks/AnimationHooks';
import Fade from '@material-ui/core/Fade/Fade';
import Paper from '@material-ui/core/Paper/Paper';
import PlaceToGo from '@/components/MenuContent/PlaceToGo';
import Popper from '@material-ui/core/Popper/Popper';

const styles: any = (theme: Required<ThemeCustom>) => createStyles({
  paperRoot: {
    maxWidth: '80vw',
  },
  menuZIndex:{
    zIndex:10000,
  }
});

interface IMenuPopperProps extends Partial<WithStyles<typeof styles>> {
  isOpen: boolean
  setIndex: Dispatch<number>
  bindRef: MutableRefObject<HTMLElement>
}

// @ts-ignore
const MenuPopper: ComponentType<IMenuPopperProps> = (props) => {
  const {classes, isOpen, bindRef, setIndex} = props;
  const [hover, hoverProps]                  = useElementHover();

  useEffect(() => {
    if (!hover) {
      setIndex(0);
    }
  }, [hover]);

  return (
    <Fragment>
      <Popper open = {isOpen || hover} placement = 'bottom' anchorEl = {bindRef.current} transition className={classes.menuZIndex}>
        {({TransitionProps}) => (
          <Fade {...TransitionProps} timeout = {300}>
            <div {...hoverProps}>
              <Paper square elevation = {2} classes = {{
                root: classes.paperRoot,
              }}>
                {props.children}
              </Paper>
            </div>
          </Fade>
        )}
      </Popper>
    </Fragment>
  );
};

export default compose<IMenuPopperProps, any>(
  withStyles(styles),
)(MenuPopper);
