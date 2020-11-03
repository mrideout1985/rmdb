import React from 'react'
import { useParams } from "react-router-dom";
import { WholeTeam } from '../../../hooks/search/interface';
import { useGetTvCast } from "../../../hooks/search/useGetTvCast";
import { usePerson } from '../../../hooks/search/usePerson';
import styles from "./PersonPage.module.scss"


const PersonPage = () => {

    const {pid}: any = useParams() 
    const person = usePerson(pid)
 

    return (
   <div className={styles["container"]}>
			<div
				className={styles["movie-image"]}
				style={{
					backgroundImage: `
					url(https://image.tmdb.org/t/p/original${person?.profile_path})`,
				}}
			/>

			<div className={styles["actorbio"]}>
				<div className={styles["name"]}>
					<h1>{person?.name}</h1>
				</div>
				<div className={styles["header"]}>
					<h5>Bio</h5>
				</div>
				<div className={styles["biography"]}>
					<p>{person?.biography}</p>
				</div>
			</div>
		</div>

    )
}

export {PersonPage}
