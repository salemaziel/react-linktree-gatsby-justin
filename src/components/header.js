import React from 'react'
import Profilepic from '../assets/images/profilepic.jpg'
import '../css/header.css'
import Helmet from 'react-helmet'

class Header extends React.Component {
    render() {

        return (
        <>
            <Helmet htmlAttributes={{ lang: 'en' }}>
                <title>Justin Arreguin</title>
                <meta name="description" content="Justin Arreguin" />
                <meta property="og:site_name" content="Justin Arreguin" />
                <meta property="og:title" content="Justin Arreguin" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="" />
                <meta property="og:description" content="Personal Profile for Justin Arreguin" />
                <meta property="og:url" content="" />
                <meta property="twitter:card" content="summary_large_image" />
                
                <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
                <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="ZjVkN2M3YzEtOGU0Yy00ZTUzLWFiZGQtNTNkZjY3NGM2YThkNjM3MDg5MjIyODA1Nzg2OTk5"></script>
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
            </Helmet>
            <div className="userphoto">
                <a href="#">
                <img className="photo" src={Profilepic} alt=""></img></a>
                <h1 className=""> @justinarreguin</h1>
            </div>
        </>
        )

    }
}

export default Header