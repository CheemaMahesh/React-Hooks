import React from "react";

export default class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        };
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    componentDidMount() {
        document.title = this.state.name;
    }
    componentDidUpdate(){
        document.title = this.state.name;
    }

    render() {
        const { name } = this.state;
        return (
            <>
                <div className="section">
                    <Row label="Name">
                        <input className="input" onChange={this.handleName} value={name}/>
                    </Row>
                    <Row label="Last Name">
                        <input className="input" />
                    </Row>
                </div>

                <h2>Hello, {name}</h2>
            </>
        );
    }
}

function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    );
}
