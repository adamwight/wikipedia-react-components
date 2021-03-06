import React, { Component } from 'react';

import './mediawiki-ui-button.css';

class Button extends Component {
	componentWillMount() {
		this.setState( { jsEnabled: false } );
	}
	componentDidMount() {
		this.setState( { jsEnabled: true } );
	}
	render() {
		var btnProps,
			props = this.props,
			disabled = false,
			modifiers = props.isPrimary ? 'mw-ui-primary' : '';

		modifiers += props.isQuiet ? 'mw-ui-quiet' : '';
		modifiers += props.className ? ' ' + props.className : '';

		if ( !this.state.jsEnabled && props.onClick && !props.href ) {
			disabled = true;
		} else {
			disabled = props.disabled;
		}
		btnProps = {
			className: 'mw-ui-button ' + modifiers,
			href: props.href,
			onClick: props.onClick,
			disabled: disabled
		};
		return btnProps.href ? <a {...btnProps}>{props.label}</a> :
			<button {...btnProps}>{props.label}</button>;
	}
}

export default Button;
