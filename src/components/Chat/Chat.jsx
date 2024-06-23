import { Card } from "../Card/Card";


const Chat = ({ question, from }) => {
    return (
        <>
            <div>{from}</div>
            {question.map((value) =>(
                <>
                    <Card key={value.id} msg={value.name}></Card>
                    {value.ans ?
                        <Card key={'ans' + value.id} msg={value.ans}></Card> 
                        : <Card key={'ans' + value.id} msg='Sorry, no response found !'></Card>}
                </>

            ))}
        </>
    )

}

export { Chat }