import {Link} from "react-router-dom";

export const Page2=()=>{
    return(
        <div>
            <h2>Page2</h2>
            <Link to="page2/100" >Url Parameter</Link>
            <br />
            <Link to="page2/500?name=hogehoge" >Query Parameter</Link>

        </div>
    )
}