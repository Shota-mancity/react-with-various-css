import React from "react";
import { Router } from "./atmicDesignComponents/router/Router";
import { UserProvider } from "./providers/UserProvider";
import { RecoilRoot } from "recoil";

const App4 = () => {
  return (
    <>
      <RecoilRoot>
        <UserProvider>
          <Router />
        </UserProvider>
      </RecoilRoot>
    </>
  );
};

export default App4;
