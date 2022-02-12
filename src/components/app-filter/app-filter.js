import { Component } from "react/cjs/react.development";
import "./app-filter.css";

class AppFilter extends Component {
    render() {
        const buttonsData = [
            { name: "all", label: "Все сотрудники" },
            { name: "rise", label: "На повышение" },
            { name: "moreThenThouthend", label: "З/П больше 1000$" }
        ];


        const buttons = buttonsData.map(({ name, label }) => {
            const buttonClassName = this.props.filter === name ?
                "btn-light" :
                "btn-outline-light";

            return (
                <button className={`btn ${buttonClassName}`}
                    type="button"
                    name={name}
                    onClick={() => this.props.onSelectorChange(name)}
                    key={name}>
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group" onClick={this.onFilterChanged}>
                {buttons}
            </div>
        );
    }
}

export default AppFilter;