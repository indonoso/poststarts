import React, {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import SearchResults from "../components/SearchResults";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function Search() {
    const url = process.env.REACT_APP_BACKEND_SERVICE_URL
    const [query, setSearchField] = useState("");

    const [postcards, setPostCards] = useState({});

    const getPostcards = async () => {
        try {
            const response = await fetch(url  + '/search',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(
                        {query})
                }
            );
            const data = await response.json()
            setPostCards(data);
        } catch (e) {
            console.error(e.toString);
        }
    }
    const onInputChange = e => {
        setSearchField(e.target.value);
    }

    function checkResponse(data) {
        console.log(data)
        if (data.length > 0) {
            return (
                <SearchResults postcards={data}/>
            );
        }
        return (
            <p>No postcards were found</p>
        );
    }

    return (
        <>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <Form.Control
                            value={query} onChange={onInputChange}
                            placeholder=""
                            aria-label="search-input"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={getPostcards}>
                            Search
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row>{checkResponse(postcards)}</Row>
            </>
    );
}

export default Search;