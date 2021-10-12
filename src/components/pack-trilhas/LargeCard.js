import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import star from "../../assets/images/star.png";

class LargeCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        stars: []
    }
  }
//title,img,description,ranking,
componentDidMount(){
  this.setState({
    stars: Array(parseInt(this.props.trilha.ranking)).fill(1)
});
}
  like(){
   this.props.trilha.points+=1
   this.props.onupdateranking(this.props.trilha)
  }
    render() {
      return (

        <div className="row ">
          <div className="col-md-12 ">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div key="unique100" className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Trilha</strong>
                <h3 className="mb-0">{this.props.trilha.title}</h3>
                
                <p className="card-text mb-auto">Descricao:{this.props.trilha.description}</p>
                <p key="unique234" className="text-card">
                Valoracion:
                    {this.state.stars.map((x,index)=>
                        <img key={index} src={star} width='32' alt="starts"/>
                    )}
                    </p>
                <button className="btn btn-primary" onClick={this.like.bind(this)}>{this.props.trilha.points}<i className="bi bi-hand-thumbs-up"></i></button>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img width="300" height="450" src={this.props.trilha.imgs} className="card-img-top" alt={this.props.trilha.title}/>

              </div>
            </div>
          </div>
        </div>
      
          
      );
    }
  }

export default LargeCard