import React from 'react'
import {
    Container,
  } from 'reactstrap'
  import '../app.css'
  import '../css/main.css'
  import ShopCardContent from './ShopCardContent'
import '../css/gallery2.css'
  //import Header from '../components/header'



class Layout2sales extends React.Component {
    render() {
        return (
            <Container>
                <ShopCardContent />
               
            </Container>


    )
  }
}


export default Layout2sales