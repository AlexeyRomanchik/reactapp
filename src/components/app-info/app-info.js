import "./app-info.css";

const AppInfo = ({ total, increaseCount }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {total}</h2>
            <h2>Премию получат: {increaseCount}</h2>
        </div>
    );
};

export default AppInfo;