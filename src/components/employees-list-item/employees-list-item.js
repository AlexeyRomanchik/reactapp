import "./employees-list-item.css";

const EmployeesListItem = (props) => {
    const { name, salary, onDelete, onToggleProp, increase, rise } = props;

    let liClassNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        liClassNames += " increase";
    }

    if (rise) {
        liClassNames += " like";
    }

    return (
        <li className={liClassNames}>
            <span className="list-group-item-label"
                data-toggle="rise"
                onClick={onToggleProp}>{name}</span>

            <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    data-toggle="increase"
                    onClick={onToggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;