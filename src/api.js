var axios = require('axios');

async function getChain(){
	try{
		var response = await axios.get('http://localhost:5000/chain');
		var chain = []
		let data = response.data;
			for (let i = 0; i < data.chain.length; i++){
				if( data.chain[i].transactions !== []){
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
			return chain;
		}
	catch{
		console.log('error');
	}
}


