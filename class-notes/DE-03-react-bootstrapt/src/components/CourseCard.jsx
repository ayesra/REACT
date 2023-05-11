import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
//?react alaninda döngü olarak sadece "map" desteklernir, condition'lardan da sadece "ternary" desteklenir

const CourseCard = ({ data }) => {
    console.log(data);
    console.log(data[0].name);

    //!alttaki ilk return react'in ekrana bastirilan kismi
    return (
        <Container>
            <Row>
                {data.map(({ img, text, name }) => {
                    //!arrow(map) süslü kullandiginda return ister.
                    //!react'ta süslü koymayabilirsiniz ve o zaman return'e de ihtiyac olmaz
                    return (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>
                                        {text}
                                    </Card.Text>
                                    <Button variant="info">Detaylar</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}

            </Row>
        </Container>
    )
}

export default CourseCard