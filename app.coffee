
express = require 'express'

app = express()

app.set 'views', __dirname + '/views'
app.set 'view engine', 'jade'
app.use express.static __dirname + '/public'

app.get '/', (req, res) ->
	res.render 'index', title:"Test"

app.listen 3000
console.log 'Listening on port 3000'
