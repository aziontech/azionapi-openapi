export default property => {
    const errors = [];

    if (property.type === 'string' && !property.enum && !property.readOnly && !property.format) {
        if (property.maxLength === undefined) {
            errors.push({
                message: `Missing maxLength for string property`
            });
        }
    }

    return errors;
}