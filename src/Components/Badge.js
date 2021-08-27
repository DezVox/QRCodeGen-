import React from 'react'

const Badge = (props) => {
    useEffect(() => {
        document.getElementById("qrPlaceholder").innerHTML = qrsrc
    }, [])
    
    return (
        <div>
            <div id="qrPlaceholder"></div>
        </div>
    )
}

export default Badge
