import React from 'react'
import {
    Container,
  } from 'reactstrap'
  import '../app.css'
  import '../css/main.css'
  import Cardcontent2sales from './cardContent2sales'
import '../css/gallery2.css'
  //import Header from '../components/header'



class Layout2sales extends React.Component {
    render() {
        return (
            <Container>
                <Cardcontent2sales />
               
            </Container>


    )
  }
}


export default Layout2sales