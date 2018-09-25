import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchUsers as fetchFunction } from "../redux/actions/users";

const fetchUsers = WrappedComponent => {
  class FetchUsersOnMount extends Component {
    componentDidMount = () => {
      this.props.fetchUsers();
    };

    render() {
      return <WrappedComponent />;
    }
  }

  FetchUsersOnMount.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = {
    fetchUsers: fetchFunction,
  };

  return connect(
    undefined,
    mapDispatchToProps
  )(FetchUsersOnMount);
};

export default fetchUsers;
