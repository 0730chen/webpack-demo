console.log('解析shit')
const {getOptions} = require('loader-utils');
const validateOptions = require('schema-utils');

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

    let result = JSON.parse(source)

    // return `export default ${JSON.stringify(source)}`;
    return result
}