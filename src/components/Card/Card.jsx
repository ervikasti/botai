import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import styles from './Card.module.css';
const Card = ({ key, msg, from }) => {
    return (
        <div className={styles.card_container}>
            {from === 'Ai' ? (
                <img src="/ai_logo.svg" alt="ai" />
            ) : (<img src="/you_logo.svg" alt="you" />)}

            <div className={styles.card_container_details}>
                <h5>{from}</h5>
                <p>{msg}</p>
                <div className={styles.card_container_details_sub}>
                    <h6>time stamp</h6>
                    {from !== 'You' &&
                        <>
                            <div className={styles.thumbUp}><ThumbUpAltOutlinedIcon></ThumbUpAltOutlinedIcon></div>
                            <div className={styles.thumbDown}><ThumbDownOffAltOutlinedIcon></ThumbDownOffAltOutlinedIcon></div>
                        </>}
                </div>
            </div>
        </div>
    )
}

export { Card }