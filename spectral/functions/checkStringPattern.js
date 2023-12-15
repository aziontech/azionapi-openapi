export default property => {
    const errors = [];

    if (property.type === 'string' && !property.enum && !property.readOnly && !property.format) {
        if (property.pattern === undefined) {
            errors.push({
                message: `Missing pattern for string property`
            });
        }
    }

    return errors;
}