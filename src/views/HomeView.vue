<template>
  <!--link za social media ikone--->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <div id="parent">
    <!------------------------------ SOCIAL MEDIA ----------------------------------------->
    <div id="first">
      <div class="media">
        <a
          href="https://instagram.com/cb_palmero?igshid=YmMyMTA2M2Y="
          class="link"
          target="_blank"
        >
          <i class="fa fa-instagram instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100087867435765"
          class="link"
          target="_blank"
        >
          <i class="fa fa-facebook"></i>
        </a>
      </div>

      <!------------------------------ WORKING HOURS ----------------------------------------->
      <div class="working-hours-section">
        <h2 class="hours-title">Working Hours</h2>
        <div class="hours-grid">
          <div class="hours-item">
            <span class="day">Monday</span>
            <span class="time">07:00 AM - 11:00 PM</span>
          </div>
          <div class="hours-item">
            <span class="day">Tuesday</span>
            <span class="time">07:00 AM - 11:00 PM</span>
          </div>
          <div class="hours-item">
            <span class="day">Wednesday</span>
            <span class="time">07:00 AM - 11:00 PM</span>
          </div>
          <div class="hours-item">
            <span class="day">Thursday</span>
            <span class="time">07:00 AM - 11:00 PM</span>
          </div>
          <div class="hours-item">
            <span class="day">Friday</span>
            <span class="time">07:00 AM - 11:00 PM</span>
          </div>
          <div class="hours-item">
            <span class="day">Saturday</span>
            <span class="time">07:00 AM - 11:00 PM</span>
          </div>
          <div class="hours-item">
            <span class="day">Sunday</span>
            <span class="time">07:00 AM - 11:00 PM</span>
          </div>
        </div>
      </div>
    </div>

    <!------------------------------ IMAGES ----------------------------------------->
    <div id="second">
      <div class="container">
        <div class="gallery">
          <div class="gallery-item">
            <img class="gallery-image" src="images/home/cocacola.avif" />
          </div>

          <div class="gallery-item">
            <img class="gallery-image" src="images/home/coffee.avif" />
          </div>

          <div class="gallery-item">
            <img class="gallery-image" src="images/home/heineken.avif" />
          </div>

          <div class="gallery-item">
            <img class="gallery-image" src="images/home/tea.avif" />
          </div>

          <div class="gallery-item">
            <img class="gallery-image" src="images/home/wine.avif" />
          </div>

          <div class="gallery-item">
            <img class="gallery-image" src="images/home/alchokol.avif" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#parent {
  display: flex;
}

#first {
  flex: 1;
}

#second {
  width: 1000px;
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  /* Adjust styles for smaller screens */
  #parent {
    flex-wrap: wrap;
    flex-direction: column;
  }

  #first {
    order: 2;
  }

  #second {
    order: 1;
    width: 100%;
    margin-top: 50px;
  }
}

/*--------------------------------- SOCIAL MEDIA ---------------------------------- */
.media {
  display: flex;
  padding-top: 100px;
  padding-left: 260px;
}

.link {
  text-decoration: none;
  color: #b7b7b7;
  margin: 10px;
  width: 70px; /* Increased width */
  height: 70px; /* Increased height */
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(28, 28, 28);
  border-radius: 10px;
  position: relative;
  transition: 0.4s;
}

.link:hover {
  transform: rotate(45deg);
}

.link::before {
  content: " ";
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: #373737;
  border-radius: 10px;
  transition: 0.2s;
}

.link:hover::before {
  opacity: 0.4;
}

.link:nth-child(1)::before {
  background: #c32aa3;
}

.link:nth-child(2)::before {
  background: #1da1f2;
}

.link:hover::before {
  transform: translate(-4px, -4px);
  filter: blur(10px);
}

.link i {
  font-size: 2.5em; /* Increased icon size */
  transition: all 0.4s;
}

/*--------------------------------- WORKING HOURS ---------------------------------- */
.working-hours-section {
  margin-top: 100px;
  padding: 20px;
  background: #f3f3f3;
  border-radius: 15px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hours-title {
  font-size: 2rem;
  text-align: center;
  color: #333;
  font-weight: 700;
  margin-bottom: 20px;
}

.hours-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.hours-item {
  background: white;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.hours-item:hover {
  transform: translateY(-5px);
}

.day {
  font-weight: bold;
  color: #555;
}

.time {
  color: #007bff;
  font-weight: bold;
}

/*--------------------------------- IMAGES -------------------------------------- */
.container {
  max-width: 100rem;
  margin: 30px auto;
  padding: 0 2rem 2rem;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem -1rem;
}

.gallery-item {
  flex: 1 0;
  margin: 1rem;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.gallery-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease-out;
}

.gallery-image:hover {
  transform: scale(1.15);
}

@supports (display: grid) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
  }

  .gallery,
  .gallery-item {
    margin: 0;
  }
}
</style>
