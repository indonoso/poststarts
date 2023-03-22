import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Result from "./Result";

function SearchResults({postcards}) {
    return (
        <Row xs={1} md={4} className="g-4">
            {postcards.map((postcard) => (
                <Col md={3}>
                    <Result postcard={postcard}/>
                </Col>
            ))}

        </Row>
    );
}

export default SearchResults;