import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle,  
    
  } from 'reactstrap'

import '../css/cardcontent.css'
import Header from './header';

import '../css/gallery2.css'
import Footer from './footer'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

{/**export default () => (
  <StaticQuery
    query={graphql`
    allInstaNode(limit:8) {
        edges {
          node {
            id
            likes
            comments
            mediaType
            preview
            original
            timestamp
            caption
            localFile {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
    }
    `} />
    render() {
        const instaimg = this.props.data.allInstaNode.edges;
)

class Cardcontent4 extends React.Component {
    render() {
        const instaimg = this.props.data.allInstaNode.edges;
    return (
        <Card className="card-bg gallery2">
            <Header />
        <CardBody>
        
          <CardTitle>
              <h1 style={{
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  display: 'relative',
              }}>
                  IG Bio Link Tree (Think Of better name) 
                  </h1> 
            </CardTitle>
            <CardSubtitle>Just a test: Subtitle</CardSubtitle>
            <div className="pad-70">
              <h2 className="portfolio-title text-center  section-title">Instagram Feed</h2>
                <div className="col-md-10 offset-md-1 ">            
                  <ul className="row insta-blk">                  
                      {instaimg.map(({ node }) => {
                        return (                        
                            <li  key={node.id} className="insta-img-cnt">
                            <Img fixed={node.localFile.childImageSharp.fixed} />                         
                              <p className="insta-likes-comm"> <span className="insta-like">{node.comments}</span></p>
                            </li>
                        )
                      })}
                    </ul>**/}
                    {/* <div className=""><Link>Follow me on Instagram</Link></div> */}
                {/**</div>
        
             
              </div>              
        </CardBody>
        <Footer />
        </Card>
    )
}
}

export default Cardcontent4
**/}

  

