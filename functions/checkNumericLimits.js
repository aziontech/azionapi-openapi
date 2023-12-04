export default root => {
    const schemas = root.components.schemas;
    const errors = [];

    for (const schema in schemas) {
        const properties = schemas[schema].properties;

        for (const property in properties) {
            if (properties[property].type === 'number' || properties[property].type === 'integer') {
                if (properties[property].minimum === undefined || properties[property].maximum === undefined) {
                    errors.push({
                        message: `Missing minimum or maximum limit for numeric property ${property} in schema ${schema}`
                    });
                }
            }
        }
    }

    return errors;
}