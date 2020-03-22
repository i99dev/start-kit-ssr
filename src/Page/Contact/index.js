import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FatchComment} from '../../redux/actions/index';

function mapStateToProps(state) {
  return {
    comment: state.comment,
  };
}

class Contact extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.FatchComment();
  }

  render() {
    console.log(this.props.comment)
    return (
      <div>
                THis Page
      </div>
    );
  }
}

export default connect(
    mapStateToProps, {FatchComment},
)(Contact);
