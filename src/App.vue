<!--
 * @Author: yhlyl
 * @Date: 2019-11-18 20:35:54
 * @LastEditTime: 2019-11-18 20:57:09
 * @LastEditors: yhlyl
 * @Description: 
 * @FilePath: /webwork/proj/src/App.vue
 * @https://github.com/android-coco
 -->
<template>
  <div id="app">
   <!-- 
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
   -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
