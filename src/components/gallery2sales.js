import React from 'react'
import {
	CardTitle, 
	CardSubtitle,  
  } from 'reactstrap'
import '../css/gallery2sales.css'
import Productpic from './productpic'

  const Gallery2sales = () => {
    return (
        <div style={{
            padding: '2rem 4rem 3rem 4rem',
        }}>
            {/**<div style={{
                margin: '4rem 2rem',
                padding: '2rem 4rem',
			}}>**/}
			<CardTitle>
                <h2 style={{
                    textAlign: "center",
                    }}>
                Welcome to My Shop. <br />
				Coming Soon!
                </h2>
			</CardTitle>
			<CardSubtitle>
                <h4 style={{
                        textAlign: "center",
                    }}>
                Close Window After Adding to Cart To Continue Shopping. 
                </h4>
			</CardSubtitle>
                {/**<p>
                    <span class="image left"><img src={Pic5} alt="" /></span>
                    FEATURED Productpic. Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus
                </p>

				<p>
                    <span class="image right"><img src={Pic5 }alt="" /></span>
                    FEATURED Productpic. Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus
				</p>**/}
				{/**</div>**/}            
						<hr />
							{/**<span class="image fit"><img src="images/banner.jpg" alt="" /></span>**/}	
                            <div class="box alt">
								<div class="row gtr-50 gtr-uniform">
									<div class="col-4">
										<Productpic />
									</div>
									
									<div class="col-4">
										<Productpic />
									</div>

									<div class="col-4">
										<Productpic />
									</div>

									<div class="col-4">
										<Productpic />
									</div>

									<div class="col-4">
										<Productpic />
									</div>

									<div class="col-4">
										<Productpic /> 
									</div>

									<div class="col-4">
										<Productpic />
									</div>

									<div class="col-4">
										<Productpic />
									</div>

									<div class="col-4">
										<Productpic />
									</div>
								</div>
							</div>
							{/**<h5> Text Title</h5>**/}
							{/**<p><span class="image left"><img src={Pic5} alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.</p>
							<p><span class="image right"><img src={Pic5 }alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. </p>**/}        
        </div>
    )
}
    
export default Gallery2sales