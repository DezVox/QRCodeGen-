import React, {  useEffect  } from 'react'
import {  FaGithub, FaTwitter  } from "react-icons/fa"
import {  AiOutlineMail  } from "react-icons/ai"
import {  IoPersonCircle  } from "react-icons/io5"

const Badge = ({ qrsrc, name, email, twitter, github }) => {
    useEffect(() => {
        document.getElementById("qrPlaceholder").innerHTML = qrsrc
    }, [qrsrc])
    
    return (
        <div className="BadgeBox">
            <div className="Placeholder" id="qrPlaceholder"></div>
            <h4 className="infotxt"><IoPersonCircle/>Name: {name}</h4>
            <h4 className="infotxt"><AiOutlineMail/>Email: {email}</h4>
            {twitter !== "@" && <h4 className="infotxt"><FaTwitter/>Twitter: {twitter}</h4>}
            {github !== "" &&<h4 className="infotxt"><FaGithub/>Github: {github}</h4>}
        </div>
    )
}

export default Badge
