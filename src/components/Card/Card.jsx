import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import Face6OutlinedIcon from '@mui/icons-material/Face6Outlined';
import styles from './Card.module.css';
const Card = ({msg}) => {
    return (
        <div className={styles.card_container}>
            <Face6OutlinedIcon></Face6OutlinedIcon>
            <div className={styles.card_container_details}>
                <h5>You</h5>
                <p>{msg}</p>
                <div className={styles.card_container_details_sub}>
                    <h6>time stamp</h6>
                    <div className={styles.thumbUp}><ThumbUpAltOutlinedIcon></ThumbUpAltOutlinedIcon></div>
                    <div className={styles.thumbDown}><ThumbDownOffAltOutlinedIcon></ThumbDownOffAltOutlinedIcon></div>
                </div>
            </div>
        </div>
    )
}

export {Card}