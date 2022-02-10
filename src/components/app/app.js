import { Component } from "react";
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
                { name: "John S.", salary: 800, increase: false, id: 1, like: false },
                { name: "Alex M.", salary: 3500, increase: false, id: 2, like: false },
                { name: "Harry P.", salary: 5000, increase: false, id: 3, like: false }
            ]
        };
    }

    deleteItem = id => {
        this.setState(({ data }) => ({
                data: data.filter(elem => elem.id != id)   
        }));
    }

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList data={data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm />
            </div>
        );
    }
}

export default App;