import { Component } from "react/cjs/react.development";
import "./search-panel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ""
        };
    }

    onUpdateSeach = (event) => {
        this.setState({
            seachString: event.target.value
        });

        this.props.onSearchUpdate(event.target.value);
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.setState.seachString}
                onChange={this.onUpdateSeach} />
        );
    }
}

export default SearchPanel;