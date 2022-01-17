import React from "react"
import Beneficiary from "./Forms/beneficiary"
import Path from "./path"

const Home = () => {

    return (
        <React.Fragment>
            <div className="container">
                <Path />
                <Beneficiary />
            </div>

        </React.Fragment>
    )
}

export default Home