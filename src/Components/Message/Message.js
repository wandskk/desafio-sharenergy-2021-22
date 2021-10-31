import React from 'react';
import styles from './Message.module.css';

const Message = ({ msg, setMsg, className }) => {
  React.useEffect(() => {
    const myTimer = setTimeout(() => setMsg(null), 3000);
    return () => clearInterval(myTimer);
  }, []);

  return <p className={styles[className]}>{msg.text}</p>;
};

export default Message;
