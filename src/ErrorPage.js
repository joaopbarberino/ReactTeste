import './ErrorPage.css';
import React from 'react';

const ErrorPage = (props) => {
    return (


        <div className="ui one column centered grid background">
            <div className="content">
                <i className="massive icon ban" />
                <h1>
                    {props.message}
                </h1>

            </div>
        </div>
    );
}

ErrorPage.defaultProps = {
    message: "Something went wrong"
}

export default ErrorPage;