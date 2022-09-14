import React from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from "./router/Home";
import UpdatePage  from "./router/UpdatePage";
import ProductPage from "./router/ProductPage";
import {ProductContextProvider } from "./context/ProductContext";

const App = () =>{
    return(
    <div className="container">
        <ProductContextProvider>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product/:id/update" component={UpdatePage}/>
                <Route exact path="/product/:id" component={ProductPage}/>
            </Switch>
        
        </Router>
        </ProductContextProvider>

    </div>
    );
};

export default App;