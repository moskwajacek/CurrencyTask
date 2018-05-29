import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class ChangeCurrency extends React.Component {


    render() {

        const options = (this.props.currency).map( (c, index) => <MenuItem key={index} value={[c.value, c.name]}>{c.name}</MenuItem>)

        const view = this.props.amount.length < 1 ? false :  
        <div>
            <br/>
            <Card>
            <CardContent>
                <Typography variant="headline" component="h2">
                    Transaction name: {this.props.name}
                </Typography>
                <Typography color="textSecondary">
                    Exchange amount: {this.props.amount}
                </Typography>
                <Typography color="textSecondary">
                    Currency value: {this.props.defValue}
                </Typography>
                <Typography component="p">
                    Exchange value: {Number(this.props.amountVal)}
                </Typography>
            </CardContent>
            </Card>
        </div>
                                                
        return (
        <div>
            <form autoComplete="ON">
            <TextField 
                id="select-currency"
                select
                label={this.props.defName}
                value={this.props.defName}
                onChange={this.props.handleSelect}
                helperText="Please select your currency:"
                margin="normal">
                {options}
                </TextField>
            </form><br/>
            <form>
            <TextField
                id="name"
                label="Name of transaction:"
                value={this.props.name}
                onChange={this.props.handleNameChange}
                margin="normal"/><br/>
            <TextField 
                id="number"
                label="Amount:"
                value={this.props.amount}
                onChange={this.props.handleAmountChange}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"/>
            </form><br/>
            <Button variant="fab" color="primary" aria-label="add" onClick={this.props.addItem}><AddIcon /></Button><br/>   
            {view}
        </div>   
        )   
    }
}
 
export default ChangeCurrency;