import "./employees-add-form.css"
import { Component } from "react";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
            isNameValid: true,
            isSalaryValid: true
        };
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        
        const { name, salary } = this.state;
        let { isNameValid, isSalaryValid } = this.state;

        isNameValid = this.isNameValid(name);
        isSalaryValid = this.isSalaryValid(salary);

        if (isNameValid && isSalaryValid) {
            this.props.onAdd({ name, salary });

            this.setState({
                name: "",
                salary: ""
            });
        }

        this.setState({ isNameValid, isSalaryValid });
    }

    isNameValid = (name) => name.length > 3 && name.length < 150;

    isSalaryValid = (salary) => !isNaN(salary) && salary !== "" && (+salary) >= 0;

    render() {
        const { name, salary, isNameValid, isSalaryValid } = this.state;
        const inputClass = "form-control new-post-label";

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className={!isNameValid ? inputClass + " not-valid" : inputClass}
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className={!isSalaryValid ? inputClass + " not-valid" : inputClass}
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;