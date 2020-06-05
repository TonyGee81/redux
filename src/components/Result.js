import React from 'react';
import { connect } from "react-redux";
import {onlyRemoveToProps} from "../actions/numbers";
import {mapStateToProps} from "../reducers/calculatrice";
import PropTypes from 'prop-types';

const Result = (props) =>{

    console.log(props)

    return(
        <div>
            résultat {props.total}
        </div>
    )
}
Result.propTypes = {
    total : PropTypes.number
}
Result.defaultProps = {
    total: 0
}

export default connect(mapStateToProps)(Result);
// export default Result;