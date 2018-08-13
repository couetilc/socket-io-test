const express = require('express')
    , app = express()
    , http = require('http').Server(app)
    , io = require('socket.io')(http)
    , router = express.Router()
    , bodyParser = require('body-parser')
    , port = process.env.PORT || 5555;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.route('/')
    .get((req, res) => {
        res.send({msg: "hello world"});
    });

router.route('/location')
    .get((req, res) => {
        res.send({locs: ["NYC", "SF"]});
    });

app.get('/random', (req, res) => res.send({user: "random_marco"}));

app.get('/socket', (req, res) => res.sendFile(__dirname + '/socket.html'));

io.on('connection', (socket) => {
    console.log('user connected');
    //console.log(socket);
    socket.on('disconnect', () => console.log('disconnected'));
});

app.use('/', router);

http.listen(port, () => console.log("server listening on port " + port));
