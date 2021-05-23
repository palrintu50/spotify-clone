import React, { Component } from 'react'
import "../App.css"
import { Card } from 'antd';
const { Meta } = Card;

export class Album extends Component {
    constructor(props) {
		super(props)
    }
    clickHandler = (e, props) => {
        {this.props.deleteFunc()}
        e.preventDefault()
    }
    render() {
        return (
            <div className = "card">
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://pbs.twimg.com/media/ENHL1IpUYAI57ES.jpg" width="300" height="380" />}
                >
                    <Meta title= {this.props.album_title}/>
                    <h5>{this.props.artist}</h5>
                    <h5>{this.props.album_cover}</h5>
                </Card>
                <button onClick={this.clickHandler}>Delete</button>
            </div>
        )
    }
}

export default Album