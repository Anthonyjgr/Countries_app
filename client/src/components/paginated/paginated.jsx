import React from "react";
import Style from "./paginated.module.css"
import { useSelector, useDispatch } from "react-redux";
import { getPages } from "../../redux/actions"


const Paginated = ({ countriesPerPage, countries }) => {
    const currentePage = useSelector(state => state.paginated)
    const dispatch = useDispatch()

    const pageNumbers = [];

    for (let index = 0; index < Math.ceil(countries / countriesPerPage); index++) {
        pageNumbers.push(index +1)
    }

    return (
        <div className={Style.container} >
            <div className={Style.selector}>
                {
                    currentePage === 1 ?
                        <button className={Style.buttons}></button> :
                        <button className={Style.buttons} onClick={() => dispatch(getPages(currentePage - 1))}>{"<"}</button>
                }
            </div>
            <div>
                <button className={Style.selector}>{currentePage}</button>
            </div>
            <div className={Style.selector}>
                {
                    currentePage === pageNumbers.length ?
                        <button className={Style.buttons}></button> :
                        <button className={Style.buttons} onClick={() => dispatch(getPages(currentePage + 1))}>{">"}</button>
                }
            </div>
        </div>
    )
}

export default Paginated