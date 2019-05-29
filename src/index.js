import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';
import ErrorPage from './ErrorPage';

class App extends React.Component {
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // Callback 1  - sucesso
            (position) => {
                // States só podem ser atualizados através dessa função!!!
                this.setState({ lat: position.coords.latitude });
            },
            // Callback 2 - erro
            (err) => {
                this.setState({ errorMessage: err.message });
                console.log(err);
            }
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <ErrorPage message={this.state.errorMessage}/>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Loading message="Please wait, or accept location request if you haven't" />;
    }

    // Precisa ter um render
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
