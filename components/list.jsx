import React from 'react';
import ReactDOM from 'react-dom'

import ListItems from './list_items.jsx';

import Button from '@material-ui/core/Button';

class List extends React.Component {
    render () {
        return(
            <div>
                <br/>
                <ListItems list={this.props.list} deleteItem={this.props.deleteItem} defValue={this.props.defName}/><br/>
                <Button variant="raised" color="secondary" onClick={this.props.deleteList}>Clear transaction list</Button>
                {/* <button onClick={this.props.deleteList}>Clear transaction list</button> */}
            </div>
        )
    }
}

export default List;