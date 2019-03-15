import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import './App.css';

var axios = require('axios')

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

    const columns = [{Header:"Block",accessor:'block'},{Header:'Sender',accessor: 'sender'},{Header: 'Recipient',accessor: 'recipient'},{Header:'Amount',accessor:'amount'}];
			axios.get('/chain')
			.then(response => {
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
					this.setState({data:chain, columns:columns, isLoading:false}) 
				})
				.catch(error => {
					this.setState({isLoading:true})
				})
				.finally(response => {
			//		this.setState({data:data2.chain[1].transactions, columns:columns, isLoading:false})
				})	
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
             //defaultPageSize = {3}
             pageSizeOptions = {[3,6]}
           /> </div>
	: <h3>Loading...</h3>}
	</React.Fragment>
    );
  }
}

export default App;
