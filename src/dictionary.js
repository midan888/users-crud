
const dictionary = {
    en: {
        'first_name': 'Name',
        'last_name': 'Last name',
        'second_name': 'Second name',
        'button.create_user': 'Create new user'
    }
};

export function trans(key) {
    const localisedString = dictionary.en[key];
    return localisedString ? localisedString : key;
}