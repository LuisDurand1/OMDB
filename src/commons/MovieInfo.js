import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Favorite } from "./Favorite";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Movies from "./Movies";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, favoriteMovies } from "../state/favorite";

const MovieInfo = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [user, setUser] = useState({});
  const dispatch= useDispatch()
  const { id } = useParams();
  const fav=useSelector((state)=>state.favorite)

  console.log(user, "ACA ESTA");

  const handleClick = () => {
    

   
  dispatch(addFavorite(  {userId:user.data.id,movie:dataMovie.Title,image:dataMovie.Poster}))
  .then(()=>dispatch(favoriteMovies(user.data.id)))
  };

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=d87da86a`)
      .then((res) => res.data)
      .then((movie) => setDataMovie(movie));
    axios
      .get("/api/auth/home")
      .then((data) => setUser(data))
      .catch(Error);


      
  }, [id]);

  console.log(dataMovie,"SDDSSDSDSDSD");

  if (user.data) {
    return (
      <div>
        <Movies />

        <div>
          <Row
            xs={1}
            md={2}
            className="g-4"
            style={{ justifyContent: "center" }}
          >
            <Col>
              <Card style={{ alignItems: "center" }}>
                <Card.Img
                  variant="top"
                  src={dataMovie.Poster}
                  style={{ height: "550px" }}
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title> Actors :{dataMovie.Actors}</Card.Title>
                  <Card.Title> Genre :{dataMovie.Genre}</Card.Title>

                  <Card.Text>{dataMovie.Plot}</Card.Text>

{/*                   {console.log(fav.some((data)=>(data.movie===dataMovie.Title )))}
 */}                    
                    {(fav?.some((data)=>(data.movie!==dataMovie.Title )))? <Button variant="dark" onClick={handleClick}>
                    Add to favorite
                  </Button>:null}
                 
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Row xs={1} md={2} className="g-4" style={{ justifyContent: "center" }}>
          <Col>
            <Card style={{ alignItems: "center" }}>
              <Card.Img
                variant="top"
                src={dataMovie.Poster}
                style={{ height: "550px" }}
              />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title> Actors :{dataMovie.Actors}</Card.Title>
                <Card.Title> Genre :{dataMovie.Genre}</Card.Title>

                <Card.Text>{dataMovie.Plot}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MovieInfo;
