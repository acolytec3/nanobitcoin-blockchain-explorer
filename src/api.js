var axios = require('axios');

function getChain(){
    axios.get('http://localhost:5000/chain')
    .then(function (response){
        var chain = []
        let data = response.data;
    	for (let i = 0; i < data.chain.length; i++){
            if( data.chain[i].transactions != []){
				for (let j = 0; j < data.chain[i].transactions.length; j++){
			    	chain.push({
					'block':data.chain[i].index,
					'sender':data.chain[i].transactions[j].sender, 
					'recipient':data.chain[i].transactions[j].recipient,
					'amount':data.chain[i].transactions[j].amount,
					});
				}
			}
        }
        return console.log(chain);
    })
}
getChain();
