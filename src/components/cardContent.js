import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, 
    CardHeader
    
  } from 'reactstrap'
//import Primario from './primario';
//import './primario/index.css'
//import '../app.css'
import '../css/cardcontent.css'
import '../css/header.css'
import '../css/footer.css'
import Header from './header';
import Footer from './footer';

import Button from '../components/button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnapchat } from "@fortawesome/free-brands-svg-icons"


function cardContent() {
    
    const categoria = ['Primeiro', 'Segundo', 'Terceiro'];
    const subcategorias = [
        [
            {
                name : 'Primeiro.primeiro',
                url : 'Primeiro.primeiro'
            },
            {
                name : 'Primeiro.segundo',
                url : 'Primeiro.segundo'
            }
        ],
        [
            {
                name : 'Segundo.primeiro',
                url : 'Segundo.primeiro'
            },
            {
                name : 'Segundo.segundo',
                url : 'Segundo.segundo'
            }
        ],
        [
            {
                name : 'Terceiro.primeiro',
                url : 'Terceiro.primeiro'
            },
            {
                name : 'Terceiro.segundo',
                url : 'Terceiro.segundo'
            }
        ]
    ];

    return (
        <Card className="card-bg">
            <CardHeader>
                <Header />
            </CardHeader>
            <CardTitle>
                <h1>
                    Justin Arreguin 
                </h1> 
            </CardTitle>
        <CardBody>
        
          
            <CardSubtitle style={{
                display: 'block',
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
              <Button primary prefetch href="/shop">My Shop</Button>
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

        <Footer />
        </Card>
    )
}

export default cardContent