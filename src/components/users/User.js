import React, { Fragment, useEffect } from "react";
import { Spinner } from "../layout/Spinner";
import { Repos } from "../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user, loading, repos, getUser, getUserRepos, match }) => {
  // change componentDidMount in useEffect way
  // use [] to give conditions for useEffect to run
  // otherwise it will keep updating the components as a loop
  // empty [] is to mimic componentDidMount
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // to disable dependemcy warning
    //eslint-disable-next-line
  },   []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    company,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        返回搜尋結果
      </Link>
      是否正在找工作？{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>地點：{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>簡介</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            參觀Github頁面
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>用戶名稱：</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>公司：</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>個人網站 ：</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">追蹤人數：{followers}</div>
        <div className="badge badge-success">追蹤對象：{following}</div>
        <div className="badge badge-light">公開Repo：{public_repos}</div>
        <div className="badge badge-dark">公開Gist：{public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};

export default User;
