const PASSWORD = process.env.TEST_PASSWORD || 'secret_sauce';

const USERS = {
  standard: { username: 'standard_user', password: PASSWORD },
  lockedOut: { username: 'locked_out_user', password: PASSWORD },
  wrongPassword: { username: 'standard_user', password: 'wrong_password' },
  noUsername: { username: '', password: PASSWORD },
};

module.exports = { USERS };
