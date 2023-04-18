import React from "react";
import Header from "./Components/Header";
import LocalLinks from "./Components/LocalLinks";
import Table from "./Components/Table";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div>
            <Header/>
            <LocalLinks/>
            <Table/>
            <Footer/>
        </div>
    );
};

export default App;
