/* component for place information form wikipedia API */
import React, { Component } from 'react'

class InformationBox extends Component {

    render(){
        return(
            <details id="spec">
                <div className="spec-wrapper">
                    <h3 tabIndex="0" id="info-title">Information from google maps and wikipedia API:</h3>
                    <p tabIndex="0" id="address"></p>
                    <p tabIndex="0" role="article" id="short-article"></p>
                    <a tabIndex="0" target="blank" id="results">Link: </a>
                    <p tabIndex="0" id="info"></p>
                </div>
            </details>
        )
    }
}

export default InformationBox