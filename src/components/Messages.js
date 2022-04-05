const Messages = ({ messages }) => {
  return (
    <div>
      {messages.map((element, index) => (
        <div key={index}>
          <p>{element.text}</p>
          <sup>{element.author}</sup>
        </div>
      ))}
    </div>
  );
};
export default Messages;
