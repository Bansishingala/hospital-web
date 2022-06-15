import React from 'react';
import { Card ,CardBody ,CardSubtitle  ,CardText , CardTitle} from "reactstrap";

function List({Data}) {
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
            </Card>
                )
          })
            }          
        </div>
    );
}

export default List;