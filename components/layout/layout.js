import MainHeader from "./main-header";

export default function Layouts(props) {
    return(
        <>
        <MainHeader/>
        <main>
            {props.children}
        </main>
        </>
    )
    
}