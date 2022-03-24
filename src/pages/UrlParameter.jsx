import {useParams, useLocation} from "react-router-dom";

export const UrlParameter = () => {
    const {search}=useLocation()
    const query=new URLSearchParams(search)
    const {id}=useParams()
  return (
    <div>
      <h2>UrlParameter</h2>
      <p>Parameter is {id}</p>
      <p>Query Parameter is {query.get("name")}</p>
    </div>
  );
};
