import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MealDetails = () => {
    const [details, setDetails]= useState([])

    const { mealId } = useParams()
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
        .then(data =>setDetails(data.meals))
    }, [url])
    console.log(details)

    const { strMeal, strInstructions, strMealThumb, strIngredient1, strIngredient2, strIngredient3 } = details[0]

    console.log(strMeal)
    return (
        <Card className="mx-auto" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={strMealThumb} />
  <Card.Body>
    <Card.Title>{strMeal}</Card.Title>
    <Card.Text>
     {strInstructions?.slice(0,200)}...
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{strIngredient1}</ListGroupItem>
    <ListGroupItem>{strIngredient2}</ListGroupItem>
    <ListGroupItem>{strIngredient3}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Link to="/restaurants">All Meals</Link>
    <Card.Link href="/restaurants">Another Link</Card.Link>
  </Card.Body>
</Card>
    );
};

export default MealDetails;