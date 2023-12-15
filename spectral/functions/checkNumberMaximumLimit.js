export default property => {
    const errors = [];

    if ((property.type === 'number' || property.type === 'integer') && !property.nullable && !property.readOnly && !property.enum) {
        if (property.maximum === undefined) {
            errors.push({
                message: `Missing maximum limit for numeric property`
            });
        }
    }

    return errors;
}