<template>
  <div class="nav">
    <div class="logo">
      <h1><b>ESPCERE</b></h1>
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

<style>
* {
  padding: 0px;
  overflow: hidden;
  margin: 0px;
  font-family: "Montserrat";
}
.nav {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.logo {
  /* border-style: double; */
  margin: 5px;
  margin-left: 30px;
  width: auto;
  display: flex;
  flex-direction: row;
}
.search-bar {
  margin: 25px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  outline: none;
  border: 0.1px solid rgb(41, 41, 41);
  font-size: 20px;
  margin-left: 20px;
  width: 70%;
  height: auto;
}
.profile-pic-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  margin-right: 30px;
}
.search-bar::placeholder {
  padding: 5px;
  margin: 10px;
}
.profile-pic {
  border: 1px solid;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  margin-right: 10px;
}
</style>
