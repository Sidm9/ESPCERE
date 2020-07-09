<template>
  <div class="nav">
    <div class="logo">
      ESPCERE
    </div>
    <input class="search-bar" placeholder="Search..." />
    <div class="profile-pic-container">
      <div class="profile-pic" />
      <div>Siddharth Mishra</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div{
  background: transparent;
}
.nav {
  background: transparent;
  backdrop-filter: blur(10px) brightness(0.4);
  box-shadow: 2px 2px 3px rgb(126, 126, 126);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: lightblue; */
  width: 100%;
  position: fixed;
  z-index: 2;
}
.logo {
  background: transparent;
  margin-left: 30px;
  width: 200px;
  font-size: 35px;
  /* text-shadow: 1px 1px 5px #ffffff; */
  display: flex;
  flex-direction: row;
}
.search-bar {
  margin: 5px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  outline: none;
  background: black;
  border: 0.1px solid rgb(158, 158, 158);
  font-size: 15px;
  margin-left: 20px;
  width: 60%;
  height: auto;
}
.profile-pic-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  margin-right: 30px;
}
.search-bar::placeholder {
  padding: 5px;
  margin: 10px;
}
.profile-pic {
  margin-top: 5px;
  border: 1px solid;
  text-shadow: 1px 1px 5px #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 45px;
  min-width: 45px;
  margin-right: 10px;
}

@media only screen and (max-width: 1200px) {
  .logo {
    font-size: 25px;
  }
  .search-bar {
    width: 50%;
  }
}
@media only and (max-width: 650px) {
}
</style>
