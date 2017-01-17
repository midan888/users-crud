import React from 'react';

class Layout extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <h1 className="text-center">Users CRM</h1>
                </header>
                    <div className="container">
                        {this.props.children}
                    </div>
                <footer>

                </footer>
            </div>
        )
    }
}

export default Layout;