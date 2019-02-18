import React from 'react';
import App, {Container} from 'next/app';
import {getPageContext} from '@/components/Theme/Theme';
import JssProvider from 'react-jss/lib/JssProvider';
import Head from 'next/head';
import {MuiThemeProvider, CssBaseline} from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth/withWidth';
import {compose} from 'recompose';
import AppWrapper from '@/store/container/AppWrapper';

interface MainAppProps {

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

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const {Component, pageProps} = this.props;
    const {pageContext}          = this.state;

    return (
      <Container>
        <Head>
          <title>My page</title>
          <meta name = 'viewport' content = 'width=device-width, initial-scale=1, shrink-to-fit=no' />
          <link rel = 'stylesheet' href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
          <link rel = 'stylesheet' href = 'https://fonts.googleapis.com/icon?family=Material+Icons' />
        </Head>
        <JssProvider
          registry = {pageContext.sheetsRegistry}
          generateClassName = {pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme = {pageContext.theme}
            sheetsManager = {pageContext.sheetsManager}
          >
            <CssBaseline />
            <AppWrapper>
              <Component pageContext = {pageContext} {...pageProps} />
            </AppWrapper>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default compose<MainAppProps, any>(
)(CustomApp);
