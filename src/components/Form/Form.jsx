import Button from '@mui/material/Button';

import styles from './Form.module.css';
const Form = ({inputText,click,handleSubmit}) => {
    
    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.input} type="text" name="search" id="search" onChange={click} value={inputText} required />
            <Button type='submit' variant="contained">
                Ask
            </Button>
            <Button variant="contained">
                Save
            </Button>
        </form>
    )
}

export {Form}