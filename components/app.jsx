import React from 'react';
import ReactDOM from 'react-dom'

import ChangeCurrency from './change_currency.jsx';
import List from './list.jsx';
import CurrencyView from './currency_view.jsx';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class App extends React.Component {

    state = {
        currency: [],
        defValue: '',
        defName: "EUR",
        name: '',
        amountVal: '',
        amount: '',
        list: [],

    }

    handleSelect = (event) => {
        event.preventDefault()
        this.setState({
            defValue: Number(event.target.value[0]),
            defName: event.target.value[1],
        }) 
    }

    handleNameChange = (event) => {
        event.preventDefault()
        this.setState({
            name: event.target.value
        })
    }
      
    handleAmountChange = (event) => {
        event.preventDefault()
        let value = event.target.value;
        this.setState({
            amount: value,
            amountVal: (value*this.state.defValue).toFixed(2)
        })
    }

    addItem = (event) => {
        let tempArray = this.state.list.slice()
        tempArray.push({
            currency: this.state.defName,
            name: this.state.name,
            amount: this.state.amount,
            currencyVal: this.state.defValue,
            amountVal: this.state.amountVal,
        });
        this.setState({
            list: tempArray,
            name:"",
            amount: "",
        })
    }

    deleteItem = (event) => {
        let tempArray = this.state.list.slice()
        tempArray.splice(event.target.id, 1)
        this.setState({
            list: tempArray,
        })
    }

    deleteList = (event) => {
        this.setState({
            list: [],
        })

    }

    render() {
        if(this.state.currency.length === 0) {
            return null;
        }
        
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                    <Typography variant="title" color="inherit">
                    Application Currency Exchange
                    </Typography>
                    </Toolbar>
                </AppBar>
                <CurrencyView currency = {this.state.currency}/>
                <ChangeCurrency currency = {this.state.currency} 
                                defValue = {this.state.defValue} 
                                defName ={ this.state.defName} 
                                handleSelect = {this.handleSelect}
                                handleAmountChange = {this.handleAmountChange}
                                handleNameChange = {this.handleNameChange}
                                amountVal = {this.state.amountVal}
                                addItem={this.addItem}
                                name = {this.state.name}
                                amount = {this.state.amount}/>
                <List list={this.state.list}
                    defValue={this.state.defName} 
                    deleteItem={this.deleteItem}
                    deleteList={this.deleteList}/>
            </div>

        )
    }

    componentDidMount() {
        fetch(this.props.urlApi)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    currency: [
                        { name: data[0].rates[7].code.toUpperCase(), value: data[0].rates[7].mid.toFixed(2) }, //EUR
                        { name: data[0].rates[1].code.toUpperCase(), value: data[0].rates[1].mid.toFixed(2) }, //USD
                        { name: data[0].rates[9].code.toUpperCase(), value: data[0].rates[9].mid.toFixed(2) }, //CHF
                        { name: data[0].rates[10].code.toUpperCase(), value: data[0].rates[10].mid.toFixed(2) }, //GBP
                        { name: data[0].rates[12].code.toUpperCase(), value: data[0].rates[12].mid.toFixed(2) }, //JPY
                    ],
                    defValue: data[0].rates[7].mid.toFixed(2),
                    defName: data[0].rates[7].code.toUpperCase(),

                });
            });
    }
}

export default App