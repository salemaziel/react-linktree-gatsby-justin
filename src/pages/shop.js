import React from 'react';
//import ShopCardContent from '../components/ShopCardContent'
import {
    CardBody,
    CardTitle, CardSubtitle,  
    
  } from 'reactstrap'

import '../css/HomeCardContent.css'
import Layout from '../components/Layout';
import ItemThumbnail from '../components/ItemThumbnail/ItemThumbnail'


import { Link } from 'gatsby'
import { graphql } from "gatsby"
import styled from "styled-components"
<<<<<<< HEAD
import Button from "../components/button";
=======
>>>>>>> a9226272d10b50e95835acedcf2a532a2031de56

import '../css/Back.css'

<<<<<<< HEAD
const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
`

=======

const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
`

>>>>>>> a9226272d10b50e95835acedcf2a532a2031de56



class Shop extends React.Component {
    render() {
      const { data } = this.props
      const siteTitle = data.site.siteMetadata.title
<<<<<<< HEAD
      const items = data.allMarkdownRemark.edges
      return (
        <Layout location={this.props.location} title={siteTitle}>
              <div className="shopBack">
      <Link preload prefetch to="/">
      <Button primary> 
      Back
      </Button>
      </Link>
    </div>
=======
      const products = data.allMarkdownRemark.edges
      return (
        <Layout location={this.props.location} title={siteTitle}>
>>>>>>> a9226272d10b50e95835acedcf2a532a2031de56
                <CardTitle>
                    <h2>
                        Welcome to My Shop. 
                    <br />
				        Coming Soon! 
                    </h2> 
                </CardTitle>

                <CardBody>
                    <CardSubtitle>
                            <h4 style={{textAlign: "center"}}>
                                Close Window After Adding to Cart To Continue Shopping. 
                            </h4>
			        </CardSubtitle>

                    <ThumbnailsWrapper>
<<<<<<< HEAD
                    {items.map(({ node }) => {
=======
                    {products.map(({ node }) => {
>>>>>>> a9226272d10b50e95835acedcf2a532a2031de56
                        const { title, image, price } = node.frontmatter
                            return (
                                <ItemThumbnail
                                    key={node.fields.slug}
                                    link={node.fields.slug}
                                    heading={title}
                                    image={image.childImageSharp.fluid}
                                    price={price}
                                    />
                                )
                            })}
                    </ThumbnailsWrapper>


                </CardBody>         
            
        </Layout>
        )
    }
}


export default Shop

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  } 
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          price
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`