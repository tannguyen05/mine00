import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './components/Header';
import {Control} from './components/Control';
import {List} from './components/List';
import Tasks from './data/Task';


const uuidv4 = require('uuid/v4');


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Items: [],
            strSearch: '',
            OrderBy: '',
            isToggle: false,
            itemEdit: null
        };
        this.Handle_Search=this.Handle_Search.bind(this);
        this.Handle_Sort=this.Handle_Sort.bind(this);
        this.Handle_Delete=this.Handle_Delete.bind(this);
        this.Handle_Add = this.Handle_Add.bind(this);
        this.Handle_Cancel = this.Handle_Cancel.bind(this);
        this.Handle_ShowForm = this.Handle_ShowForm.bind(this);
        this.Handle_Edit = this.Handle_Edit.bind(this);
        localStorage.setItem("task", JSON.stringify(this.state.Items));
    }
    componentWillMount() {
        let Items = JSON.parse(localStorage.getItem("task"));
        this.setState({
            Items: Items
        })
    }
    //show form
    Handle_ShowForm() {
        this.setState({
            isToggle: !this.state.isToggle,
            itemEdit: null
        })
    }
    //close form
    Handle_Cancel() {
        this.setState({
            isToggle: false
        })
    }
    //get value input search
    Handle_Search(value) {
        this.setState({
            strSearch: value
        })
    }
    //get orderby
    Handle_Sort(value) {
        this.setState({
            OrderBy: value
        })
    }
    //remove item with ID
    Handle_Delete(id) {
        let Items = this.state.Items;
        // get index of object with id
        let removeIndex = Items.map(function(item) { return item.id; }).indexOf(id);
        // remove object
        Items.splice(removeIndex, 1);
        //update state
        this.setState({
            Items: Items
        })

        localStorage.setItem("task", JSON.stringify(Items));
    }
    //Edit item
    Handle_Edit(item) {
        this.setState({
            itemEdit: item,
            isToggle: true
        })
    }
    //Add new item to list
    Handle_Add(item) {
        let Items = this.state.Items;
        if(item.id !== ''){ //edit
            Items.map((elem)=>{
                if(elem.id === item.id) {
                    elem.name = item.name;
                    elem.level = +item.level;
                }
            });
        }else{ //add
            let new_item = {
                id: uuidv4(),
                name: item.name,
                level: +item.level
            }
            Items.push(new_item);
        }
        this.setState({
            Items: Items,
            isToggle:false
        });

        localStorage.setItem("task", JSON.stringify(Items));
    }
    //function search
    Search(Items, str){
        str = str.toLowerCase();
        let Show_Items = Items;
        if(str != "") {
            let Items_search = Items.filter((Item)=>{
                if(Item.name.toLowerCase().indexOf(str)>-1)
                    return Item;
            });
            if(Items_search.length < 1){
                alert("Không tìm thấy kêt quả phù hợp. Vui lòng nhập lại!");
                Show_Items = Items;
            }else{
                Show_Items = Items_search;
            }
        }
        return Show_Items;
    }
    // function sort
    Sort(Items, OrderBy){
        if(OrderBy == "ASC")
            Items.sort((a,b)=> b.level - a.level);
        if(OrderBy == "DESC")
            Items.sort((a,b)=> a.level - b.level);
    }
    render() {
        this.Sort(this.state.Items, this.state.OrderBy);
        let new_Items = this.Search(this.state.Items, this.state.strSearch);
        return(
            <div>
                {/* header */}
                <Header />
    
                {/* input */}
                <Control 
                    itemEdit={this.state.itemEdit}
                    Handle_ShowForm = {this.Handle_ShowForm}
                    Handle_Cancel = {this.Handle_Cancel}
                    isToggle = {this.state.isToggle}
                    Handle_Search={this.Handle_Search} 
                    Items = {this.state.Items} 
                    Handle_Sort={this.Handle_Sort}
                    Handle_Add = {this.Handle_Add}
                />

                {/* output */}
                <List 
                    Items = {new_Items}
                    Handle_Delete = {this.Handle_Delete}
                    Handle_Edit = {this.Handle_Edit}
                />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("app"));