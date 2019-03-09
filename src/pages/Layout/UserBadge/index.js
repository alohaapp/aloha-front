import "./UserBadge.scss";

import React from "react";
import { API_URL } from "../../../constants";
import FallbackImage from "../../../assets/img/fallback.jpg";

export default function UserBadge(props) {
  const user = JSON.parse(window.sessionStorage.getItem("aloha"));

  return (
    <div className="user-badge">
      <div className="user-badge-info">
        <span>
          {user.name} {user.surName}
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
