import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/Input';
import InputGroup from 'components/InputGroup';
import Button from 'components/Button';

const RemindPassword = props => {
    const [email, setEmail] = useState('');
    const handleSubmit = e => {
        e.preventDefault();

        if (!email) return;

        props.onSubmit({
            variables: {
                email,
            },
        });
    };

    return (
        <div className="cabinet-content__column--center">
            <form onSubmit={handleSubmit}>
                <InputGroup>
                    <Input
                        name="email"
                        type="email"
                        label="Email"
                        text="Введите используемый E-mail "
                        value={email}
                        onChange={({ target: { value } }) => setEmail(value)}
                        required
                    />
                </InputGroup>
                <Button type="submit" kind="primary" bold uppercase>
                    Выслать пароль
                </Button>
            </form>
        </div>
    );
};

export default RemindPassword;
