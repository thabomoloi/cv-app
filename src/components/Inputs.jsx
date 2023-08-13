import { useState } from "react";

export default function CustomInput(props) {
	const [value, setValue] = useState("");

	const handleInput = (e) => {
		setValue(e.target.value);
	};

	return <input type={props.type} value={value} onChange={handleInput} />;
}
