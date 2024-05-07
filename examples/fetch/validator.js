'use strict';

function validateRegistrationData(formData) {
    const validationRules = {
        name: validateName,
        email: validateEmail,
        username: validateUsername,
        password: validatePassword,
        confirmPassword: validateConfirmPassword,
        phone: validatePhone
    };

    let errors = validateData(validationRules, formData);

    if (formData.password !== formData.confirmPassword) {
        errors = errors || {};
        errors.confirmPassword = 'Should be equal to password';
    }

    const birthday = new Date(formData.year, formData.month - 1, formData.day);

    if (isNaN(birthday.getTime()) || birthday > new Date()) {
        errors = errors || {};
        errors.birthday = 'Invalid or future date';
    }

    return errors;
}

function validateData(validationRules, data) {
    const errors = {};

    for (const field in data) {
        if (data.hasOwnProperty(field)) {
            const value = data[field];
            const validator = validationRules[field];

            if (validator) {
                const fieldError = validator(value);
                if (fieldError) {
                    errors[field] = fieldError;
                }
            }
        }
    }

    return errors;
}

function validateName(value) {
    if (!value) {
        return 'Required';
    }

    if (!/^[a-zа-яiъї]+$/i.test(value)) {
        return 'Should contain only letters latin/cyrillic';
    }
}

function validateEmail(value) {
    if (!value) {
        return 'Required';
    }

    if (!/^([\w\-_+]+(?:\.[\w\-_+]+)*)@((?:[a-z0-9\-]+\.)*[a-z0-9][a-z0-9\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value)) {
        return 'Wrong email format';
    }
}

function validateUsername(value) {
    if (!value) {
        return 'Required';
    }

    if (!/^[a-zа-яiъї]+$/i.test(value)) {
        return 'Should contain only letters latin/cyrillic';
    }
}

function validatePassword(value) {
    if (!value) {
        return 'Required';
    }

    if (value.length < 8) {
        return 'Should contain at least 8 characters';
    }

    if (!/\d/.test(value)) {
        return 'Should contain at least one digit';
    }

    if (!/[^\da-z]/i.test(value)) {
        return 'Should contain at least one special character';
    }

    if (!/[A-Z]/.test(value)) {
        return 'Should contain at least one uppercase letter';
    }
}

function validateConfirmPassword(value) {
    if (!value) {
        return 'Required';
    }
}

function validatePhone(value) {
    if (!/^[0-9+()\- ]*$/.test(value)) {
        return 'Wrong number';
    }
}
