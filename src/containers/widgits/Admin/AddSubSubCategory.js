import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddSubCtegory extends Component {

    render() {
      return (
        <div>
            <div className="container">
                <div className="col-12 py-md-3 pl-md-5">
                    <div className="dropdown mb-3">
                      <select className="btn btn-primary dropdown-toggle" id="select-category">
                      </select>
                    </div>
                    <div className="dropdown mb-3">
                      <select className="btn btn-primary dropdown-toggle" id="select-sub-category">
                      </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Sub Category Name Alias</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Sub Sub Category Name" />
                    </div>
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AddSubCtegory);
