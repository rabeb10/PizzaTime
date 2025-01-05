import React from "react";
const Account = () => {
  return (
    <div>
      <h1>Account Info</h1>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Account;
