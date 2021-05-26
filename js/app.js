const Modal = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const transactions = [{
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "23/01/2021",
},
{
    id: 2,
    description: "WebSite",
    amount: 500000,
    date: "23/01/2021",
},
{
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "23/01/2021",
},
{
    id: 4,
    description: "App",
    amount: 20000,
    date: "23/01/2021",
},
]


const Transaction = {
    incomes() {
        let income = 0
        transactions.forEach((transaction) => {
            if(transaction.amount > 0){
                income = income + transaction.amount
            }
        })
    },
    expenses(){
        // somar as saidas
    },
    total(){

    }
}

const DOM = {
    transactionContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index){
        
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction){
        const Cssclass = transaction.amount > 0 ? "income" : "expense"
        
        const amount =  Utils.formarCurrency(transaction.amount)

        const html = ` 
            <td class = "description">${transaction.description}</td>
            <td class="${Cssclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img src="assets/minus.svg" alt="Remover Transação"></td>
        `

        return html
    },

    updateBlance(){
        document.querySelector("#incomeDisplay").innerHTML = Transaction.incomes()
        document.querySelector("#expenseDisplay").innerHTML = Transaction.expenses()
        document.querySelector("#totalDisplay").innerHTML = Transaction.total()
    }
}

const Utils = {
    formarCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value

    }
}



transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})

DOM.updateBlance()