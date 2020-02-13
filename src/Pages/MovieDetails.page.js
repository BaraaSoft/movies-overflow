import React, { Component } from 'react';
import {
    Link,
    useParams,
    Redirect
} from "react-router-dom";


export const MovieDetailsPage = (props) => {
    const { movieId } = useParams();
    return (
        <div>
            <h3>Hi! there I'm the movie datails Page {movieId}</h3>
        </div>
    );
}
