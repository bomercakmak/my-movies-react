import React from 'react';
import {Link} from 'react-router-dom'

class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-10">
                        <input 
                            onChange={this.props.searchMovieProp} 
                            type="text" 
                            className="form-control" 
                            placeholder="Search Movie !"
                        ></input>
                    </div>
                    <div className="col-2">
                        <Link to="/add"
                        className="btn btn-md btn-danger" 
                        style ={{float:"right"}}>Add Movie

                        </Link>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;