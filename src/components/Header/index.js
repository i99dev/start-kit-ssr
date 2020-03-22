import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function mapStateToProps({auth}) {
  return {auth};
}


const Index = ({auth})=>{
  console.log(auth);
  return (
    <div>
      <Link to={'/contact'}>
                Home
      </Link>

    </div>
  );
};

export default connect(
    mapStateToProps,
)(Index);
