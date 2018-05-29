import React from 'react';
import ReactDOM from 'react-dom';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


class ListItems extends React.Component {
    render () {
        

        const listElements = this.props.list.map((element, index) =>
            <TableRow key={index}>
                <TableCell component="th" scope="row">{ element.currency}</TableCell>
                <TableCell numeric>{ element.name }</TableCell>
                <TableCell numeric>{ element.amount }</TableCell>
                <TableCell numeric>{ element.currencyVal }</TableCell>
                <TableCell numeric>{ Number(element.amountVal) }</TableCell>
                <TableCell numeric><IconButton  aria-label="Delete" onClick={this.props.deleteItem}><DeleteIcon /></IconButton></TableCell>
            </TableRow>)

        let sum = 0;
        let tempArray = [];
        this.props.list.map(element => { 
            sum += Number(element.amountVal);
            tempArray.push(Number(element.amountVal));
            tempArray.sort((a,b) => b-a)
        })
        
        return (
            <Paper >
            <Table >
                <TableHead>
                <TableRow>
                    <TableCell>Currency:</TableCell>
                    <TableCell>Transaction name:</TableCell>
                    <TableCell numeric>Amount value:</TableCell>
                    <TableCell numeric>Currency value:</TableCell>
                    <TableCell numeric>Transaction value:</TableCell>
                    <TableCell numeric></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {listElements}
                </TableBody>
                <TableFooter>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Sum of transaction:</TableCell>
                    <TableCell></TableCell>
                    <TableCell numeric></TableCell>
                    <TableCell numeric>{ sum }</TableCell>
                    <TableCell numeric></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Bigest transaction:</TableCell>
                    <TableCell></TableCell>
                    <TableCell numeric></TableCell>
                    <TableCell numeric>{ tempArray[0] }</TableCell>
                    <TableCell numeric></TableCell>
                </TableRow>
                </TableFooter>
            </Table>
            </Paper>
            
        )
    }
}

export default ListItems