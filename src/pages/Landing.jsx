import { useState } from 'react';
import style from './Landing.module.css';
import { Form } from '../components/Form/Form';
import { Chat } from '../components/Chat/Chat';
import sampleData from "../sampleData.json";
import Button from '@mui/material/Button';
import { AppBar } from '@mui/material';

let nextId = 0;
const Landing = () => {
  const appName = 'Bot Ai';

  const [inputText, setInputText] = useState('');
  const [disp, setDisp] = useState(false);

  const [chatList, setChatList] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);


  const [isHistoryActive, setIsHistoryActive] = useState(false);

  const [isReview, setReview] = useState([]);

  const handleInputText = (e) => {

    setInputText(e.target.value);
    // console.log(inputText);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(sampleData);
    let ans ='';
    const result = sampleData.find((q) => { return q['question']?.toLocaleUpperCase() === inputText.toLocaleUpperCase() });
    if(result){
      ans = result.response;
    }
    else{
      ans = null
    }
    // console.log(ans['response']);
    setDisp(true);
    setChatList([...chatList, { id: ++nextId, name: inputText, ans: ans?ans:'Sorry, no response found' }])
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
    // console.log('btn clicked')
  }

  const handleNewChat = () => {
    setChatList([]);
    setIsHistoryActive(false);
  }

  const handleChange = (data) => {
    let newList = [...chatList];
    console.log('INSIDE CHANGE')
    let id = data.id;

    const currentIndex = chatList.findIndex( (d)=> d.id=== id);

    const updateIndex = {...chatList[currentIndex],rating:data.rate, feedback:data.feedback};

    const newIndex = [...chatList.slice(0,currentIndex), updateIndex, ...chatList.slice(currentIndex+1)];

    setChatList(newIndex);

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
            <Chat question={chatList} handleChange={handleChange}/>}
          {isHistoryActive && (
            <Chat question={chatHistory} from='History' isHistoryActive/>)}
        </div>
        <div className={style.main_section_input_field}>
          <Form inputText={inputText} click={handleInputText} handleSubmit={handleSubmit} save={handleSave} />
        </div>
      </div>
    </div>
  );
}

export { Landing }
