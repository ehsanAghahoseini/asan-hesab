import Head from "next/head";
import { ContextState } from "../context/ContextMain";
import { useContext } from "react";
import { useRouter } from "next/router";

const Search: any = () => {
    return (
        <div className="search">
            <div className="search-icon">
                <svg x="0px" y="0px" viewBox="0 0 52.966 52.966">
                    <use xlinkHref='/assets/svg/search.svg#search' />
                </svg>
            </div>
            <input type={'text'} className="search-input" placeholder="جستجو در اپلیکیشن" />

        </div>
    )
}

export default Search;

