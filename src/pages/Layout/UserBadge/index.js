import "./UserBadge.scss";

import React from "react";
import { API_URL } from "../../../constants";
import FallbackImage from "../../../assets/img/fallback.jpg";

export default function UserBadge(props) {
  const user = {
    name: "Alex",
    surname: "López",
    userName: "alopez",
    isAdmin: true,
    imageId: null
  };

  return (
    <div className="user-badge">
      <div className="user-badge-info">
        <span>
          {user.name} {user.surname}
        </span>
        <span className="user-badge-info__username">@{user.userName}</span>
      </div>
      <div className="user-badge-image">
        <img
          src={
            user.imageId ? `${API_URL}/files/${user.imageId}` : FallbackImage
          }
          alt="user"
        />
      </div>
    </div>
  );
}
