import React, { useEffect, useState } from "react";
import "./app.styles.scss";
import Spinner from "./components/spinner.component";
import Main from "./components/main.component";
import Header from "./components/header.component";
import GetUsers from "./async/fetch";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

const App = () => {
  const [ripple, setRipple] = useState({
    rippleOff: false,
  });
  const [users, setUsers] = useState({
    users: [],
    loaded: false,
  });

  useEffect(() => {
    if (!users.loaded) {
      const runEffect = async () => {
        const newUsers = await GetUsers();
        setUsers({ users: newUsers.data, loaded: true });
      };
      runEffect();
      window.addEventListener("scroll", handleScroll);
    }
    // eslint-disable-next-line
  }, []);

  setTimeout(() => {
    setRipple({ rippleOff: true });
  }, 3000);

  const handleScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      M.toast({ html: "no more users!" });
    }
  };

  return (
    <div className="App">
      {!ripple.rippleOff && users.users ? (
        <Spinner />
      ) : (
        <div className="users__box" onScroll={handleScroll}>
          <Header/>
          {users.users.map((user) => (
            <Main
              key={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              image={user.avatar}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
