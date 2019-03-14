import React, { Component } from 'react';
import ReactTable from "react-table";
import './App.css';
import 'react-table/react-table.css';

var axios = require('axios')
/*
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
*/
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      columns: [],
    };
  }

  
  componentDidMount(){

    const data2 = {"chain":[{"index":1,"previous_hash":1,"proof":100,"timestamp":1552397414.8457828,"transactions":[]},{"index":2,"previous_hash":"dd1f146001496034880422bed8764f9a6f0bb6e904609d72a37751854cbc4ca0","proof":35293,"timestamp":1552398174.6053038,"transactions":[{"amount":"3","recipient":"2","sender":"1"},{"amount":1,"recipient":"18d2267430be4a7fa95db37348ad2f2a","sender":"0"}]}],"length":2};
    const columns = [{Header:"Block",accessor:'block'},{Header:'Sender',accessor: 'sender'},{Header: 'Recipient',accessor: 'recipient'},{Header:'Amount',accessor:'amount'}];
    try{
  //    var chain = getChain();
			
      this.setState({data2, columns:columns, isLoading:false})  
    }
  	catch{
      (error => this.setState({isLoading: false}));
    }
  }
  
  render() {

	const { isLoading, data, columns } = this.state;
    return (
	<React.Fragment>
	{!isLoading ?<div>
		<h2>Nanobit Blockchain Explorer</h2>
           <ReactTable
             data = {data}
             columns = {columns}
             defaultPageSize = {3}
             pageSizeOptions = {[3,6]}
           /> </div>
	: <h3>Loading...</h3>}
	</React.Fragment>
    );
  }
}

export default App;
