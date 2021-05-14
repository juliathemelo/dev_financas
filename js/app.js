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
        //somar as entradas
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
            <td class="${Cssclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img src="assets/minus.svg" alt="Remover Transação"></td>
        `

        return html
    }
}

const Utils = {
    formarCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""
        

    }
}



transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})