import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchId: ''
        }
    }
    componentDidUpdate(prevProps, prevState) {
        this.props.search(this.state.searchId)
    }

    handleChange = (event) => {
        this.setState({
            searchId: event.target.value
        })
    }

    render() {
        return (
            <>
                <div className="searchBar row">
                    <label >Search<input type="text" value={this.state.searchId} onChange={this.handleChange}></input></label>
                </div>
                {/* <button onClick={() => this.props.search(this.state.searchId)}><label>Seach</label></button> */}y

            </>
        )
    }
}

export default SearchBar
