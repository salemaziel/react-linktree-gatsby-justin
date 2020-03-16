import React from 'react'
import Profilepic from '../assets/images/profilepic.jpg'
import '../css/profilepic.css'
import { Link } from 'gatsby'

class ProfilePic extends React.Component {
    render() {

        return (
        <>
            <div className="userphoto">
                <Link preload prefetch to="/">
                <img className="photo" src={Profilepic} alt=""></img>
                <h1 className="profileName">
                        Justin Arreguin
                </h1> 
                </Link>
                <h2 className="userphoto"> @justinarreguin</h2>
                
                    
                
            </div>
        </>
        )

    }
}

export default ProfilePic