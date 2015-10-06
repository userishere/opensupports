import React              from 'react/addons';
import classNames         from 'classnames';
import {History}       from 'react-router';

import callback           from 'utils/callback';

var Button = React.createClass({

    mixins: [History],

    propTypes: {
        children: React.PropTypes.node,
        type: React.PropTypes.oneOf([
            'primary',
            'clean',
            'link'
        ]),
        route: React.PropTypes.shape({
            to: React.PropTypes. string.isRequired,
            params: React.PropTypes.object,
            query: React.PropTypes.query
        })
    },

    getDefaultProps() {
        return {
            type: 'primary'
        };
    },

    render() {
        return (
            <button {...this.props} onClick={callback(this.handleClick, this.props.onClick)} className={this.getClass()}>
                {this.props.children}
            </button>
        );
    },

    getClass() {
        var classes = {
            'button': true
        };

        classes['button-' + this.props.type] = (this.props.type);
        classes[this.props.className] = (this.props.className);

        return classNames(classes);
    },

    handleClick() {
        if (this.props.route) {
            this.history.pushState(null, this.props.route.to, this.props.route.query);
        }
    }
});

export default Button;