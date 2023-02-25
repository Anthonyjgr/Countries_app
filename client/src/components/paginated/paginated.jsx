import React from "react";
import Style from "./paginated.module.css"
import { useSelector,useDispatch } from "react-redux";
import {getPages} from "../../redux/actions"



const Paginated = ({ countriesPerPage, countries }) => {
    const currentePage = useSelector(state => state.paginated)
    const dispatch= useDispatch()

    const pageNumbers = [];

    for (let index = 0; index < Math.ceil(countries / countriesPerPage); index++) {
        pageNumbers.push(index + 1)
    }

    const nextPage = () => {

    }

    return (
        <div className={Style.container} >
            {/* {
                pageNumbers &&
                pageNumbers.map(number => {
                    return (
                        <div className={Style.number} key={number}>
                            <p  onClick={() => paginated(number)}>{number}</p>
                        </div>
                    )
                })
            } */}

            <button onClick={()=>dispatch(getPages(currentePage-1))}>{"<"}</button>
            <button><p>{currentePage}</p></button>
            <button onClick={()=>dispatch(getPages(currentePage+1))}>{">"}</button>
        </div>
    )
}

export default Paginated