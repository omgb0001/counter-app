import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class Counter extends Component {
    state = { 
        count: 20,
        // imageUrl:'https://picsum.photos/30'
     } ;
    render() { 
        return (
        <div>
        {/* <img src={this.state.imageUrl} alt=""/> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* <button className="btn btn-secondary btn-sm " >Inrement</button> */}
        <Button variant="secondary btn-sm">Inrement</Button>
        </div>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ?'Zero':count;

    }

    getBadgeClasses(){
        const {count}=this.state;
        let classes="m-2 badge badge-";
        classes +=(count===0?"warning":"primary");
        return classes;
    }
}
 
export default Counter;