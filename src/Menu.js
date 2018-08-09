import React, { Component } from 'react'

class Menu extends Component {

    render(){
        return(

            <nav>
                <button tabIndex="0" onClick={() => this.props.showParks()} id="show-theatres">
                    <span className="textBtn">Parks</span>
                </button>
            </nav>
        )
    }
}

export default Menu