import React, { useContext } from "react";
import { RepoItem } from "./RepoItem";
import GithubContext from "../../context/github/githubContext";

export const Repos = () => {
  // initialize context hook
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;

  return repos.map((repo) => {
    return <RepoItem repo={repo} key={repo.id} />;
  });
};
