import React from 'react';
import photo from '../../2.jpg';

export default class Avatar extends React.Component{
    render(){
      return(
        <div>
          <img src={photo} />
        </div>
      )
    }
  }