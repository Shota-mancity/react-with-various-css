import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../pages/Top";
import { Users } from "../pages/Users";
import { DefaultLayout } from "../templates/DefaultLayout";
import { HeaderOnly } from "../templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
