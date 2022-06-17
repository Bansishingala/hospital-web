import React from 'react';
import {  Card ,CardBody ,CardSubtitle  ,CardText , CardTitle ,Button} from "reactstrap";

function List({Data,getId}) {
    return (
        <div>{
            Data.map((o , i )=> {
                return(
                <Card>{o.id}
                <CardBody>
                    <CardTitle tag="h5">
                        {o.expiry}
                       
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                        
                    > 
                        {o.name}
                    </CardSubtitle>
                    <CardText>
                        {o.price}
                    </CardText>
                    {o.quantity}
                </CardBody>
                <Button onClick={() => getId(o.id)}>Medicines</Button>
            </Card>
                )
          })
            }          
        </div>
    );
}

export default List;