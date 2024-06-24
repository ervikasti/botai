import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { useState } from "react";
import styles from './Card.module.css';
import { BasicRating } from '../rating/BasicRating';
import FeedBackModal from '../FeedbackModal/FeedbackModal';
const Card = ({ id, msg, from, handleChange, feed, rating, isHistoryActive,pageFrom }) => {
    const [hidden, setHidden] = useState(true);
    const [ratingIsActive, setRatingIsActive] = useState(false);
    const [feedbackIsActive, setfeedBackIsActive] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [rate, setRate] = useState(0);
    // const [value, setValue] = React.useState(2);

    const handleThumbsUP = () => {
        setRatingIsActive(true);
    }

    const handleFeedback = () => {
        setfeedBackIsActive(!feedbackIsActive);
    }

    const handleResponse = (resp) => {
        console.log(resp);
        setFeedback(resp);
        handleChange({ id: id, feedback: resp, rate: rate })
    }

    const handleRating = (val) => {
        setRate(val);
        handleChange({ id: id, feedback: feedback, rate: val });
    }

    console.log(pageFrom==='History');

    return (

        <div key={id} className={styles.card_container}>
            {from === 'Ai' ? (
                <img src="/ai_logo.svg" alt="ai" />
            ) : (<img src="/you_logo.svg" alt="you" />)}

            <div className={styles.card_container_details}>
                <h5>{from}</h5>
                <p>{msg}</p>
                <div className={styles.card_container_details_sub}>
                    <h6>time stamp</h6>

                    {/* {from === 'Ai' &&
                        <div className={styles.response}
                            onMouseEnter={() => setHidden(false)}
                            onMouseLeave={() => setHidden(true)}>
                            {hidden ? null : (<>
                                <div className={styles.thumbUp} onClick={handleThumbsUP}><ThumbUpAltOutlinedIcon></ThumbUpAltOutlinedIcon></div>
                                <div className={styles.thumbDown} onClick={handleFeedback}><ThumbDownOffAltOutlinedIcon></ThumbDownOffAltOutlinedIcon></div>
                            </>)}
                        </div>} */}


                    {pageFrom==='History' ? null :
                        <>
                            {from === 'Ai' &&
                                <div className={styles.response}
                                    onMouseEnter={() => setHidden(false)}
                                    onMouseLeave={() => setHidden(true)}>
                                    {hidden ? null : (<>
                                        <div className={styles.thumbUp} onClick={handleThumbsUP}><ThumbUpAltOutlinedIcon></ThumbUpAltOutlinedIcon></div>
                                        <div className={styles.thumbDown} onClick={handleFeedback}><ThumbDownOffAltOutlinedIcon></ThumbDownOffAltOutlinedIcon></div>
                                    </>)}
                                </div>}
                        </>
                    }

                </div>

                {ratingIsActive && <BasicRating handleRating={handleRating} value={rate} />}
                {feedbackIsActive && <FeedBackModal handleFeedBack={handleResponse} />}
                {feedback && <div>Feedback: {feedback}</div>}
                {/* {rating && isHistoryActive (<BasicRating value={rating} />)}  */}
                {pageFrom==='History' && (<>
                    <BasicRating value={rating} pageFrom={pageFrom}/>
                    <div>Feedback: {feed}</div>
                </>)}
                
            </div>
        </div>
    )
}

export { Card }