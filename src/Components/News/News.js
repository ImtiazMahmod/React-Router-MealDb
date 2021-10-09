import React from 'react';
import { Card, Col } from 'react-bootstrap';

const News = (props) => {
    const {title,author,urlToImage,description}= props.news
    return (  
  
    <Col>
      <Card className="p-3 m-2">
        <Card.Img rounded className="rounded" variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {author}
          </Card.Text>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  
    );
};

export default News;