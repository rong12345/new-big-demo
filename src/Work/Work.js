import React, { PropTypes } from 'react'
import Img1 from '../images/1.jpg';
import Img2 from '../images/2.jpg';
import Img3 from '../images/3.jpg';
import Img4 from '../images/4.jpeg';
import Img5 from '../images/5.jpeg';
import Img6 from '../images/6.jpg';

class Work extends React.Component {
  render () {
    return(
      <div className="work-container">


        <div className="work-card">
              <a href="https://rong12345.github.io/"><img src={Img1} /></a>
                  <div className="work-text">
                    <h3>作品一</h3>
                    <p>2016.5.6</p>
                  </div>
                </div>

      <div className="work-card">
            <a href="http://www.baidu.com/"><img src={Img2} /></a>
                <div className="work-text">
                  <h3>作品二</h3>
                  <p>2015.10.6</p>
                </div>
              </div>

    <div className="work-card">
          <a href="http://www.baidu.com/"><img src={Img3} /></a>
              <div className="work-text">
                <h3>作品三</h3>
                <p>2016.1.5</p>
              </div>
    </div>

  <div className="work-card">
        <a href="http://www.baidu.com/"><img src={Img4} /></a>
          <div className="work-text">
              <h3>作品四</h3>
              <p>2016.4.6</p>
        </div>
  </div>
  <div className="work-card">
        <a href="http://www.baidu.com/"><img src={Img5} /></a>
          <div className="work-text">
              <h3>作品五</h3>
              <p>2016.4.6</p>
        </div>
  </div>
  <div className="work-card">
        <a href="http://www.baidu.com/"><img src={Img6} /></a>
          <div className="work-text">
              <h3>作品六</h3>
              <p>2016.4.6</p>
        </div>
  </div>
</div>
    )
  }
}

export default Work;
