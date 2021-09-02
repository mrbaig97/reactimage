import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pic1 from  './images/pic1.png';
import pic2 from  './images/pic2.jpg';




function Hi() {
  return <div>
    <img src = {pic1}/>
    <img src = {pic2}/>

  </div>;
}

ReactDOM.render(<div><Hi/> <Hi/> <Hi/></div>, document.querySelector('#root'));
