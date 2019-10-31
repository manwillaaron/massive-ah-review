require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const c = require('./controller')

app.use(express.json())

///endpoints\\\\

app.get('/api/expenses', c.getExpenses)
app.post('/api/expense', c.addExpense)

massive(CONNECTION_STRING).then(databaseConnection=>{
    app.set('db', databaseConnection)
    console.log('database connected');
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is listening`))
})
