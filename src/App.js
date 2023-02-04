import { useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Provider from "./store/Provider";

import Start from "./pages/onboard/Start";
import StartPage2 from "./pages/onboard/StartPage2";
import StartPage3 from "./pages/onboard/StartPage3";
import StartPage4 from "./pages/onboard/StartPage4";
import SignUpPage from "./pages/signup-login/SignUpPage";
import EmailVerification from "./pages/signup-login/EmailVerification";
import PhoneVerification from "./pages/signup-login/PhoneVerification";
import ConsentPage from "./pages/signup-login/ConsentPage";
import WelcomePage from "./pages/signup-login/WelcomePage";

function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/StartPage2");
  //   }, 4000); //Function to navigate to the second page after 5secs
  // }, []);
  return (
    <Provider>
      <div className="font-Rubik">
        <Routes>
          <Route path="/" exact element={<Start />} />
          <Route path="/Startpage2" exact element={<StartPage2 />} />
          <Route path="/Startpage3" exact element={<StartPage3 />} />
          <Route path="/Startpage4" exact element={<StartPage4 />} />
          <Route path="/signup" exact element={<SignUpPage />} />
          <Route
            path="/emailverification"
            exact
            element={<EmailVerification />}
          />
          <Route
            path="/phoneverification"
            exact
            element={<PhoneVerification />}
          />
          <Route path="/consentpage" exact element={<ConsentPage />} />
          <Route path="/welcome" exact element={<WelcomePage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
