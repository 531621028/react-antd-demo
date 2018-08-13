import React, { Component } from 'react';
import { Button } from 'antd';

class Me extends Component {
    constructor(props){
        super(props)
        this.state = {  Val :10  }
        this.handleClick = this.handleClick.bind( this );
    }

    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');

        this.setState({
            Val: 100
        });
    }

    render() {
        return (
            <div style={{   width:800,  height:400, backgroundColor:"#FF0000"  }} >
                <span> myValue { this.state.Val } aaa</span>
                <Button onClick={ this.handleClick } >更新自己 </Button>

            </div>
        );
    }
}
export default Me;