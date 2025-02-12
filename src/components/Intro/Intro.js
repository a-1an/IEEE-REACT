import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './Intro.css'
import axios from 'axios';
import Loader from '../PreLoader/Preloader';

class Intro extends Component{
  state ={
    announcements: [],
    error: false,
    // hero: []
  }
  componentDidMount() {
    M.Carousel.init(this.Carousel, {
      fullWidth: true,
      indicators: true
    });
    M.Slider.init(this.Slider, {});
    axios.get('/notifications').then(data => {
      this.setState(() => ({ announcements: data.data }));
      this.setState(() => ({ error: false}))
    }).catch(() => {  
      this.setState(() => ({ error: true}))
    })
    // axios.get('/hero').then(data =>{
    //   this.setState(() => ({hero: data.data}))
    //   this.setState(() => ({ error: false}))
    // }).catch(() => {  
    //   this.setState(() => ({ error: true}))
    // })
  }
  render(){
    if (!this.state.announcements){
      return <Loader/>
    }
  else{
    let notifications = this.state.announcements.map((item, i) => {
      return <blockquote style={{"borderLeft":"5px solid #01579b", fontWeight: "bold"}} key={i}>{item.content} <a className="link" rel="noopener noreferrer" target='_blank' href={`https://${item.link}`}>Link »</a></blockquote>
    });
    
    return (
      <div style={{height: "100vh"}}>
        <div ref={Slider => {this.Slider = Slider;}} className="slider fullscreen">
        <ul className="slides">
        <li>
            <img src={`${axios.defaults.baseURL}/images/hero/mecconf.JPG`} alt="Trial"/> 
            <div className="caption left-align">
              <h3>MEC.Conf</h3>
              <h5 className="light grey-text text-lighten-3">The 1<sup>st</sup>  edition of MEC's developer conference, MEC.conf</h5>
            </div>
          </li> 
        <li>
            <img src={`${axios.defaults.baseURL}/images/hero/mec-aerial.jpg`} alt="Trial"/> 
            <div className="caption right-align">
              <h3>Govt. Model Engineering College</h3>
              {/* <h5 className="light grey-text text-lighten-3"></h5> */}
            </div>
          </li>

          <li>
            <img src={`${axios.defaults.baseURL}/images/hero/magic.jpg`} alt="Trial"/> 
            <div className="caption left-align">
              <h3>M.A.G.I.C</h3>
              <h5 className="light grey-text text-lighten-3">The 1<sup>st</sup> edition of MEC Annual Gathering of IEEE Community</h5>
            </div>
          </li>
          <li>
            <img src={`${axios.defaults.baseURL}/images/hero/empneo.jpg`} alt="Trial"/> 
            <div className="caption right-align">
              <h3>Empneo 2.0</h3>
              <h5 className="light grey-text text-lighten-3">The 2<sup>nd</sup> edition IEEE MEC SB's annual flagship event Empneo.</h5>
            </div>
          </li>
        </ul>
        <div style={{ marginTop: "10em", zIndex: "2"}} className="constant-wrapper row">
            <div className="col s12 m4 l4">
              <div className="partial card hoverable" >
                <div className="card-content white-text" style={{"borderRadius":"20px" }}>
                  <span style={{"fontWeight": "bold"}} className="card-title center-align">Announcements</span>
                  <div className="divider"></div>
                  {notifications}
                </div>
              </div>
            </div>
          <div className="col m6 hide-on-small-only"  ></div>
        </div>
      </div>
    </div>
    );
  }
}
}

export default Intro;
