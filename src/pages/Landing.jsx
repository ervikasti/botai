import { useState } from 'react';
import style from './Landing.module.css';
import { Form } from '../components/Form/Form';
import { Chat } from '../components/Chat/Chat';
import sampleData from "../sampleData.json";

let nextId=0;
const Landing = ()=> {
  const appName = 'Bot Ai';  

  const [inputText, setInputText] = useState('');
  const [disp, setDisp] = useState(false);
  
  const [chatList,setChatList] = useState([]);
  const handleInputText = (e) =>{

    setInputText(e.target.value);
    // console.log(inputText);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sampleData);
    const ans = sampleData.find((q)=>{ return q['question']?.toLocaleUpperCase() == inputText.toLocaleUpperCase()});
    // console.log(ans['response']);
    setDisp(true);
    setChatList([...chatList,{ id: nextId++, name: inputText, ans:ans?.response }])
    setInputText('');
}

    // useEffect(()=>{

    // },[chatList])

  return (
    <div className={style.landing_container}>
        <div className={style.left_section}>div1 </div>
        <div className={style.main_section}>
            <div className={style.main_section_app_name}>
                {appName}
            </div>
            <div>
                { disp &&
                <Chat question={chatList}/>}
            </div>
            <div className={style.main_section_input_field}>
                <Form inputText={inputText} click={handleInputText} handleSubmit={handleSubmit}/>
            </div>
        </div>
    </div>
  );
}

export {Landing}
