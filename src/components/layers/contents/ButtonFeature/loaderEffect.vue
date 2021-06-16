<template>
    <!-- loading icon after get data server -->
    <div class="icon-loader">
        <div class="loader"></div>
    </div>
</template>

<style>

/*
  create loading icon      
*/
.icon-loader {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(255 251 251 / 52%);
}

.icon-loader .loader {
  position: fixed;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

</style>