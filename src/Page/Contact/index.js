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

  renderList() {
    return this.props.comment.slice(0, 2).map((e) => {
      return (
        <li key={e.id}>
          {e.body}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

 function loadData(store) {
  return store.dispatch(FatchComment());
}


export default {
  loadData,
  component: connect(
      mapStateToProps, {FatchComment},
  )(Contact),
};
