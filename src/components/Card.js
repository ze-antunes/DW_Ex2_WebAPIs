import React from "react";


function Card({ cover, songName, albumName, artist, idLink, categoryLink, owner }) {
  return (
    <div className="card">
      <a className="card__link" href={(idLink && `/playlist/${idLink}`) || (categoryLink && `/category/${categoryLink}`)}>
        <img
          src={cover}
          alt="bruh"
          className="card__image"
        />
        <div className="card__information">
          <h4 className="card__title">
            <p className="card__artist">
              {artist}
              {owner}
            </p>
            <p>
              {songName}
              {albumName}
            </p>
          </h4>
        </div>
      </a>
    </div>
  );
}

export default Card;
