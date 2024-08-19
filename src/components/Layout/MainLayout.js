import Header from "../common/Header";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};
export default MainLayout;
