const UserStatus = ({ loggedIn, isAdmin }) => {
  if (!loggedIn) {
    return <h2>Plse Login First</h2>;
  }
  if (loggedIn && isAdmin) {
    return <h1>Wellcome Admin</h1>;
  } else return <h2>User</h2>;
};
export default UserStatus;
