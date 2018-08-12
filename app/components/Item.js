import React from 'react';

export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        };
        //this.getID = this.getID.bind(this);
    }
    showLevel(l) {
        let level = "";
        if(l == 0)
            level = "High";
        if(l == 1)
            level = "Medium";
        if(l == 2)
            level = "Low";
        return level;
    }
    //getID send to App
    getID(id) {
        this.props.Handle_Delete_Click(id);
    }
    //get Item send to App
    getItem(item) {
        this.props.Handle_Edit_Click(item);
    }
    render() {
        let items = this.props.items;
        let color_lv = "";
        if(items.level == 0)
            color_lv = "text-danger";
        if(items.level == 1)
            color_lv = "text-warning";
        if(items.level == 2)
            color_lv = "text-success";
        return (
            <tr>   
                <th scope="row" className="text-center">{this.props.index+1}</th>
                <td>{items.name}</td>
                <td className={color_lv + " text-center"}>{this.showLevel(items.level)}</td>
                <td className="text-center">
                    <button onClick={()=>this.getItem(items)} type="button" className="btn btn-outline-warning mr-sm-2">Edit</button>
                    <button onClick={()=>{if(confirm("Confirm delete?")) return this.getID(items.id)}} type="button" className="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
        );
    }
}