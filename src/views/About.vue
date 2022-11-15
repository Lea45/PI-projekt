<template>
<div id="parent1">
  <!------------------------------ LOCATION MAP ----------------------------------------->
    <div id="first1">
      <div id="all">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.6621182906197!2d18.18921371447827!3d45.71781482450753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475d3f729b5dcda3%3A0x96716a7ad2d8f919!2sVenoseva%20ul.%2046A%2C%2031543%2C%20Rakitovica!5e0!3m2!1shr!2shr!4v1668299967136!5m2!1shr!2shr" 
         allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
<!------------------------------ CHAT BOX ----------------------------------------->
    <div id="second1">

      <main class="direct-message">
        <div class="nav">
          <h2>Chatting with ...</h2>
        </div>
        <h1>
          <img src="images/chat/coffee.png" class="favicon">
          <span>Caffe bar Palmero</span>
        </h1>

        <div class="messages">
          <div class="message to">
            <img src="images/chat/user.png" class="favicon">
            <span class="time">10 minutes ago</span>
            <p>Pozdrav!</p>
          </div>

          <div class="message to">
            <img src="images/chat/user.png" class="favicon">
            <span class="time">10 minutes ago</span>
            <p>Imam pitanje.</p>
          </div>

          <div class="message from">
            <img src="images/chat/coffee.png" class="favicon">
            <span class="time">7 minutes ago</span>
            <p>Pozdrav! Može i dva :) </p>
          </div>

          <div class="message to">
            <img src="images/chat/user.png" class="favicon">
            <span class="time">6 minutes ago</span>
            <p>Mogu li rezervirati dva stola za proslavu rođendana?</p>
          </div>

          <div class="message from">
            <img src="images/chat/coffee.png" class="favicon">
            <span class="time">2 minutes ago</span>
            <p>Naravno!</p>
          </div>

          <div class="message from">
            <img src="images/chat/coffee.png" class="favicon">
            <span class="time">1 minute ago</span>
            <p>Samo mi reci datum i koja dva stola želiš.</p>
          </div>

          <div class="message to">
            <img src="images/chat/user.png" class="favicon">
            <span class="time">1 minutes ago</span>
            <p>23.11</p>
          </div>

        </div>
  
        <div class="new">
            <textarea class="new-input"></textarea>
            <button type="submit" class="material-button">
                <i class="fa fa-comment" aria-hidden="true"></i>
                <span class="screen-reader-text">Send</span>
            </button>
        </div>

      </main>
    </div>
</div>
</template>


<style>
#parent1 {
  display: flex;
}

#first1 {
  width: 900px;
}

#second1 {
  flex: 1;
}
/*--------------------------------- LOCATION MAP ---------------------------------- */
#all {
    width: 100%;
    text-align: center;
}

iframe {
    width: 550px;
    height: 450px;
    margin: 200px auto;
}


/* -------------------------------------------- CHAT BOX ---------------------------------------------- */
.direct-message {
  padding: 1rem;
  margin: 3rem auto;
  width: 350px;
  background: #fefefe;
  border-radius: 3px;
  box-shadow: 1px 2px 3px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  overflow: hidden;
  background: #333333;
  transform: rotate3d(1, 1, 0.25, -25deg);
  -webkit-transition: all 0.3s ease;
  box-shadow: -3px 3px 0 3px #111, -30px 30px 15px rgba(0, 0, 0, 0.25);
}

.direct-message .nav {
  background: #064848;
  margin: -1rem -1rem 0;
  display: flex;
  padding: 0.5rem;
}

.direct-message .nav a {
  color: #086060;
}

.direct-message .nav a:hover {
  color: #88c410;
}

.direct-message .nav h2 {
  font-size: 0.5rem;
  font-weight: bold;
  text-transform: lowercase;
  text-align: center;
  width: 100%;
  color: #fefefe;
}

.direct-message h1 {
  background: #086060;
  margin: 0 -1rem 1rem;
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #fefefe;
}

.direct-message h1 .favicon {
  margin-right: 1rem;
  order: -1;
}

.direct-message:hover {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  transform: rotate3d(1, 1, 0, 0deg);
}

