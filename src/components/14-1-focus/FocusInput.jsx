import React from "react";



class FocusInput extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }
    // const inputField = this.inputRef.current
    componentDidMount() {
        this.inputRef.current.focus()
    }

    render() {
        return(
            <div>
                <form action="">
                    <h1>Form</h1>
                    <input ref={this.inputRef} type="text"/>
                </form>

            </div>
        )
    }
}
export default FocusInput