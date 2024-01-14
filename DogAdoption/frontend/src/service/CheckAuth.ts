const token = localStorage.getItem('Jwt') || '';

const validToken = () => {
  console.log(token);
  return token !== '';
};

export default validToken;
