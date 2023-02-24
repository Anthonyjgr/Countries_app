import React from "react";
import Style from "./paginated.module.css"

const Paginated = ({ countriesPerPage, countries, paginated }) => {
    const pageNumbers = [];

    for (let index = 0; index < Math.ceil(countries / countriesPerPage); index++) {
        pageNumbers.push(index + 1)
    }


    return (
        <div className={Style.container} >
            {
                pageNumbers &&
                pageNumbers.map(number => {
                    return (
                        <div className={Style.number} key={number}>
                            <p  onClick={() => paginated(number)}>{number}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Paginated