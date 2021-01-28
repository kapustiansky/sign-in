import React from 'react';
import { Switch } from 'react-router-dom';

const FormErrors = ({ formErrors }) => (
	<>
		{Object.keys(formErrors).map((fieldName, i) => {
			if (formErrors[fieldName].length > 0) {
				return <Switch key={i}>{formErrors[fieldName]}</Switch>;
			} else {
				return '';
			}
		})}
	</>
);

export default FormErrors;
