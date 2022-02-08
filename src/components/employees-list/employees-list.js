import EmployeesListItem from '../employees-list-item/employees-list-item';
import "./employees-list.css";

const EmployeesList = ({ data }) => {

    const elements = data.map(item => {
        const {id, ...tiemProps} = item;
        return (
            <EmployeesListItem key={id} {...tiemProps} />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeesList;