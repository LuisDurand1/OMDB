import React from "react";
import useInput from "../hooks/useInput";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { deleteFavorite, favoriteMovies } from "../state/favorite";
import { Route, useLocation, useParams } from "react-router";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Favorite = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.favorite);
  console.log(useLocation(), "ACA");
  const location = useLocation();

  const handleClick = (e) => {
    dispatch(
      deleteFavorite({ data: { id: Number(e.target.id), userId: user.id } })
    ).then(() => dispatch(favoriteMovies(user.id)));
  };

  return (
    <Container>
      <Row>
        <div
          id="card_container"
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {data[0]
            ? data.map((movie, i) => {
                return (
                  <Col sm>
                    <Card style={{ width: "18rem" }} key={i}>
                      <Card.Img variant="top" src={movie.image} />
                      <Card.Body>
                        <Card.Title> {movie.movie} </Card.Title>
                        <Button
                          variant="primary"
                          id={movie.id}
                          onClick={handleClick}
                        >
                          <Card.Text></Card.Text>
                          Remove to favorite
                        </Button>
                      </Card.Body>
                    </Card>
                    <br></br>
                  </Col>
                );
              })
            : null}
        </div>
      </Row>
    </Container>
  );
};
