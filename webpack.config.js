module.exports = {
    mode: "development",
    entry: "./app/app.js",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: { presets: ['env','react', 'es2015'] }
          }
        ]
    }
};