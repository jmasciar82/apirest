const MODO_PERSISTENCIA = 'MONGODB' // FILE - MONGODB 
const PORT = process.env.PORT || 8080
//const STRGCNX = 'mongodb://localhost:27017'
const STRGCNX = 'mongodb+srv://Rami2010:Rami2010@cluster0.o4qsrgt.mongodb.net/?retryWrites=true&w=majority'
const BASE = 'ecommerce'


module.exports = {MODO_PERSISTENCIA, PORT, STRGCNX, BASE}
