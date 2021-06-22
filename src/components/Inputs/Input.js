import React from "react";
import "./input.css";

const Input = ({
	error,
	disabled,
	helperText,
	value,
	size,
	fullWidth,
	multiline,
	row,
	startIcon,
	endIcon,
}) => {
	const placeholder = () => {
		if (startIcon) {
			return " Placeholder";
		} else if (endIcon) {
			return "Placeholder  ";
		} else {
			return "Placeholder";
		}
	};
	return (
		<div>
			<div
				className={`default-input ${error && "error"} ${
					disabled && "disabled"
				} ${size} ${fullWidth && "fullWidth"}`}
			>
				<div>
					<label>Label</label>
				</div>
				{multiline ? (
					<textarea rows={row} placeholder={placeholder()}></textarea>
				) : disabled ? (
					<input
						type="text"
						placeholder={placeholder()}
						disabled
						value={value}
					></input>
				) : (
					<input
						type="text"
						placeholder={placeholder()}
						value={value}
					></input>
				)}

				<div>
					<span>{helperText}</span>
				</div>
			</div>
		</div>
	);
};

export default Input;
