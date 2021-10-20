import React from 'react';
import './Item.css';
import star from "../../assets/images/star.png";

class Item extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            imgs: '',
            points: 1,
            ranking: 1,
            stars: []
        }

        this.onremove = this.onremove.bind(this);
        this.onChangeRanking = this.onChangeRanking.bind(this);
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            imgs: this.props.imgs,
            points: parseInt(this.props.points),
            ranking: parseInt(this.props.ranking),
            stars: Array(parseInt(this.props.ranking)).fill(1)
        });
    }

    onremove(e){
        console.log(this.props.id);
        this.props.onremove(this.props.id);
    }

    onChangeRanking(e){
        const ranking = parseInt(e.target.value)
        this.setState({
            ranking: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(1)
        });

        this.props.onupdateranking({id: this.state.id, title: this.state.title, imgs: this.state.imgs,points:this.state.points, ranking: ranking});
    }

    render(){
        return(
            <div className="item">
                <div className="image"><img src={this.state.imgs} width="100%" alt={this.state.title} /></div>
                <div className="title">{this.state.title}</div>
                <div className="ranking">
                    <p className="text-card">
                    {this.state.stars.map((x ,index)=>
                        <img key={index} src={star} width='32' alt="starts"/>
                    )}
                    </p>
                    <p className="text-card">Qualificação: 
                    <select className="text-card" value={this.state.ranking} onChange={this.onChangeRanking}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select></p>
                </div>
                <div className="actions">
                    <button onClick={this.onremove}>Delete</button>
                </div>
            </div>
        );
    }

}

export default Item;