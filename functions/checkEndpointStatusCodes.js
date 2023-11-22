export default root => {
    const endpoints = root.paths;
    const errors = [];

    const requiredStatusCodes = {
        "post": ["201", "400", "401", "403", "404", "429"],
        "get": ["200", "400", "401", "403", "404", "429"],
        "patch": ["200", "400", "401", "403", "404", "429"],
        "put": ["200", "400", "401", "403", "404", "429"],
        "delete": ["204", "400", "401", "403", "404", "429"]
    };

    for (const path in endpoints) {
        const methods = endpoints[path];

        for (const method in methods) {
            if (requiredStatusCodes[method] && methods[method].responses) {
                const statusCodes = Object.keys(methods[method].responses);
                const missingStatusCodes = requiredStatusCodes[method].filter(code => !statusCodes.includes(code));
                
                if (missingStatusCodes.length > 0) {
                    errors.push({
                        message: `Missing status codes ${missingStatusCodes.join(', ')} for ${method.toUpperCase()} endpoint ${path}`
                    });
                }
            }
        }
    }

    return errors;
}
