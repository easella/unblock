var express = require('express')
var Unblocker = require('unblocker');
var app = express();
var unblocker = new Unblocker({prefix: '/proxy/'});

// this must be one of the first app.use() calls and must not be on a subdirectory to work properly
app.use(unblocker);

app.get('/', function(req, res) {
    //...
});

// the upgrade handler allows unblocker to proxy websockets
app.listen(process.env.PORT || 8080).on('upgrade', unblocker.onUpgrade);
