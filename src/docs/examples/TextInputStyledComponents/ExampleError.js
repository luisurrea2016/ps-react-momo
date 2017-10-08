import React from 'react';
import TextInputStyledComponents from 'ps-react-momo/TextInputStyledComponents';

/** Required TextBox with error */
export default function ExampleError() {
    return <TextInputStyledComponents
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => { }}
        required
        error="First name is required."
    />;
}