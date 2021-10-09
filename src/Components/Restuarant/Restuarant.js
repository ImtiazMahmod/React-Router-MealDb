import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';

const Restuarant = (props) => {

    const history = useHistory()
    const handleClick = () => {
        history.push(`/restaurant/${idMeal}`)
    }
    const {idMeal,strMeal,strInstructions,strMealThumb} = props.restaurant
    return (

        <Card>
        <Card.Img className="p-4 rounded" variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
          {strInstructions.slice(0,100)}...
                </Card.Text>
                <Link to={`/restaurant/${idMeal}`}>Meal Detail</Link>
                <Link to={`/restaurant/${idMeal}`}>
                <button>Details</button>
                </Link>
                <button onClick={handleClick}>Show Details</button>
                <Button variant="secondary" size="lg" active>Button</Button>
                
        </Card.Body>
      </Card>
        
    );
};

export default Restuarant;