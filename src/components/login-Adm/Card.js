import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Card extends React.Component {
//title,img,description,ranking,
    render() {
      return (
      
          <div className="card" style={{width: "18rem"}}>
            <img src={this.props.img} className="card-img-top" alt={this.props.title}/>
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
              <a href="/" className="btn btn-primary">Like</a>
            </div>
          </div>
      
      );
    }
  }

export default Card