import React, { useRef } from 'react';

function Ref(props) {
    const nameRef = useRef();
    const emailRef = useRef();

   const  hadlesubmit = () => {
        console.log(nameRef.current.value , emailRef.current.value);

        nameRef.current.style.backgroundColor="red"
        emailRef.current.focus()
    }
    return (
        <div>
           <input ref={nameRef} type='text' placeholder='Please enter your name'  name='name'/>
            <input ref={emailRef} type='text' placeholder='Please enter your Email'  name='Email'/>
            <button onClick={() =>hadlesubmit()}>Submit </button>
        </div>
    );
}

export default Ref;