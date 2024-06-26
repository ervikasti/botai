import { Card } from "../Card/Card";


const Chat = ({ question, from, handleChange, isHistoryActive }) => {
    return (
        <>
            <h3>{from}</h3>
            {question.map((value) => (
                <>
                    <Card id={'question' + value.id} msg={value?.name} from={'You'} time={value.time} ></Card>
                    {
                        value.ans ?
                            <Card id={value.id} msg={value.ans} from='Ai' feed={value.feedback} isHistoryActive
                                rating={value.rating} handleChange={handleChange} pageFrom={from} time={value.time}></Card>
                            :
                            <Card id={value.id} msg='Sorry, no response found !' from='Ai' isHistoryActive
                            rating={value.rating} handleChange={handleChange} pageFrom={from} time={value.time}></Card>
                    }
                </>

            ))}

        </>
    )

}

export { Chat }