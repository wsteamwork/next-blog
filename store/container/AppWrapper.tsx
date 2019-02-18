import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import {Breakpoint} from '@material-ui/core/styles/createBreakpoints';
import withWidth from '@material-ui/core/withWidth/withWidth';
import {GlobalContext} from '@/store/context/GlobalContext';

const styles: any = (theme: ThemeCustom) => createStyles({});

interface IAppWrapperProps extends Partial<WithStyles<typeof styles>> {
  width?: Breakpoint
}

// @ts-ignore
const AppWrapper: ComponentType<IAppWrapperProps> = (props) => {
  const {classes, width} = props;

  return (
    <Fragment>
      <GlobalContext.Provider value = {{
        width,
      }}>
        {props.children}
      </GlobalContext.Provider>
    </Fragment>
  );
};

export default compose<IAppWrapperProps, any>(
  withStyles(styles),
  withWidth(),
)(AppWrapper);
