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
            ],
            searchString: "",
            filterSelector: "all"
        };
    }

    filterBy = (filterSelector, items) => {
        switch (filterSelector) {
            case "all":
                return items;
            case "moreThenThouthend":
                return items.filter(item => item.salary > 1000);
            default:
                return items.filter(item => item[filterSelector]);
        }
    }

    onSelectorChange = (selector) => {
        this.setState({
            filterSelector: selector
        });
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

    onSearchUpdate = (search) => {
        this.setState({
            searchString: search
        });
    }

    filterData = (searchString, data) => {
        if (searchString === "") {
            return data;
        }

        return data.filter(elem => {
            return elem.name.indexOf(searchString) > -1
        });
    }

    render() {
        const { data, searchString, filterSelector } = this.state,
            total = data.length,
            increaseCount = data.filter(elem => elem.increase).length;

        let filteredData = this.filterData(searchString,
            this.filterBy(filterSelector, data));

        return (
            <div className="app">
                <AppInfo total={total}
                    increaseCount={increaseCount} />
                <div className="search-panel">
                    <SearchPanel onSearchUpdate={this.onSearchUpdate} />
                    <AppFilter onSelectorChange={this.onSelectorChange}
                        filter={filterSelector} />
                </div>
                <EmployeesList data={filteredData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;