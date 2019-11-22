import React from 'react'
//import {} from 'reactstrap';
import '../css/gallery.css'
import Green from '../assets/images/green.jpeg'
import Blueice from '../assets/images/blueice.jpeg'
import Bluemtn from '../assets/images/bluemnt.jpeg'
import Pink from '../assets/images/pink.jpeg'
import Sky from '../assets/images/sky.jpeg'


  const Gallery3 = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            
        }}>
            <div class = "gallery">
                <div class="clipped-border">
                    <img src={Green} id="clipped" alt="" />
                </div>
                <div class="clipped-border">
                    <img src={Blueice} id="clipped" alt=""/>
                </div>
                <div class="clipped-border">
                    <img src={Bluemtn} id="clipped" alt=""/>
                </div>
                <div class="clipped-border">
                    <img src={Pink} id="clipped" alt=""/>
                </div>
                <div class="clipped-border">
                    <img src={Sky} id="clipped" alt=""/>
                </div>
                <div class = "shadow">
                </div>
            </div>
        </div>

    );
  };
  
  export default Gallery3