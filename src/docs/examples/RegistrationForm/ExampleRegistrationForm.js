import React from 'react';
import RegistrationForm from 'ps-react-momo/RegistrationForm';

export default function ExampleRegistrationForm() {
    return <RegistrationForm onSubmit={user => console.log(user)} />;
}