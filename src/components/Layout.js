import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import '../css/layout.css'

<<<<<<< HEAD


=======
>>>>>>> a9226272d10b50e95835acedcf2a532a2031de56
import ProfilePic from './profilepic';
import Footer from './footer';

import { theme } from '../styles/theme';

import {
    Container, Card, CardHeader
  } from 'reactstrap'

<<<<<<< HEAD

class Layout extends React.Component {
=======
import { Link } from 'gatsby'

class Layout extends Component {
>>>>>>> a9226272d10b50e95835acedcf2a532a2031de56
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
<<<<<<< HEAD
=======
          <>
>>>>>>> a9226272d10b50e95835acedcf2a532a2031de56
          <div className='Wrapper'>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
<<<<<<< HEAD
                { name: 'description', content: "Instagram Bio Link " },
                { name: 'keywords', content: 'Instagram biolink gallery shop' },
              ]}
            >

            </Helmet>
            
            <Container>
=======
                { name: 'description', content: "Lian Ariel's Art Gallery and Shop" },
                { name: 'keywords', content: 'art, artwork, crystals, chakras, yoga' },
              ]}
            >
                <meta property="og:site_name" content="Justin Arreguin" />
                <meta property="og:title" content="Justin Arreguin" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="" />
                <meta property="og:description" content="Personal Profile for Justin Arreguin" />
                <meta property="og:url" content="" />
                <meta property="twitter:card" content="summary_large_image" />
                
                <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
                <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="ZjVkN2M3YzEtOGU0Yy00ZTUzLWFiZGQtNTNkZjY3NGM2YThkNjM3MDg5MjIyODA1Nzg2OTk5"></script>
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
              <html lang="en" />
            </Helmet>
            
            <Container>
                <main>
>>>>>>> a9226272d10b50e95835acedcf2a532a2031de56
                    <Card className="card-bg">
                        <CardHeader>
                            
                                <ProfilePic />
                           
                        </CardHeader>
                        <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
                            {children}
                        </div>
                        <Footer />
                    </Card>
<<<<<<< HEAD
            </Container>
            </div>
=======
                </main>
            </Container>
            </div>
          </>
>>>>>>> a9226272d10b50e95835acedcf2a532a2031de56
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
