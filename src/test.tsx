import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

class LikeButton extends React.Component {
    number = 0;
    like = false;

    constructor(props) {
        super(props);
        this.number = props.number;
    }

    render() {
        const Button = styled.button`
            background-color: red;
        `;
        return (
            <Button
                onClick={() => {
                    this.like = !this.like;
                    this.setState({});
                }}>0
                {this.number} - {this.like ? 'like' : 'unlike'}
            </Button>
        );
    }
}

class LikeButtonList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ul>{ [1, 2, 3].map(n => <li><LikeButton/></li>) }</ul>;
    }
}

ReactDOM.render(<LikeButtonList/>, document.getElementById('main'));
