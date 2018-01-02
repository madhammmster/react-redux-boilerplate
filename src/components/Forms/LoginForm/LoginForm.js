import React from 'react';

import {Field, reduxForm} from 'redux-form';

import {Form, Button} from 'semantic-ui-react';

import {InputField, CheckboxField} from 'react-semantic-redux-form';


const LoginForm = props => {
    const { handleSubmit } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Field
                name='username'
                component={InputField}
                labelPosition='left'
                placeholder='Username'/>

            <Field
                name='password'
                component={InputField}
                type='password'
                labelPosition='left'
                placeholder='Password'/>

            <Form.Group>
                <Field
                    name='remember'
                    component={CheckboxField}
                    label='Stay sign in'
                />
            </Form.Group>
            <Form.Field
                control={Button}
                primary
                type='submit'
            >
                Login
            </Form.Field>

        </Form>
    )
}

export default reduxForm({
    form: 'loginForm'
})(LoginForm)