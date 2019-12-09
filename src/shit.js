
const {getOptions} = require('loader-utils');
const validateOptions = require('schema-utils');
const fs = require('fs')

const schema = {
    type: 'object',
    properties: {
        test: {
            type: 'string'
        }
    }
};

module.exports =  function (source) {
    const options = getOptions(this);

    validateOptions(schema, options, 'Example Loader');


    return `export default ${JSON.stringify(source)}`;
    // return result
}