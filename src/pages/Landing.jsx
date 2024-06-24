import { useState } from 'react';
import style from './Landing.module.css';
import { Form } from '../components/Form/Form';
import { Chat } from '../components/Chat/Chat';
import sampleData from "../sampleData.json";
import Button from '@mui/material/Button';

let nextId = 0;
const Landing = () => {
  const appName = 'Bot Ai';

  const [inputText, setInputText] = useState('');
  const [disp, setDisp] = useState(false);

  const [chatList, setChatList] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);


  const [isHistoryActive, setIsHistoryActive] = useState(false);
  const handleInputText = (e) => {

    setInputText(e.target.value);
    // console.log(inputText);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(sampleData);
    const ans = sampleData.find((q) => { return q['question']?.toLocaleUpperCase() === inputText.toLocaleUpperCase() });
    // console.log(ans['response']);
    setDisp(true);
    setChatList([...chatList, { id: ++nextId, name: inputText, ans: ans?.response }])
    setInputText('');
    setIsHistoryActive(false);
  }

  const handleSave = (e) => {
    let copyChatHistory = JSON.parse(JSON.stringify(chatList));

    if (chatHistory.length == 0){
      setChatHistory(copyChatHistory);
    }
    else {
      const arr = [...copyChatHistory];
      console.log("New Chat : ",arr);
      let historyArr=[...chatHistory];
      console.log("OLD History : ",historyArr);
      arr?.flatMap(v=>historyArr.push(v));
      console.log("New history : ",historyArr);
      setChatHistory(historyArr);
    }
    
  }



  const handlePast = () => {
    setIsHistoryActive(true);
    setDisp(false);
    console.log('btn clicked')
  }

  const handleNewChat = () => {
    setChatList([]);
    setIsHistoryActive(false);
  }

  return (
    <div className={style.landing_container}>
      <div className={style.left_section}>
        <div className={style.left_section_detail}>
          <img src="/ai_logo.svg" alt='logo'></img>
          <p onClick={handleNewChat}>New Chat</p>
        </div>
        <Button variant="contained" onClick={handlePast}>
          Past Conversation
        </Button>
      </div>
      <div className={style.main_section}>
        <div className={style.main_section_app_name}>
          {appName}
        </div>
        <div>
          {disp &&
            <Chat question={chatList} />}
          {isHistoryActive && (
            <Chat question={chatHistory} from='History' />)}
        </div>
        <div className={style.main_section_input_field}>
          <Form inputText={inputText} click={handleInputText} handleSubmit={handleSubmit} save={handleSave} />
        </div>
      </div>
    </div>
  );
}

export { Landing }
