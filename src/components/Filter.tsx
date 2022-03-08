import React, { Component } from 'react';

class Filter extends Component<any, any> {
    render() {
        console.log("this.props.Categories")
        console.log(this.props.categories)
        return (
            <div className="row">
                <div className="col-md-4">
                    {this.props.count} products found.
                </div>
                <div className="col-md-4">
                    <label>
                        Order by
                        <select className="form-control" name="sortBy" value={this.props.sort}
                            onChange={this.props.handleChangeSort} >
                            <option value="">Select</option>
                            <option value="lowest">Lowest to highest</option>
                            <option value="highest">Highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label>
                        Filter Category
                        <select className="form-control" name="categories" value={this.props.category}
                            onChange={this.props.handleChangeCategory}>
                            <option value="">Select</option>
                            {this.props.categories.map((item) => {
                                return <option key={item} value={item}>{item}</option>
                            })}
                        </select>
                    </label>
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }
}

export default Filter;