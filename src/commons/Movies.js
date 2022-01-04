import axios from "axios";
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import MovieInfo from "./MovieInfo";
import useInput from "../hooks/useInput";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const Movies = ({ data }) => {
  if (!data) return Error;

  return (
    <Container>
      <Row>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {data.map((movie, i) => {
            return (
              <div>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Link to={`/movie/${movie.imdbID}`}>
                      <Card.Img variant="top" src={movie.Poster} />{" "}
                    </Link>
                    <Link
                      to={`/movie/${movie.imdbID}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Card.Body>
                        <Card.Title> {movie.Title} </Card.Title>
                        <Card.Text>{movie.Year}</Card.Text>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
};

export default Movies;
