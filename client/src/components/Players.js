import React from 'react';
import axios from 'axios';

export default function Players(props) {
     console.log(props);
  
    return (
      <div>
        <h2>
          {props.user.name} 
          <br></br>
          {props.user.country}
        </h2>
        <p>{props.user.searches}</p>
      </div>
    );
  }
  

