import { Card } from "../Card/Card";


const Chat = ({ question, from }) => {
    return (
        <>
            <h3>{from}</h3>
            {question.map((value) =>(
                <>
                    <Card key={value.id} msg={value?.name} from={'You'}></Card>
                    {value.ans ?
                        <Card key={'ans' + value.id} msg={value.ans} from='Ai'></Card> 
                        : <Card key={'ans' + value.id} msg='Sorry, no response found !' from='Ai'></Card>}
                </>

            ))}
        </>
    )

}

export { Chat }