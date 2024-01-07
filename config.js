const dotenv = require('dotenv');


dotenv.config()

const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MEM' 
const PORT = process.env.PORT || 8080
//const STRGCNX = 'mongodb://localhost:27017'
const STRGCNX = process.env.STRGCNX || 'mongodb://127.0.0.1'
const BASE = process.env.BASE || 'test'


module.exports = {MODO_PERSISTENCIA, PORT, STRGCNX, BASE}
