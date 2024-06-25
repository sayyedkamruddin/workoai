const singleUserResponse = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  age:user.age,
  city:user.city,
  zipCode:user.zipCode
});

const multipleUsersResponse = (users) =>
  users.map((user) => singleUserResponse(user));

module.exports = {
  singleUserResponse,
  multipleUsersResponse,
};
