import React from "react";



class CopyTextArea extends React.Component {
    constructor(props) {
        super(props);

        this.textRef = React.createRef();

    }
    // const inputField = this.inputRef.current
    componentDidMount() {
        this.textRef.current.focus()
    }
    copyTextAreaFunction = async()=> {
      let text = this.textRef.current.value
       let theClipboard =  navigator.clipboard;
        await navigator.clipboard.writeText(text)
    }

    render() {
        return(
            <div>
                    <h1>Form</h1>
                    <textarea ref={this.textRef} />
                    <button onClick={this.copyTextAreaFunction.bind(this)}>Click</button>


            </div>
        )
    }
}
export default CopyTextArea