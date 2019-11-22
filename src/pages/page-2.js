import React from 'react';
import '../app.css'
import Layout1 from '../components/Layout1'
import Layout2 from '../components/Layout2'
//import Layout3 from '../components/Layout3'
import Layout4 from '../components/Layout4'

import Circulardropdown from '../components/circulardropdown'

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,
    
  } from 'reactstrap'

import '../css/cardcontent.css'
import '../css/main.css'
import Layout2sales from '../components/Layout2sales';

const Index = () => (
        <div className='Wrapper'>
           <Card className="card-bg">
                <CardTitle>Title</CardTitle>
                <CardBody>
                    <Circulardropdown />
                    <CardText>Text text text et etc etc</CardText>
                </CardBody>
           </Card>
        </div>
)

export default Index