.direct-message .favicon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  order: 1;
}

.direct-message .message {
  width: 75%;
  margin-bottom: 1rem;
  padding-bottom: 1px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}

.direct-message .message .time {
  padding: 0 1rem;
  line-height: 50px;
  color: rgba(254, 254, 254, 0.982);
  font-size: 0.6rem;
  order: 2;
}

.direct-message .message.from {
  width: 100%;
  text-align: right;
  padding-left: 25%;
  justify-content: flex-end;
}

.direct-message .message.from .favicon {
  order: 3;
}

.direct-message .message p {
  order: 5;
  line-height: 1rem;
  padding: 0.5rem;
  padding-left: 1rem;
  background: #67950C;
  text-align: left;
  margin: 0;
  color: rgba(254, 254, 254, 0.95);
  font-size: 0.8rem;
  border-radius: 3px;
  width: 100%;
}

.direct-message .message.to + .message.to, .direct-message .message.from + .message.from {
  margin-top: -1rem;
}

.direct-message .message.to + .message.to .time, .direct-message .message.to + .message.to .favicon, .direct-message .message.from + .message.from .time, .direct-message .message.from + .message.from .favicon {
  display: none;
}

.direct-message .message.to + .message.from,
.direct-message .message.from + .message.to {
  margin-top: -1rem;
}

.direct-message .messages {
  margin: -1rem;
  padding: 1rem;
  max-height: 600px;
  overflow: hidden;
  box-shadow: inset 0 0 3px 5px rgba(0, 0, 0, 0.075);
}

.direct-message .new {
  margin: 1rem -1rem -1rem -1rem;
  background: #222;
  display: flex;
}

.direct-message .new .new-input {
  width: 100%;
  color: #fefefe;
  border-color: transparent;
  padding: 0.5rem;
  background: transparent;
  height: 100%;
  max-height: 3rem;
  overflow: hidden;
  outline: 0;
  transition: max-height 1s ease;
}

.direct-message .new .new-input:focus {
  max-height: 5rem;
  overflow-y: auto;
}

.direct-message .new .material-button {
  border-radius: 0;
  padding: 0.5rem 1rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

main h1:first-child, main h2:first-child, main h3:first-child, main h4:first-child, main h5:first-child, main h6:first-child {
  margin-top: 0;
}

main p {
  line-height: 1.4rem;
}

main p + p, main p:last-child {
  margin-bottom: 0;
}


input {
  transition: border-color 0.15s ease-in-out;
  margin: 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(51, 51, 51, 0.15);
  padding: 0.15rem;
  color: rgba(51, 51, 51, 0.95);
}

input:hover {
  color: #333333;
  border-color: rgba(51, 51, 51, 0.75);
}

input:focus {
  outline: none;
  border-bottom: 3px solid #333333;
  margin-bottom: -2px;
}

.material-button, .material-delete {
  transition: all 0.15s ease-in-out;
  background: #67950C;
  border: none;
  font-size: 0.9rem;
  line-height: 2rem;
  border-radius: 3px;
  color: #fefefe;
  box-shadow: 1px 1px 3px 0 rgba(51, 51, 51, 0.15);
  text-transform: uppercase;
  width: 35%;
}

.material-button:hover, .material-delete:hover {
  background: #a6ed1a;
  box-shadow: 1px 3px 3px 0 rgba(51, 51, 51, 0.15);
}

.material-button:active, .material-delete:active {
  top: -0.7rem;
  outline: 0;
  box-shadow: none;
}

.material-delete {
  font-size: 1rem;
  line-height: 1rem;
  height: 2rem;
  width: 2rem;
  top: 0;
  right: -1.5rem;
  transform: rotate(45deg);
  background: none;
  color: rgba(51, 51, 51, 0.15);
  box-shadow: none;
}

.material-delete:hover {
  background: rgba(51, 51, 51, 0.075);
  color: #fefefe;
  box-shadow: none;
}

.material-delete:active {
  background: transparent;
  top: 0;
}

.material-modal-button {
  cursor: pointer;
  background: transparent;
  border: 0;
  color: #466608;
}

.material-modal-button:hover {
  color: #67950C;
}
</style>