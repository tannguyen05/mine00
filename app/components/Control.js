import React from 'react';
import {Form} from './Form';
import {Search} from './Search';
import {Sort} from './Sort';
export class Control extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        
        }
    }
    
    render() {
        let form = null;
        let btn = <button type="button" className="btn btn-success btn-block" onClick={this.props.Handle_ShowForm}>Add task</button>;
        if(this.props.isToggle)
            form = <Form 
                itemEdit={this.props.itemEdit}
                Handle_Cancel = {this.props.Handle_Cancel}
                Handle_Add = {this.props.Handle_Add}
            />;
        if(this.props.isToggle)
            btn = <button type="button" className="btn btn-info btn-block" onClick={this.props.Handle_ShowForm}>Close</button>;
        return(
            <div className="row">
                {/* search */}
                <Search Handle_Search_Go = {this.props.Handle_Search }/> 

                {/* sort */}
                <Sort Handle_Sort_Click = {this.props.Handle_Sort}/>

                {/* add */}
                <div className="col-sm- col-md-4 col-lg-4 col-xl-4">
                    {btn}
                    {/* Form */}
                    {form}
                </div>
            </div>
        );
    }
}