import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({ label, name, value, placeholder, type, onChange, subscript }) => {
	return (
		<div>
            <Fragment>
			<label htmlFor="{name}">
    <span className="symbol"><var>{label}{subscript ? <sub>{subscript}</sub> : null}</var></span>
            </label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
            </Fragment>
		</div>
	);
};

TextInputGroup.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    subscript: PropTypes.string,
};

TextInputGroup.defaultProps = {
    type: 'text',
    subscript: null
};
export default TextInputGroup;
