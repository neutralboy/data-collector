import App, { Container } from "next/app";
import {Provider} from './../components/Provider';

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <Provider>
          <Component {...pageProps} />
        </Provider>
    );
  }
}

export default MainApp;