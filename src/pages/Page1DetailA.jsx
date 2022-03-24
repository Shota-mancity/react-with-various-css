import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  const history=useHistory();
  console.log(state);

  const onClickBackButton=()=>{
      history.goBack();
  }

  return (
    <div>
      <h2>Page1DetailA</h2>
      <button onClick={onClickBackButton} >back</button>
    </div>
  );
};
