import React from "react";
import "./styles.scss";
const Profile = ({ user }) => {
  return (
    <section data-testid="profile">
      <div className="user-details">
        <img
          className="user-avatar"
          src={user?.avatar_url}
          alt={user?.name}
        ></img>
        <div className="user-info">
          <p className="user-info-name">{user?.name}</p>
          <p>{user?.bio}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
