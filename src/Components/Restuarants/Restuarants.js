import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import Restuarant from '../Restuarant/Restuarant';

const Restuarants = () => {
    const [restaurants, setRestaurants] = useState([])
    const [searchText,setSearchText]= useState('')
    useEffect(() => {
       
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
        .then(data=> setRestaurants(data.meals))
    }, [searchText])
    
    const searchBox = (e) => {
        const searchTextValue = e.target.value
        
        setSearchText(searchTextValue)
    }
   
    return (
        <div>
          
          <InputGroup className="mb-3 w-75 mx-auto">
    <FormControl onChange={searchBox}
      placeholder="search your favorite food"
     
      
    />
   
  </InputGroup>
  
           <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {
                    restaurants?.map(restaurant => 
                        <Col>
                         <Restuarant
                            key={restaurant.idMeal}
                            restaurant={restaurant}
                            ></Restuarant>
                        </Col>
                        )
                }
          </Row>
        </div>
    );
};

export default Restuarants;