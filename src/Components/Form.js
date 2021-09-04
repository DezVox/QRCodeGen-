import React, {  useRef, useState  } from 'react'
import qrcode from 'qrcode-generator'
import Badge from './Badge.js'
import { HiAtSymbol } from "react-icons/hi"

const Form = () => {
    const [validInfo, setValidInfo] = useState({
        email: "",
        name: "",
        git: "",
        twitter: ""
    })

    const nameRef = useRef()
    const emailRef = useRef()
    const twitRef = useRef()
    const gitRef = useRef()
    const badgeRef = useRef()
    const [error, setError] = useState()
    const [qrsrc, setqrsrc] = useState(null)
    const [active, setActive] = useState(false)
    
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }


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

        if(twitRef.current.value !== ""){
            let twitRe= /^([A-Z]|[a-z]|[0-9]|_)+$/

            if(!twitRe.test(twitRef.current.value)){
                setError("Invalid Twitter Handle.")
                return
            }
        }
        let qr = qrcode(0, "L")
        qr.addData("Name: " + nameRef.current.value + "\nEmail: " + emailRef.current.value + "\nTwitter: " + twitRef.current.value + "\nGitHub: " + gitRef.current.value)
        qr.make()
        
        setqrsrc(qr.createImgTag())

        setActive(true)

        setValidInfo({email: emailRef.current.value, 
            name:nameRef.current.value, 
            git:gitRef.current.value,
            twitter:"@" + twitRef.current.value
        })

        setError("")
    }

     const eraseData = async () =>{
        await timeout(1000)


        // Clear text fields
        Array.from(document.querySelectorAll("input[type=text]")).forEach(
            input => (input.value = "")
        )
        console.log("Data erased!")
        setqrsrc(null)
        setActive(false)
        setError("")
    }

    return (
        <div>
            <div className = "inputform">
                <form onSubmit = {  handler  }>
                    <label>Name*</label><input ref= { nameRef } type="text" required></input>
                    <label>Email*</label><input ref = {  emailRef  } type="text" required></input>
                    <label>Twitter</label><HiAtSymbol className="atSymForm"/><input  ref = {  twitRef  } type="text"></input>
                    <label>GitHub</label><input ref = {  gitRef  } type="text"></input>
                    <input className = "btn" type="submit" value="Create"/>
                    <input className = "btn" type="button" onClick = { eraseData } value ="Cancel"></input>
                    <h4>* indicates required field</h4>
                    {error !== "" && <h4 className="errortxt">{error}</h4>}
                </form>
            </div>
            {active && <Badge ref={ badgeRef } qrsrc={  qrsrc  } name= {  validInfo.name  } 
                        email= { validInfo.email }  
                        twitter= { validInfo.twitter } 
                        github = { validInfo.git }
            />}
            
        </div>
    )
}

export default Form
