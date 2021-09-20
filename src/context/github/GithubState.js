import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  ClEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  // call an action below, make a request to Github
  // then dispatch a type to reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search Github users
  const searchUsers = async (text) => {
    // sent up from Search.js
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };
  // Get a single user
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: GET_USER, payload: res.data });
  };
  // get user's repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: GET_REPOS, payload: res.data });
  };
  // clear users
  // clear users from state
  const clearUsers = () => dispatch({ type: ClEAR_USERS });
  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // return provider that wrap everything here inside
  return (
    <GithubContext.Provider
      // make props here available in the entire app
      value={{
        // value of 'context'
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
