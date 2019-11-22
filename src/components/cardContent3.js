import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,
    
  } from 'reactstrap'

import '../css/cardcontent.css'
import Header from './header';
import Gallery3 from './gallery3'
import '../css/gallery.css'




function Cardcontent3() {
    
    return (
        <Card className="card-bg">
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
           
            
            <CardText>
            <Gallery3 />
              
                
                </CardText>
                
        </CardBody>
        </Card>
    )
}

export default Cardcontent3