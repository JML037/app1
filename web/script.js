const formElement = document.getElementById("saveTransaction");

formElement.addEventListener("submit",  (event) =>{
    event.preventDefault();
    let transactionDescription = document.getElementById("transactionDescription").value;
    let transactionPrice = document.getElementById("transactionPrice").value;
    let transaction = {transactionDescription: transactionDescription,transactionPrice:transactionPrice};
    let transactionJson = JSON.stringify(transaction);
    //Mandar los datos al backend y guardlos ahi  
    fetch('http://localhost:3000/transactions',{
        method:'Post',
        body : transactionJson
    })
        .then(x => console.log("hola"))

})

fetch('http://localhost:3000/transactions').then(x => x.json()).then(console.log)