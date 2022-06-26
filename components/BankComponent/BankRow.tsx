import Head from "next/head";
import { ContextState } from "../context/ContextMain";
import { useContext } from "react";
import { useRouter } from "next/router";
import RowComponent from "../layout/RowComponent";

const BankRow: any = () => {
    return (
        <>
            <RowComponent title="محاسبات بانکی" />
        </>
    )
}

export default BankRow;