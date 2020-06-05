import React, {useRef} from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps} from '../actions/numbers';
import {mapStateToProps} from '../reducers/calculatrice';

const Form = (props) => {

    const inputs = [];

    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = {};
        inputs.forEach((inputRef, i) => {
            values[inputRef.current.name] = inputRef.current.value
        });

        switch (e.currentTarget.name) {
            case 'addition':
                props.addition(values);
                break;

            case 'multiple':
                props.multiple(values);
                break;

            case 'resetForm':
                console.log('FORM c' + form.current);

            default:
                // Si aucun changement de state
                break;
        }
        form.current.reset();

    }

    return (
        <form ref={form} onSubmit={(e) => {
            e.preventDefault()
        }}>
            {
                props.children.map((childNode, k) => {
                    const Component = childNode.type;
                    if (childNode.props.name) {
                        inputs.push(React.createRef())
                    }
                    const props = {
                        key: k,
                        ref: inputs[k],
                        ...childNode.props,
                    }
                    if (childNode.props.type === 'submit') {
                        props.handleClick = handleSubmit;
                    }
                    return (<Component {...props}/>)
                })
            }
        </form>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Form);
// export default Form;