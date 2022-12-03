import { Card } from "react-bootstrap"

function BudgetCard({ name, amount, max }) {
    return(
        <Card>
            <Card.Body>
                <Card.Title>
                    <div>{name}</div>
                    <div>{amount} / {max}</div>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default BudgetCard