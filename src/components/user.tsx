const user = {
  name: 'Lucas',
  lastName: 'Costa',
};

function User() {
  return <span>{` ${user.name} ${user.lastName}`}</span>;
}

export default User;
