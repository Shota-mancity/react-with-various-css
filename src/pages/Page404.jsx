import {Link} from "react-router-dom";

export const Page404=()=>{
    return(
        <div>
            <h2>404: Page Not Found</h2>
            <Link to="/" >Home</Link>
        </div>
    )
}