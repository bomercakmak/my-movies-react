import React from 'react';

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
                        <button className="btn btn-md btn-danger" 
                        style ={{float:"right"}}>Add Movie

                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;