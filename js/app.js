const Modal = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}




const Transaction = {
    all: [{
  
        description: "Luz",
        amount: -50000,
        date: "23/01/2021",
    },
    {
       
        description: "WebSite",
        amount: 500000,
        date: "23/01/2021",
    },
    {
       
        description: "Internet",
        amount: -20000,
        date: "23/01/2021",
    },
    {
        
        description: "App",
        amount: 20000,
        date: "23/01/2021",
    },
    ],
    add(transaction){
        Transaction.all.push(transaction)

        App.reload()
    },
    remove(index){
        Transaction.all.splice(index, 1)

        App.reload()
    },
    incomes() {
        let income = 0
        Transaction.all.forEach((transaction) => {
            if(transaction.amount > 0){
                income = income + transaction.amount
            }
        })
        return income
    },
    expenses(){
        let expense = 0
        Transaction.all.forEach((transaction) => {
            if(transaction.amount < 0){
                expense = expense + transaction.amount
            }
        })
        return expense
    },
    total(){
        return Transaction.incomes() + Transaction.expenses()
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
        document.querySelector("#incomeDisplay").innerHTML = Utils.formarCurrency(Transaction.incomes())
        document.querySelector("#expenseDisplay").innerHTML = Utils.formarCurrency(Transaction.expenses())
        document.querySelector("#totalDisplay").innerHTML = Utils.formarCurrency(Transaction.total())
    },

    clearTransaction(){
        DOM.transactionContainer.innerHTML = ""
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

const Form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues(){
        return{
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },
    validadeField(){
        const {description, amount, date} = Form.getValues()
        if(description.trim() === "" || amount.trim() === "" || date.trim() === ""){
            throw new Error("Por favor, preencha todos os campos")
        }
    },
    submit(event){
        
        event.preventDefault()

        try{
            //verificar se os dados estão preenchidos
            Form.validadeField()
            // formatar os dados
        }catch(error){
            alert(error.message)
        }

        
      
    }  
}

const App = {
    init () {
        Transaction.all.forEach(function(transaction){
            DOM.addTransaction(transaction)
        })
        
        DOM.updateBlance()

        
    },
    reload () {
        DOM.clearTransaction()
        App.init()
        
    }
}

App.init()



