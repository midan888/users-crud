
export function validate(value, rules) {

    switch (rules.type) {
        case 'string':
            return validateString(value, rules);
    }

    return true;
}

function validateString(value, rules) {
    if (rules.required && requiredCheck(value)) {
        return false;
    }

    if (rules.maxLength && maxLengthCheck(value, rules.maxLength)) {
        return false;
    }

    if (rules.regex && regexCheck(value, rules.regex)) {
        return false;
    }

    return true;
}

function requiredCheck(value) {
    return !value || value === ''
}

function maxLengthCheck(value, maxLength) {
    return value.length > maxLength;
}

function regexCheck(value, regex) {
    const re = new RegExp(regex);
    return !re.exec(value)
}