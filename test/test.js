'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LikeButton = function (_React$Component) {
    _inherits(LikeButton, _React$Component);

    function LikeButton(props) {
        _classCallCheck(this, LikeButton);

        var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

        _this.number = 0;
        _this.like = false;

        _this.number = props.number;
        return _this;
    }

    _createClass(LikeButton, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'button',
                {
                    className: 'dddd',
                    onClick: function onClick() {
                        _this2.like = !_this2.like;
                        _this2.setState({});
                    } },
                this.number,
                ' - ',
                this.like ? 'like' : 'unlike'
            );
        }
    }]);

    return LikeButton;
}(React.Component);

var LikeButtonList = function (_React$Component2) {
    _inherits(LikeButtonList, _React$Component2);

    function LikeButtonList(props) {
        _classCallCheck(this, LikeButtonList);

        return _possibleConstructorReturn(this, (LikeButtonList.__proto__ || Object.getPrototypeOf(LikeButtonList)).call(this, props));
    }

    _createClass(LikeButtonList, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'ul',
                null,
                [1, 2, 3].map(function (n) {
                    return React.createElement(
                        'li',
                        null,
                        React.createElement(LikeButton, { number: n })
                    );
                })
            );
        }
    }]);

    return LikeButtonList;
}(React.Component);

ReactDOM.render(React.createElement(LikeButtonList, null), document.getElementById('wrap'));