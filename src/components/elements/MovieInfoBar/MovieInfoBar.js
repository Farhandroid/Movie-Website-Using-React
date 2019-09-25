import React from "react";
//Font awesome should be imported
import { calcTime, convertMoney } from "../../../helpers";
import "./MovieInfoBar.css";

const MovieInfoBar = (props) =>{
    return (
        <div className="rmdb-movieinfobar">
            <div className="rmdb-movieinfobar-content">
                <div className="rmdb-movieinfobar-col">
                    <span className="rmdb-movieinfobar-info">Running time : {calcTime(props.time)}</span>
    {/*A fontawesome icon will be here*/}
                </div>
                <div className="rmdb-movieinfobar-col">
                    {/*Font awesome icon will be here */}
                    <span className="rmdb-movieinfobar-info">Budget : {convertMoney(props.budget)}</span>
                </div>
                <div className="rmdb-movieinfobar-col">
    {/*Font Awesome icon will be added */}
                <span className="rmdb-movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieInfoBar;
