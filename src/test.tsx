import * as React from "react";
import * as ReactDOM from "react-dom";

class LikeButton extends React.Component {
    number = 0;
    like = false;

    constructor(props) {
        super(props);
        this.number = props.number;
    }

    render() {
        return (
            <button
                className="dddd"
                onClick={() => {
                    this.like = !this.like;
                    this.setState({});
                }}>0
                {this.number} - {this.like ? 'like' : 'unlike'}
            </button>
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
