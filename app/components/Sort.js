import React from 'react';

export class Sort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.HandleASC = this.HandleASC.bind(this);
        this.HandleDESC= this.HandleDESC.bind(this);
    }
    HandleASC() {
        this.props.Handle_Sort_Click("ASC");
    }
    HandleDESC() {
        this.props.Handle_Sort_Click("DESC");
    }
    render() {
        return(
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div className="btn-group">
                    <button type="button" onClick={this.HandleASC} className="btn btn-primary">level-ASC</button>
                    <button type="button" onClick={this.HandleDESC} className="btn btn-primary">level-DESC</button>
                </div>
            </div>
        );
    }
}