import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "./Title";

class Default extends Component{
    render() {
        return(
            <div className="py mt-lg-5 p-lg-5">
                <div className="container">
                    <Title title="Error 404 - Page not found :("/>
                </div>
            </div>
        );
    }
}
export default Default;