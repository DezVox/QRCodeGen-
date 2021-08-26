import React from 'react'

const Form = () => {
    function handler(){
        console.log("Working.")
    }

    return (
        <div>
            <form>
                <label>Name</label><input type="text" required></input>
                <label>Email</label><input type="text" required></input>
                <label>Twitter</label><input type="text"></input>
                <label>GitHub</label><input type="text"></input>
                <input onClick= { handler } type="submit"/>
            </form>
        </div>
    )
}

export default Form
