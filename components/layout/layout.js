import MainFooter from "./main-footer";
import MainHeader from "./main-header";

export default function Layouts(props) {
    return(
        <>
        {/* HEADER CONTENT */}
        <MainHeader>
            {/* MAIN CONTENT */}
            {props.children}
        </MainHeader>
        {/* FOOTER CONTENT */}
        <MainFooter/>
        </>
    )
    
}