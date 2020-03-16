import React, { Children } from 'react'
import {
    Container,
  } from 'reactstrap'
  import '../app.css'
  import '../css/main.css'
  import Cardcontent from './HomeCardContent'

  //import Header from '../components/header'



 class Layout1 extends React.Component {
    render() {
        return (

            <Container>
                <main>{Children}</main>
                <Cardcontent />
               
            </Container>


  )
}
 }


export default Layout1