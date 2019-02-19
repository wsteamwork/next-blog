import {ThemeOptions} from '@material-ui/core/es/styles/createMuiTheme';
import {createMuiTheme, createGenerateClassName} from '@material-ui/core/styles';
import {PaletteOptions} from '@material-ui/core/styles/createPalette';
import {FontStyleOptions, TypographyOptions} from '@material-ui/core/styles/createTypography';
import Blue from '@material-ui/core/colors/blue';
import Red from '@material-ui/core/colors/red';
import Gray from '@material-ui/core/colors/grey';
import {SheetsRegistry} from 'jss';

interface PaletteExtra extends PaletteOptions {

}

export interface ThemeCustom extends ThemeOptions {
  palette?: PaletteExtra;
  typography?: TypographyOptions | FontStyleOptions
}

const options: ThemeCustom = {
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: Gray[100],
    },
    secondary: {
      main: Gray[900],
    },
    error: {
      main: Red[600],
    },
  },
};

export const theme = createMuiTheme(options);

const createPageContext = () => ({
  theme,
  sheetsManager: new Map(),
  sheetsRegistry: new SheetsRegistry(),
  generateClassName: createGenerateClassName(),
});

export const windowExist = typeof window !== 'undefined';
let pageContext: any;

export const getPageContext = () => {
  if (!windowExist) {
    return createPageContext();
  }

  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
};

export default theme;
