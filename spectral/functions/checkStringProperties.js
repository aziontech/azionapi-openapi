export default root => {
    const schemas = root.components.schemas;
    const errors = [];

    for (const schema in schemas) {
        const properties = schemas[schema].properties;

        for (const property in properties) {
            if (properties[property].type === 'string') {
                if (properties[property].minLength === undefined) {
                    errors.push({
                        message: `Missing minLength for string property ${property} in schema ${schema}`
                    });
                }
                if (properties[property].maxLength === undefined) {
                    errors.push({
                        message: `Missing maxLength for string property ${property} in schema ${schema}`
                    });
                }
                if (properties[property].pattern === undefined) {
                    errors.push({
                        message: `Missing pattern for string property ${property} in schema ${schema}`
                    });
                }
            }
        }
    }

    return errors;
}