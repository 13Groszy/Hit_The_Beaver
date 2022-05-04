const path = require('path')
module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    }
}