import React from "react";
import './Form.css'
import InputElement from "./InputElement";
import InputSelectElement from "./InputSelectElement";

class Form extends React.Component {
    state = { termFirstName:'',
              termLastName:'',
              termAge:'',
              termFreeText:'',
              formDataReview: '',
              isFormSubmited:false,
            }

    onFormSubmit(event) {
            event.preventDefault();
        console.log(event)
        const formData =
        {
            firstName : event.target[1].value,
            lastName : event.target[2].value,
            age : event.target[3].value,
            freeText : event.target[4].value
        }

        this.setState((prev)=> {return {formDataReview:formData}})
        this.setState({isFormSubmited:true})
        console.log('ggdfgdfgdfgg',this.state.formDataReview)
    }
    submitedForm =() =>{

        this.setState({isFormSubmited:true})
    }

    optionsList = [
        {value:'0-15',key:11,id:1},
        {value:'15-30',key:12,id:2},
        {value:'30-45',key:13,id:3},
        {value:'45-60',key:14,id:4},
    ]

    renderForm() {
        // if(this.state.isFormSubmited){
            return (
            <>
            <form action=""  className='form-review'>
                <div className='form-review'>
                <h3> Is this Form ok? </h3>
                <h4><span>First Name:</span> {this.state.formDataReview.firstName}</h4>
                <h4><span>Last Name:</span> {this.state.formDataReview.lastName}</h4>
                <h4><span>Age: </span>{this.state.formDataReview.age}</h4>
                <h4><span>Free Text:</span> {this.state.formDataReview.freeText}</h4>
                <div> <button type='submit'   > Submit </button>
                    <button  onClick={()=>{ this.setState({isFormSubmited:false})}} > EditData </button></div>
                </div>
            </form>
            </>
            )
        // }
    }


    render(){
        return (
            <>
                <h2>Please fill this form</h2>
                <form onSubmit={this.onFormSubmit.bind(this)} >
                    <fieldset disabled={this.state.isFormSubmited}>
                    <InputElement type={'text'} label={'First Name'} id='1' value={ this.state.termFirstName }
                                  onChange={e=>this.setState({ termFirstName:e.target.value })}/>
                    <InputElement type={'text'} label={'Last Name'} id='2'  value={ this.state.termLastName }
                                  onChange={e=>this.setState({ termLastName:e.target.value })} />
                    <InputSelectElement optionsList = { this.optionsList }
                                        label={'Age'}
                                        onChange={e=>this.setState({ termAge:e.target.value })} value={this.state.termAge} />
                    <textarea rows="4" cols="50" id='4' name='textArea'
                              onChange={e=>this.setState({ termFreeText:e.target.value }) } />
                    <label htmlFor="textArea"> Free Text</label>
                    <div> <button type='submit'  > Submit </button></div>
                    </fieldset>
                </form>
                {this.state.isFormSubmited && this.renderForm()}
            </>
        )
    }
}

export default Form;


{/*<div>*/}
{/*    <label htmlFor="firstName">  First Name</label>*/}
{/*    <input type="text" value={ this.state.termFirstName }*/}
{/*           onChange={e=>this.setState({ termFirstName:e.target.value })}*/}
{/*           name="FirstName" />*/}
{/*</div>*/}
{/*<div>*/}
{/*    <label htmlFor="lastName">  Last Name</label>*/}
{/*    <input type="text" value={ this.state.termLastName }*/}
{/*           onChange={e=>this.setState({ termLastName:e.target.value })}*/}
{/*           name="FirstName" />*/}
{/*</div>*/}