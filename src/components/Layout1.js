import React from 'react'
import {
    Container,
  } from 'reactstrap'
  import '../app.css'
  import '../css/main.css'
  import Cardcontent from './cardContent'

  //import Header from '../components/header'



 class Layout1 extends React.Component {
    render() {
        return (

            <Container>
                <Cardcontent />
               
            </Container>


  )
}
 }


export default Layout1