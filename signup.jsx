import React from "react";

const Signup = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
