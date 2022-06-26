import Head from "next/head";
import { ContextState } from "../context/ContextMain";
import { useContext } from "react";
import { useRouter } from "next/router";
import RowComponent from "../layout/RowComponent";

const RealStateRow: any = () => {
    return (
        <>
            <RowComponent title="محاسبات املاک" />
        </>
    )
}

export default RealStateRow;