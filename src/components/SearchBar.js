import React from 'react'

class SearchBar extends React.Component {
    state = {term:''}

    onFormSubmit = e =>{
        e.preventDefault()

        this.props.onSearch(this.state.term)
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" placeholder="Search..." value={this.state.term} onChange={e=>this.setState({term:e.target.value}) }/>  {/* WE do this so that we can get the search value as a state so that we can use it send it to other componenets */}
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar