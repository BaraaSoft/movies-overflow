import React, { Component } from 'react';
import {
    Link,
    useParams,
    Redirect,
    useLocation
} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const MovieDetailsPage = (props) => {
    const { id } = useParams();
    let isMovies = useQuery().get('isMovies');


    return (
        <div>
            <h3>Hi! there I'm the movie datails Page {id}</h3>
            <h3> is this id for movie {isMovies == 'true' ? "YES" : "NO"}</h3>
        </div>
    );
}
