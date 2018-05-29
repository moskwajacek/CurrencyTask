import React from 'react';
import ReactDOM from 'react-dom'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class CurrencyView extends React.Component {

    render() {

        const currencyList = this.props.currency.map((curr, index) => <Typography key={index} variant="headline" component="p">{curr.name} - {curr.value} </Typography>)


        return (
            <div >
                <Card >
                <CardContent>
                {currencyList}
                </CardContent>
                </Card>
            </div>
        )
    }
}

export default CurrencyView;