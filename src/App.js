import { Route, Switch, Redirect } from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import NewBook from "./pages/NewBook";
import BookDetail from "./pages/BookDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import About from "./pages/AboutPage";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/books" exact>
          <AllBooks />
        </Route>
        <Route path="/books/:bookId">
          <BookDetail />
        </Route>
        <Route path="/new-book">
          <NewBook />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/*  <Route path="/three-dim" exact>
          <ThreeDim />
        </Route> */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
