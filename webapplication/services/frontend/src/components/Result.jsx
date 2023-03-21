import Card from 'react-bootstrap/Card';

function Result({postcard}) {
    return (
        <Card>
            <Card.Img variant="top" max-height={"100px"} width={"auto"} src={postcard.public_url}/>
            <Card.Body>
                <Card.Text>
                    {postcard.title}
                </Card.Text>
            </Card.Body>
        </Card>


    );
}

export default Result;