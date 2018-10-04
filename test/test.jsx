'use strict';

class LikeButton extends React.Component {
    state = {
        liked: false
    };

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.state.liked);
        return (
            <button onClick={() => {
                let liked = this.state.liked;
                this.setState({
                    liked: !liked
                });
            }}>
                {this.state.liked ? 'like' : 'unlike'}
            </button>
        );
    }
}

ReactDOM.render(<LikeButton />, document.getElementById('wrap'));
