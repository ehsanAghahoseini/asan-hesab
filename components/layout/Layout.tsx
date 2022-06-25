import ContextMain from "../context/ContextMain";
import Header from "./Header";

const Layout: any = ({ children }: any) => {
    return (
        <ContextMain>
            <div className="main">
                <Header />
                <div className="container">
                    {children}
                </div>
            </div>
        </ContextMain>
    )
}

export default Layout;