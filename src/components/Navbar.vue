<script lang="ts" setup>

</script>

<template>
    <nav class="navbar">
        <div class="logo-wrapper">
            <img
                class="logo"
                src="https://freepikpsd.com/file/2019/10/pokemon-icons-png-6-Transparent-Images.png"
                alt="pokemon-logo"
            />
        </div>
        <div class="title-wrapper">
            <h1 class="title">PokeVue</h1>
        </div>
    </nav>
</template>

<style>
.navbar {
    background-color: rgb(0, 141, 82);
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.title{
    color: rgb(30, 30, 30);
    font-size: 40px;
    font-weight: bold;
    margin-left: 10px;
}
</style>