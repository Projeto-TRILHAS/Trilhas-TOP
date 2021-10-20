import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"

class Card extends React.Component {
//title,img,description,ranking,
componentDidMount(){
}
  like(){
   this.props.trilha.points+=1
   this.props.onupdateranking(this.props.trilha)
  }
    render() {
      return (
      
          <div className="card m-2" style={{width: "18rem"}}>
            <img src={this.props.trilha.imgs} className="card-img-top" alt={this.props.trilha.title}/>
            <div className="card-body">
              <h5 className="card-title">{this.props.trilha.title}</h5>
              <p className="card-text">{this.props.trilha.description}</p>
              <button className="btn btn-primary" onClick={this.like.bind(this)}>{this.props.trilha.points}<i className="bi bi-hand-thumbs-up"></i></button>
            </div>
          </div>
      
      );
    }
  }

export default Card