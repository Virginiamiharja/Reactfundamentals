import React from 'react'

class ProfileScreen extends React.Component {
    render() {
        return(
            <div>
                Welcome, {this.props.match.params.username}
            </div>
        )
    }
}

export default ProfileScreen