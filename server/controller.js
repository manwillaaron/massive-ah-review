module.exports={
    getExpenses(req,res){
        const db = req.app.get('db')
        db.get_expenses()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log({err});   
        })
    },
    addExpense(req,res){
        const db = req.app.get('db')
        db.add_expense([amount, store, day, description])
        .then(result => res.status(200).send(result))
        .catch(err=> console.log({err})
        )
    }
}