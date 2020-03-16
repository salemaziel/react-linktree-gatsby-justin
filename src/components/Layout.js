import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import '../css/layout.css'



import ProfilePic from './profilepic';
import Footer from './footer';

import { theme } from '../styles/theme';

import {
    Container, Card, CardHeader
  } from 'reactstrap'


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }
    componentDidMount() {
    if (window.Snipcart) {
      window.Snipcart.api.configure('show_continue_shopping', true);
    }
  }


  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div className='Wrapper'>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: "Instagram Bio Link " },
                { name: 'keywords', content: 'Instagram biolink gallery shop' },
              ]}
            >

            </Helmet>
            
            <Container>
                    <Card className="card-bg">
                        <CardHeader>
                            
                                <ProfilePic />
                           
                        </CardHeader>
                        <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
                            {children}
                        </div>
                        <Footer />
                    </Card>
            </Container>
            </div>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
