import { useEffect, useRef, useState } from "react";
import { useMessageStore } from "../store/useMessageStore";
import { Send, Smile } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

const MessageInput = ({ match }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);

  const { sendMessage } = useMessageStore();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(match._id, message);
      setMessage("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex relative items-center bg-purple-100 p-2 rounded-lg shadow-lg"
    >
      <button
        type="button"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 hover:text-pink-500 focus:outline-none"
        aria-label="Toggle emoji picker"
      >
        <Smile size={24} />
      </button>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow p-4 pl-12 rounded-l-lg border-2 border-purple-500 
        focus:outline-none focus:ring-2 focus:ring-pink-300"
        placeholder="Type a message..."
        maxLength={200}
      />
      <span className="text-gray-500 ml-2">{message.length}/200</span>

      <button
        type="submit"
        className="bg-pink-500 text-white p-3 rounded-r-lg 
        hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-300"
        aria-label="Send message"
      >
        <Send size={24} />
      </button>

      {showEmojiPicker && (
        <div ref={emojiPickerRef} className="absolute bottom-24 left-4 z-10">
          <EmojiPicker
            onEmojiClick={(emojiObject) => {
              setMessage((prevMessage) => prevMessage + emojiObject.emoji);
            }}
          />
        </div>
      )}
    </form>
  );
};

export default MessageInput;
