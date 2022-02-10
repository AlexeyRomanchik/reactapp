import { Component } from "react";
import nextId from "react-id-generator";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John S.", salary: 800, increase: false, id: nextId(), rise: false },
                { name: "Alex M.", salary: 3500, increase: false, id: nextId(), rise: false },
                { name: "Harry P.", salary: 5000, increase: false, id: nextId(), rise: false }
            ]
        };
    }

    addItem = (item) => {
        item.increase = false;
        item.rise = false;
        item.id = nextId();

        this.setState(({ data }) => {
            const newArr = [...data, item];
            return {
                data: newArr
            }
        });
    }

    deleteItem = id => {
        this.setState(({ data }) => ({
            data: data.filter(elem => elem.id !== id)
        }));
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                return item.id === id ? { ...item, [prop]: !item[prop] } : item;
            })
        }));
    }

    render() {
        const { data } = this.state,
            total = data.length,
            increaseCount = data.filter(elem => elem.increase).length;

        return (
            <div className="app">
                <AppInfo total={total}
                    increaseCount={increaseCount} />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList data={data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;