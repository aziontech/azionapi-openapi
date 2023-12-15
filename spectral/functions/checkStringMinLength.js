export default property => {
    const errors = [];

    if (property.type === 'string' && !property.enum && !property.nullable && !property.readOnly && !property.format) {
        if (property.minLength === undefined) {
            errors.push({
                message: `Missing minLength for string property`
            });
        }
    }
    return errors;
}