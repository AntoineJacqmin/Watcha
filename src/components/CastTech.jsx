import React from 'react';
import axios from 'axios'

class CastTech extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            crew: []
        }
    }
    componentDidMount() {
        axios.get("https://api.themoviedb.org/3/movie/" + this.props.idFilm + "/credits?api_key=a8a3380a564299f359c18e52aaa5bc79").then(res => {
         // console.log(res.data.cast);
          this.setState({
            crew: res.data.crew
          });
        });
    }
    render(){
        return(    
         this.state.crew.filter((member,i)=>{
             return i<5;
         }).map((casting) => {
              return <li>{casting.job}</li>
            }
            )
        )}
    }



export default CastTech;
