"use strict"

window.RichImage= function (params)
{
    // properties
    var defaultParams = {
      className: "rich-image"
    }

    // methods
    var run = function run (params)
    {
        var images = document.queryString('.' + params.className);
        for (var i=0; i<images.length; ++i) {
          //to do something here
        }
    }

    var validateParams = function (params)
    {
        if (typeof(params) !== 'object') {
            throw new Error('The function needs a params object');
        }
        if (typeof(params.apiServer) !== 'string') {
            throw new Error('The function needs the "apiServer" param');
        }
        if (typeof(params.className !== 'string')) {
            params.className = defaultParams.className;
        }
    }

    validateParams(params);
    run(params);
};
