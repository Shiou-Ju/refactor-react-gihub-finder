import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ setAlert }) => {
  // initialize context hook
  const githubContext = useContext(GithubContext);

  // pull out state XXX, and use setXXX as the action, initial value in brackets
  // create text state here, also create value of 'text'
  const [text, setText] = useState("");

  const onChange = (event) => setText(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      setAlert(`請輸入內容`, `light`);
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="搜尋用戶"
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="搜尋" className="btn btn-dark btn-block" />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          清除搜尋結果
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
