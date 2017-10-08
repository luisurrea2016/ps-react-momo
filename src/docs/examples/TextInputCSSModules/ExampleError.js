import React from 'react';
import TextInputCSSModules from 'ps-react-momo/TextInputCSSModules';

/** Required TextBox with error */
export default function ExampleError() {
    return <TextInputCSSModules
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => { }}
        required
        error="First name is required."
    />;
}