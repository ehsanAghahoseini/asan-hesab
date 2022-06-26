import Head from "next/head";
import { ContextState } from "../context/ContextMain";
import { useContext } from "react";
import { useRouter } from "next/router";

const Header: any = () => {
    const Ctx = useContext(ContextState);
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Asan Hesab</title>
                <meta name="description" content="Asan hesab" />
                <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
            </Head>

            <div className="header">
                {router.pathname != '/' &&
                    <div className="header-back">{">"}</div>
                }
                {Ctx.headTitle}
            </div>
        </>
    )
}

export default Header;