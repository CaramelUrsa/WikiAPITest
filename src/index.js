import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class Testap extends React.Component {
    state = {
        isLoading: true,
        users: [],
        error: null
    }

    render() {
        const { isLoading, users, error } = this.state;

        return (
            <React.Fragment>
                <h1>Random User</h1>
                {error ? <p>{error.message}</p> : <p>No Error</p>}

                {!isLoading ? (
                    users.map(user => {
                        const { username, name, email } = user;
                        return (
                            <div key={username}>
                                <p>Name: {name}</p>
                                <p>Email Address: {email}</p>
                                <hr />
                            </div>
                        );
                    })
                ) : (
                    <h3>Loading...</h3>
                )}
            </React.Fragment>
        );
    }
    fetchUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(data =>
            this.setState({
                users: data,
                isLoading: false,
            })
            )
            .catch(error => this.setState({error, isLoading: false})
            );
    }
    componentDidMount() {
        this.fetchUsers();
    }
}

// =======

ReactDOM.render(
    <Testap />,
    document.getElementById('root')
);