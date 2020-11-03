import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TrendingPeopleResults } from "../../hooks/search/interface";
import { ActorModal } from "../Modal/ActorModal";
import styles from "./CastImage.module.scss";

interface PersonImageProps {
  element: React.ReactNode;
}

const CastImage: React.FC<PersonImageProps> = ({ element }) => {
  let el = element as TrendingPeopleResults;

  return (
    <>
      {el?.profile_path === undefined ? null : (
        <Link to={`/person-page/${el?.id}`} className={styles["container"]}>
          <img
            src={
              el !== undefined
                ? `https://image.tmdb.org/t/p/original${el?.profile_path}`
                : ``
            }
            alt=""
          />

         </Link>
      )}
    </>
  );
};

export { CastImage };
