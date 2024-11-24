import React, {useState} from "react";
import "./styles.css";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUserAlt, FaEllipsisH } from "react-icons/fa";

const App = () => {
  const users = [
    {
      name: "Jeff Bezos",
      id: "amazonCEO",
      src: "https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg",
    },
    {
      name: "Kim Kardashian",
      id: "kimkard",
      src: "https://www.creativefabrica.com/wp-content/uploads/2022/10/15/Beautiful-Avatar-Kim-Kardashian-41693455-1.png",
    },
    {
      name: "Donald Trump",
      id: "realDonaldTrump",
      src: "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_200x200.jpg",
    },
  ];
  const [text, setText] = useState('');
  const [twits, setTwits] = useState([]);
  console.log(twits)

  const newTwit = (text) => {
    setTwits([...twits, {name: 'Tom Cruise', id: 'top-gun', text: text}]);
    setText('');
  }

  return (
    <div className="twitter-clone-app">
      <aside className="sidebar">
        <div className="sidebar-menu">
          <h1 className="logo">X</h1>
          <ul>
            <li>
              <FaHome className="nav-icon" /> Home
            </li>
            <li>
              <FaHashtag className="nav-icon" /> Explore
            </li>
            <li>
              <FaBell className="nav-icon" /> Notifications
            </li>
            <li>
              <FaEnvelope className="nav-icon" /> Messages
            </li>
            <li>
              <FaBookmark className="nav-icon" /> Bookmarks
            </li>
            <li>
              <FaListAlt className="nav-icon" /> Lists
            </li>
            <li>
              <FaUserAlt className="nav-icon" /> Profile
            </li>
            <li>
              <FaEllipsisH className="nav-icon" /> More
            </li>
          </ul>
        </div>
      </aside>

      <main className="feed">
        <header className="feed-header">
          <h2>Home</h2>
        </header>
        <div className="tweet-input-box">
          <img
            className="profile-pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMVFssu2k0s4MJMwMXy4u5uwjVA45a-mJCQ&s"
            alt="Profile"
          />
          <textarea placeholder="What's happening?" className="tweet-input" value={text} onChange={(e) => {setText(e.target.value)}} />
            <button className="tweet-button" onClick={() => newTwit(text)}>Tweet</button>
        </div>
        <div className="tweets">
          {users.map((user, index) => (
            <div key={index} className="tweet-card">
              <img className="profile-pic" src={user.src} alt="User" />
              <div className="tweet-content">
                <h4>
                  {user.name} <span>@{user.id} · 1h</span>
                </h4>
                <p>Liverpool, please, win UCL!!!</p>
              </div>
            </div>
          ))}
          {twits.map((obj, index) => {
            return <div key={index} className="tweet-card">
              <img className="profile-pic" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMVFssu2k0s4MJMwMXy4u5uwjVA45a-mJCQ&s' alt="User" />
              <div className="tweet-content">
                <h4>
                  {obj.name} <span>@{obj.id} · 1h</span>
                </h4>
                <p>{obj.text}</p>
              </div>
            </div>
          })}
        </div>
      </main>

      <aside className="right-sidebar">
        <div className="trending-box">
          <h3>Trends for you</h3>
          <ul>
            <li>#ReactJS</li>
            <li>#JavaScript</li>
            <li>#HardWork</li>
          </ul>
        </div>
        <div className="who-to-follow">
          <h3>Who to follow</h3>
          <ul>
            <li>
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="profile-pic"
              />
              <div>
                <h4>Lebron James</h4>
                <span>@lebron</span>
              </div>
              <button className="follow-button">Follow</button>
            </li>
            <li>
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="profile-pic"
              />
              <div>
                <h4>moSalah</h4>
                <span>@salah</span>
              </div>
              <button className="follow-button">Follow</button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default App;
