import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  // initialize context hook
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  // pull out state XXX, and use setXXX as the action, initial value in brackets
  // create text state here, also create value of 'text'
  const [text, setText] = useState("");

  const onChange = (event) => setText(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alertContext.setAlert(`請輸入內容`, `light`);
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

export default Search;
