import React from "react";
import './Support.css';

class Apply extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main className="main-support">
                    <h1> For Support, kindly fill in the form below </h1>

                    <form action="">
                        <input type="text" name="name" placeholder="Name" id=""/> <br/>
                        <input type="text" name="email" placeholder="Email Address"/> <br/>
                        <textarea type="text" name="message" className="message" placeholder="Kindly describe your challenge"></textarea>
                    </form>

                    <button className="submit-btn"> SEND </button>
                </main>
            </React.Fragment>
        )
    }

}

export default Apply;