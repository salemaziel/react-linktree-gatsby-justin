import React from 'react'
import {
    CardText, CardBody,
     CardSubtitle, 
    
  } from 'reactstrap'
//import Primario from './primario';
//import './primario/index.css'
//import '../app.css'
import '../css/HomeCardContent.css'
//import '../css/header.css'
//import '../css/footer.css'
//import Header from './userphoto';
//import Footer from './footer';

import Button from './button'

import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnapchat } from "@fortawesome/free-brands-svg-icons"


class HomeCardContent extends React.Component {
   render() {
    return (
<<<<<<< HEAD:src/components/HomeCardContent.js
=======
        <>
>>>>>>> a9226272d10b50e95835acedcf2a532a2031de56:src/components/HomeCardContent.js
        <CardBody>
        
          
            <CardSubtitle style={{
                justifyContent: 'center',
                alignContent: 'center',
            }}>
                <h2>23. <br /></h2>
                <h3>
                <FontAwesomeIcon className="faicon" icon={faSnapchat} />
                <a href="https://www.snapchat.com/add/jayyrockkk" style={{
                    display: 'inline',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    textDecoration: 'none',
                    paddingLeft: '.5em',
                }}>jayyrockkk</a>
                </h3>
            </CardSubtitle>
           
            <CardText>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                }}>
              {/**<Button primary prefetch href="/gallery">Gallery display</Button>**/}
<<<<<<< HEAD:src/components/HomeCardContent.js
              <Link to="/shop" prefetch preload>
                    <Button primary className="shopBack">
                        My Shop
                    </Button>
                </Link>
=======
                
                    <Button primary>
                        <Link to="/shop" prefetch preload>
                        My Shop
                        </Link>
                    </Button>
>>>>>>> a9226272d10b50e95835acedcf2a532a2031de56:src/components/HomeCardContent.js
                
              </div>
                    {/**<div className='items'>
                        <div className='items-head'>
                            <h3>Linktree Dashboard</h3>
                            <hr/>
                        </div>
                            {categoria.map( (x, y) => {
                              return <Primario Cat={x} Sub={subcategorias[y]} key={x} />;
                                })}
                            </div>**/}
                
                
                </CardText>
  
                
        </CardBody>

<<<<<<< HEAD:src/components/HomeCardContent.js
=======
        </>
>>>>>>> a9226272d10b50e95835acedcf2a532a2031de56:src/components/HomeCardContent.js
        )
    };
}

export default HomeCardContent