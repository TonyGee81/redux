import React,{useEffect,useRef} from 'react';

export default React.forwardRef((props,ref) => {

    const divRef=useRef();

    useEffect(()=>{
        divRef.current.classList.remove("is-upgraded");
        divRef.current.classList.remove("is-dirty");
    })

    return(
        <div ref={divRef} className="mdl-textfield mdl-js-textfield">
            <input ref={ref}
                   className="mdl-textfield__input"
                   type={props.type}
                   id={props.id}
                   name={props.name}
            />
            <label className="mdl-textfield__label" htmlFor="sample1">{props.name}</label>
        </div>
    )
})