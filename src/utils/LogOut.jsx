const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  location.reload();
};
export default Logout;
