const user = {
  name: 'Lucas',
  lastName: 'Costa',
};

function Header() {
  return (
    <h1>
      Olá,
      {' '}
      {`${user.name} ${user.lastName}`}
    </h1>
  );
}

export default Header;
