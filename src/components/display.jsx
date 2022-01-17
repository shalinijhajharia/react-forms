
import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const form = useSelector(state => state.forms)
    const keys = Object.keys(form)[0];

    if (keys) {
        const data = Object.keys(form[keys]).map((ele, index) =>
            <div className='data' key={index}>{ele + ":" + form[keys][ele]}</div>

        )
        return (
            <React.Fragment>
                <h1>Verify your Data</h1>
                {data}
            </React.Fragment>
        )
    }
    return null
}


export default Display