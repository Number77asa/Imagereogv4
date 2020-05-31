var webpack = require('webpack');


module.exports = {
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
   devtool: "source-map",

   resolve: {
       // Add '.ts' and '.tsx' as resolvable extensions.
       extensions: [".ts", ".tsx", ".js"]

     },

  module: {

        rules: [
            {
                test: /\.js$/,/*says for any javscript file*/
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', /*esto se va encargar de usar babel loader to traspile our code*/
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'
                        ]
                    }
                },
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                }
            }
        ]
    }
    ,
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: 'popper.js'
        })
    ],
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }

};
