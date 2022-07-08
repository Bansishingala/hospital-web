import React, { useEffect, useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function List_apt(props) {
    const [ Data , setData] = useState([])

    return (
        <div>{
            Data.map((o, l) => {
                return (
                    <Card className='col-3 mt-5 ms-5 me-5 mb-5 border-dark  '>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button className=' btn-dark'>Button</Button>
                        </CardBody>
                    </Card>
                )
            })

        }

        </div>
    );
}

export default List_apt;