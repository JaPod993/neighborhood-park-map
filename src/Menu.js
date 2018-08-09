import React, { Component } from 'react'

/* displaing buttons in the menu */
class Menu extends Component {

    render(){
        return(
            <nav>
                <button tabIndex="0" onClick={() => this.props.showParks()} id="show-parks">
                    <img alt="Parks" src="/icons/park_icon.png" />
                    /* icon by Panna Chee */
                    <span className="textBtn">Parks</span>
                </button>
                <button tabIndex="0" onClick={() => this.props.showMalls()} id="show-malls">
                    <img alt="Malls" src="/icons/mall_icon.png" />
                    /* icon by Bernar Novalyii */
                    <span className="textBtn">Malls</span>
                </button>
                <button tabIndex="0" onClick={() => this.props.showAll()} id="show-all">
                    <span className="textBtn">Show All</span>
                </button>
            </nav>
        )
    }
}

export default Menu