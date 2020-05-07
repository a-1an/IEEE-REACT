import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import "../css/gallery.css";
import Fade from 'react-reveal/Fade';

const Gallery = () => {

	useEffect(()=>{
		var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);
	})

	return (
		<div className='gallery' id="gallery">
			<div className="container center">
				<h3 className='light-blue-text text-darken-3 center-align' id="bottom_margin">Gallery</h3>
				<div className="row">

					<div className="col s12 m4" id="bottom_margin">
					<Fade left>
						<img style={{ 'backgroundSize':'cover' , 'height':'35vh', 'margin':'auto'}} src={require("../assets/1.jpg")} alt="" className="materialboxed responsive-img mobile_space"  id="curve_border"/>
					</Fade>
					</div>


					<div className="col s12 m4" id="bottom_margin">
					<Fade top>
						<img style={{  'backgroundSize':'cover' , 'height':'35vh', 'margin':'auto'}} src={require("../assets/8.jpg")} alt="" className="materialboxed responsive-img mobile_space"  id="curve_border"/>
					</Fade>
					</div>


					<div className="col s12 m4">
					<Fade right>
						<img style={{ 'backgroundSize':'cover' , 'height':'35vh', 'margin':'auto'}} src={require("../assets/7.jpg")} alt="" className="materialboxed responsive-img mobile_space"  id="curve_border"/>
					</Fade>
					</div>

				</div>
				<div className="row">
					<div className="col s12 m4" id="bottom_margin">
					<Fade left>
						<img style={{ 'backgroundSize':'cover' , 'height':'35vh', 'margin':'auto' }} src={require("../assets/6.jpg")} alt="" className="materialboxed responsive-img hidepic"  id="curve_border"/>
					</Fade>
					</div>
					<div className="col s12 m4" id="bottom_margin">
					<Fade bottom>
						<img style={{ 'backgroundSize':'cover' , 'height':'35vh', 'margin':'auto'}} src={require("../assets/5.jpg")} alt="" className="materialboxed responsive-img mobile_space hidepic"  id="curve_border"/>
          </Fade>
					</div>
					<div className="col s12 m4" id="bottom_margin">
					<Fade right>
						<img style={{ 'backgroundSize':'cover' , 'height':'35vh', 'margin':'auto'}} src={require("../assets/2.jpg")} alt="" className="materialboxed responsive-img mobile_space hidepic"  id="curve_border"/>
          </Fade>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Gallery
