import React from "react";
import "./styles.scss";
const Profile = ({ user }) => {
  return (
    <section>
      <h1>Detalhes do usuário</h1>
      <div className="user-details" style={{ display: "flex" }}>
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
