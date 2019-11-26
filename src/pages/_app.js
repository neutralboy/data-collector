import App from "next/app";
import { ApolloProvider } from '@apollo/react-hooks';

import {Provider} from './../components/Provider';
import withApollo from '../components/Apollo';

class MainApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
        <Provider>
          <ApolloProvider client={apollo}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Provider>
    );
  }
}

export default withApollo(MainApp);