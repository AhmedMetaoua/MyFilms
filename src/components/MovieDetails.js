import React, { useState, useEffect } from 'react'
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const MovieDetails = () => {
    const param = useParams();
    const [movie, setMovie] = useState([])

    //get  movie by details 
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en`)
        setMovie(res.data)
    }
    useEffect(() => {
        getMovieDetails();
    }, )
    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <img
                            className="img-movie w-30"
                            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                            alt="ascad"
                        />
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                Movie name : {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                Release date : {movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                Watched : {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                Rating : {movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story d-flex flex-column align-items-start">
                        <div className="text-end p-2 ">
                            <p className="card-text-title border-bottom">Story :</p>
                        </div>
                        <div className="text-start px-4">
                            <p className="card-text-story ">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="d-flex justify-content-center ">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary mx-2">
                             Back Home
                        </button>
                    </Link>
                    <a href={movie.homepage} >
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary">
                            Watch Film
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails
