import React, {  useEffect  } from 'react'

const Badge = ({ qrsrc, name, email, twitter, github }) => {
    useEffect(() => {
        document.getElementById("qrPlaceholder").innerHTML = qrsrc
    }, [qrsrc])
    
    return (
        <div className="BadgeBox">
            <h3>{email}</h3>
            <div id="qrPlaceholder"></div>
        </div>
    )
}

export default Badge
