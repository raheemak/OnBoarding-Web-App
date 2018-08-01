const path = require ('path');

//entry point 
//where to output information 

//a way to expose something (object) to another file
module.exports= {
    entry: "./src/app.js",
    output: {
        path: path.join (__dirname, 'prod'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader:'babel-loader',
            test:/\.js$/, //this will check if files end in js
            exclude: /node_modules/
        },{
            test: /\.s?css$/, //allows you to check for scss and css (s is optional)
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]//use this instead of loader because use allows you to declare array of loaders
        }]
    },
    devtool: 'cheap-module-eval-source=map',
    devServer: {
        contentBase: path.join (__dirname, 'prod') //specify where public folder is located so server knows where to look 
    }
};
