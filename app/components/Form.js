import React from 'react';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskID: '',
            taskName: '',
            taskLevel: 0
        };
        this.HandleChange=this.HandleChange.bind(this);
        this.HandleSubmit=this.HandleSubmit.bind(this);
    }
    updateItem(item) {
        if(item !== null) //when user click edit
        {
            this.setState({
                taskID: item.id,
                taskName: item.name,
                taskLevel: item.level
            })
        }
    }
    componentWillMount() {
        this.updateItem(this.props.itemEdit);
    }
    componentWillReceiveProps(nextProps) {
        this.updateItem(nextProps.itemEdit);
    }
    HandleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    HandleSubmit(event) {
        let item = {
            id: this.state.taskID,
            name: this.state.taskName,
            level: this.state.taskLevel
        }
        this.props.Handle_Add(item);
        this.setState({
            taskID: '',
            taskName: '',
            taskLevel: 0
        })
        event.preventDefault();
    }
    render() {
        return(
            <div>
                <hr />
                <form onSubmit={this.HandleSubmit}>
                    <div className="form-group form-inline">
                        <input type="text" name="taskName" value={this.state.taskName} onChange={this.HandleChange} className="form-control mr-sm-2" placeholder="Task Name" required />
                        <select name="taskLevel" value={this.state.taskLevel} onChange={this.HandleChange} className="form-control">
                            <option value={0}>high</option>
                            <option value={1}>medium</option>
                            <option value={2}>low</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success mr-sm-2">Submit</button>
                    <button onClick={this.props.Handle_Cancel} type="reset" className="btn btn-default">Cancel</button>
                </form>
            </div>
        );
    }
}