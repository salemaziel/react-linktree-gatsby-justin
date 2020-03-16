import React from 'react'
import {
    CardBody,
    CardTitle, CardSubtitle,  
    
  } from 'reactstrap'

import '../css/HomeCardContent.css'
//import Header from './header';

//import '../css/gallery2.css'
//import Gallery2sales from './gallery2sales';
//import Footer from './footer'




//function Cardcontent2sales() {
class ShopCardContent extends React.Component {
    render(){
            const { data } = this.props
            const siteTitle = data.site.siteMetadata.title
            const items = data.allMarkdownRemark.edges
        return (
            <>
                <CardTitle>
                    <h2>
                        Welcome to My Shop. 
                    <br />
				        Coming Soon! 
                    </h2> 
                </CardTitle>

                <CardBody>
        
                    <CardSubtitle>
                            <h4 style={{
                                textAlign: "center",
                            }}>
                                Close Window After Adding to Cart To Continue Shopping. 
                            </h4>
			        </CardSubtitle>
           
            
          
                    {/*<ThumbnailsWrapper>
<<<<<<< HEAD
                        {s.map(({ node }) => {
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
                        </ThumbnailsWrapper>*/}
              
                
                
                
                </CardBody>
            </>
        )
    }
}

export default ShopCardContent