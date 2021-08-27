import React, {  useRef, useState  } from 'react'

const Form = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const twitRef = useRef()
    const gitRef = useRef()
    const [error, setError] = useState()


    const  handler = (e) =>{
        e.preventDefault()

        let namere = /^[A-Z][a-z]+ [A-Z][a-z]+[a-z]$/
        
        if(!namere.test(nameRef.current.value)){
            setError("Please enter your full name. First and last. Check for case.")
            return
        }

        let emailre= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!emailre.test(emailRef.current.value)){
            setError("Invalid Email address")
            return
        }

        let twitRe= /^@([A-Z]|[a-z]|[0-9]|_)+$/

        if(!twitRe.test(twitRef.current.value)){
            setError("Invalid Twitter Handle.")
            return
        }

        // Clear text fields
        Array.from(document.querySelectorAll("input[type=text]")).forEach(
            input => (input.value = "")
        )
        setError("")
    }

    const eraseData = () =>{
        Array.from(document.querySelectorAll("input[type=text]")).forEach(
            input => (input.value = "")
        )
        console.log("Data erased!")
        setError("")
    }

    return (
        <div className = "inputform">
            <form onSubmit = {  handler  }>
                <label>Name*</label><input ref= { nameRef } type="text" required></input>
                <label>Email*</label><input ref = {  emailRef  } type="text" required></input>
                <label>Twitter</label><input  ref = {  twitRef  } type="text"></input>
                <label>GitHub</label><input ref = {  gitRef  } type="text"></input>
                <input type="submit" value="Create"/>
                <input type="button" onClick = { eraseData } value ="Cancel"></input>
                <h2>* indicates required field</h2>
                {error !== "" && <h2 className="errortxt">{error}</h2>}
            </form>
        </div>
    )
}

export default Form
