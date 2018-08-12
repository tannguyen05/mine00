import React from 'react';
import {Item} from './Item';
export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const Items = this.props.Items;
        const Elem = Items.map((item, index)=>{
            return (
                <Item 
                    key={index} 
                    items={item} 
                    index={index}
                    Handle_Delete_Click = {this.props.Handle_Delete}
                    Handle_Edit_Click = {this.props.Handle_Edit}
                />
            );
        })
        return (
            <div style={{marginTop: 20}}>
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>   
                            <th style={{width: '10%'}} className="text-center">#</th>
                            <th>Task</th>
                            <th style={{width: '20%'}} className="text-center">Level</th>
                            <th style={{width: '20%'}} className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Data */}
                        {Elem}
                    </tbody>
                </table>
            </div>
        );
    }
}