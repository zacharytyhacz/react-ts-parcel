import * as React from "react"

const useForm = (initialState={}, options?: {
  validations?: {},
  onFormChange?: ()=>void,
  onSubmit?: (form: {})=>void,
}) => {
  const {validations, onFormChange, onSubmit} = options;
  const [formData, setFormData] = React.useState(initialState);

  const onChange = (e) => {
    console.log("CHANGED")
    setFormData({...formData, [e.target.name]: e.target.value});
    console.log("in form:", formData);

    if(onFormChange){
      onFormChange()
    }
  }

  const onBlur = (e) => {
    console.log(e.target.name, "blurred");
    if(validations[e.target.name]){
      let valid = validations[e.target.name](e);
      e.target.classList.toggle('is-valid', valid);
      e.target.classList.toggle('is-invalid', !valid);
    }
  }

  const submitForm = (e) => {
    if(validations){
      for(let input in validations){
        if( !validations[input]({ 
          target: {
            value: formData[input],
            checked: formData[input],
          }
        }) ){
          return onSubmit(false);
        }
      }
    }
    onSubmit(formData);
  }

  const eventHandlers = {onChange, onBlur};

  return [formData, eventHandlers, submitForm];
};

export default useForm
