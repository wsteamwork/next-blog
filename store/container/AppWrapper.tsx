import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import {Breakpoint} from '@material-ui/core/styles/createBreakpoints';
import withWidth from '@material-ui/core/withWidth/withWidth';
import {GlobalContext} from '@/store/context/GlobalContext';
import {useTheme} from '@material-ui/styles';
import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme';
import {unstable_useMediaQuery as useMediaQuery} from '@material-ui/core/useMediaQuery';

const styles: any = (theme: ThemeCustom) => createStyles({});

interface IAppWrapperProps extends Partial<WithStyles<typeof styles>> {
  width?: Breakpoint
}

// @ts-ignore
const AppWrapper: ComponentType<IAppWrapperProps> = (props) => {
  const {} = props;

  const theme = useTheme<ThemeOptions>();
  const width =
          [...theme.breakpoints.keys].reverse().reduce((output, key) => {
            const matches = useMediaQuery(theme.breakpoints.only(key));
            return !output && matches ? key : output;
          }, null) || 'xs';

  return (
    <Fragment>
      <GlobalContext.Provider value = {{
        width: width,
      }}>
        {props.children}
      </GlobalContext.Provider>
    </Fragment>
  );
};

export default compose<IAppWrapperProps, any>(
)(AppWrapper);
