import React,{component} from 'react'
class CC extends React.Component {

    constructor(){

        super();
        this.state={

            'player': 'Kohli'
        }
    }

    changePlayer=()=>{
        this.setState({player: 'Ronaldo'})
    }

    render() { 
        return <div> 
            <h1>Hello World using class Component  {this.state.player}</h1>
        
            <button onClick={this.changePlayer}>Change Player</button>

        </div>
    }
}
export default CC; 