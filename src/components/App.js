import React from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import Result from './Result'

const App = (props) => {

    const handleSubmit = (values) =>{
        console.log('### handleSubmit')
        console.log(values)
        console.log('### handleSubmit')

    }

    return(
      <div className="app">

          <Form>
              <Input type="number" name="number_1"/>
              <Input type="number" name="number_2"/>
              <Button text="Addition" name="addition" type="submit"/>
              <Button text="Multiplier" name="multiple" type="submit"/>
              <Button text="Reset" name="resetForm" type="submit"/>
          </Form>
          <Result/>
      </div>
    )
}
export default App;
