import React from 'react';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            strSearch: ''
        };
        this.HandleChange = this.HandleChange.bind(this);
        this.Handle_Pass  = this.Handle_Pass.bind(this);
    }
    //get value input
    HandleChange(e) {
        this.setState({
            strSearch: e.target.value
        })
    }
    //Pass value input search to App
    Handle_Pass(){
        this.props.Handle_Search_Go(this.state.strSearch);
    }
    render() {
        return(
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div className="input-group mb-3">
                    <input type="text" onChange={this.HandleChange} value={this.state.strSearch} className="form-control" placeholder="Search..." />
                    <div className="input-group-append">
                        <button className="btn btn-info" onClick={this.Handle_Pass}type="submit">Go!</button> 
                    </div>
                </div>
            </div>
        );
    }
}