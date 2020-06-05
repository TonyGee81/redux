export const action_types =  {
    addition   : 'ADDITION',
    multiple: 'MULTIPLE',
    reset : 'RESET'
}

export const addition_number = (number1, number2) => (
    {
        type : action_types.addition,
        number1 : parseInt(number1),
        number2 : parseInt(number2)
    }
)

export const multiple_number = (number1, number2) => (
    {
        type : action_types.multiple,
        number1 : number1,
        number2 : number2
    }
)

export const reset_number = (number1, number2) => (
    {
        type : action_types.reset,
        number1 : number1,
        number2 : number2
    }
)

export const mapDispatchToProps = (dispatch) => {
    return(
        {
            addition : (payload) => {dispatch(addition_number(payload))},
            multiple : (payload) => dispatch(multiple_number(payload)),
            reset : (payload) => dispatch(reset_number(payload))
        }
    )
}