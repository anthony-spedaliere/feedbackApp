import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";

import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import About from "../src/pages/About.jsx";
import { FeedbackProvider } from "./context/FeedbackContext.js";
import AboutIconLink from "./components/AboutIconLink.jsx";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm></FeedbackForm>
                  <FeedbackStats></FeedbackStats>
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIconLink></AboutIconLink>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
