export default property => {
    const errors = [];

    if (property.type === 'number' || property.type === 'integer' && !property.nullable && !property.readOnly) {
        if (property.minimum === undefined) {
            errors.push({
                message: `Missing minimum limit for numeric property`
            });
        }
    }

    return errors;
}