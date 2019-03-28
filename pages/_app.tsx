import React from 'react';
import App, {Container} from 'next/app';
import {getPageContext} from '@/components/Theme/Theme';
import JssProvider from 'react-jss/lib/JssProvider';
import Head from 'next/head';
import {MuiThemeProvider, CssBaseline} from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth/withWidth';
import {compose} from 'recompose';
import AppWrapper from '@/store/container/AppWrapper';
import {GlobalContext} from '@/store/context/GlobalContext';
import {ThemeProvider, useTheme} from '@material-ui/styles';
import {Breakpoint} from '@material-ui/core/styles/createBreakpoints';
import NextSeo from 'next-seo';
// import ReactGA from 'react-ga';

interface MainAppProps {
  width: Breakpoint
}

interface MainAppState {
  pageContext: any
}

class CustomApp extends App<MainAppProps, MainAppState> {
  state = {
    pageContext: getPageContext(),
  };

  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }
  // initializeReactGA() {
  //   console.log(window.location.pathname);
  //   ReactGA.initialize('UA-137177093-1');
  //   ReactGA.pageview(
  //     `/${window.location.pathname} + ${
  //     window.location.search
  //     }`
  //   );
  // }
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const {Component, pageProps, width} = this.props;
    const {pageContext}                 = this.state;
    // this.initializeReactGA();
    return (
      <Container>
        <Head>
          {/*<title>My page</title>*/}
          <meta name = 'viewport' content = 'width=device-width, initial-scale=1, shrink-to-fit=no' />
          <link rel = 'stylesheet' href = 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&amp;subset=vietnamese' />
          <link rel = 'stylesheet' href = 'https://fonts.googleapis.com/icon?family=Material+Icons' />
          <link href = 'https://fonts.googleapis.com/css?family=Amatic+SC|Mali|KoHo' rel = 'stylesheet' />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-137177093-1"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', 'UA-137177093-1');
                  `
            }}>
        </script>

        </Head>
        <NextSeo config = {{
          openGraph: {
            locale: 'vi_VN',
            site_name: 'Blog Du Lịch Westay - Homestay cho người Việt',
          },
        }} />
        <JssProvider
          registry = {pageContext.sheetsRegistry}
          generateClassName = {pageContext.generateClassName}
        >
          <ThemeProvider theme = {pageContext.theme}>
            <MuiThemeProvider
              theme = {pageContext.theme}
              sheetsManager = {pageContext.sheetsManager}
            >
              <AppWrapper>
                <Component pageContext = {pageContext} {...pageProps} />
              </AppWrapper>
              <CssBaseline />
            </MuiThemeProvider>
          </ThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default CustomApp;
