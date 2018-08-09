import React, { Component } from 'react'
//displaing buttons in the menu
class Menu extends Component {

    render(){
        return(

            <nav>
                <button tabIndex="0" onClick={() => this.props.showParks()} id="show-theatres">
                    <img alt="Gallery symbol" src="http://www.serwisstron.pl/icons/galeria.png" />
                    <span className="textBtn">Parks</span>
                </button>
                <button tabIndex="0" onClick={() => this.props.showMalls()} id="show-galeries">
                    <img alt="Gallery symbol" src="http://www.serwisstron.pl/icons/galeria.png" />
                    <span className="textBtn">Galeries</span>
                </button>
                <button tabIndex="0" onClick={() => this.props.showAll()} id="show-all">
                    <span className="textBtn">Show All Places</span>
                </button>
            </nav>
        )
    }
}

export default Menu