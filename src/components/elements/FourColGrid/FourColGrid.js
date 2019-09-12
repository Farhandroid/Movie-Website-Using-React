import React from 'react';
import './FourColGrid.css'

const FourColGrid = (props) =>
{
    const renderElements = () => // This function will render every item and make a grid . Then a return . Syntax is a little bit tough . But one day i will understand
    {
        const gridElements = props.children.map( (element , i) => {
            return (
                <div key={i} className='rmdb-grid-element'>{/*Make every element grid and then return*/}
                    {element}
                </div>
            )
        } )

        return gridElements;
    }


    return (
        <div className='rmdb-grid'>
            {props.header && !props.loading ? <h1>{props.header}</h1> : null} {/*If props have header and not loading then h1 tag will send otherwise null*/}
            <div className='rmdb-grid-content'>
                {renderElements()} 
            </div>
        </div>
    )
}

export default FourColGrid;