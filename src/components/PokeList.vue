<script lang="ts" setup>

import { ref } from 'vue';
import { useRequest } from '../helpers/useRequest';

const onSummon = async () => {
    const result = await useRequest.get(pokeNameSearch.value)
    const sprite = result?.data?.sprites?.front_default
    pokeImageUrl.value = sprite
    debugger
}

const pokeImageUrl = ref<string>('https://i.pinimg.com/originals/ec/80/7a/ec807a0c2f0d1ee6c6d4f1b4eb182ea5.png')
const pokeNameSearch = ref<string>('')

</script>

<template>
    <div class="wrapper">
        <div class="card">
            <div class="title-wrapper">
                <h1 class="title">Summon !</h1>
            </div>
            <input v-model="pokeNameSearch" type="text" />
            <a @click="onSummon" class="submit">Take-me my Pokemon !</a>
            <div class="summon-wrapper">
                <img :src="pokeImageUrl" alt="pokemon" class="pokemon">
            </div>
        </div>
    </div>
</template>

<style>
.summon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 500px;
    min-height: 500px;
    background-image: url("https://www.pikpng.com/pngl/b/537-5371584_tumblr-np6uaewu2u1sixe4go2-summoning-circle-transparent-clipart.png");
    background-size: cover;
    background-repeat: no-repeat;
}

.wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img{
    width: 500px;
    height: auto;
}

.card {
    margin: 40px;
    background-color: rgb(0, 141, 82);
    border: 10px;
    min-height: 200px;
    min-width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-radius: 20px;
    padding: 40px;
}

.title {
    color: rgb(30, 30, 30);
    font-size: 40px;
    font-weight: bold;
    margin-left: 10px;
}

.submit {
    margin: 40px 0px 40px 0px;
    box-shadow: 0px 10px 14px -7px #276873;
    background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
    background-color: #599bb3;
    border-radius: 8px;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    padding: 13px 32px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #3d768a;
}
.submit:hover {
    background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
    background-color: #408c99;
}
.submit:active {
    position: relative;
    top: 1px;
}

input {
    margin: 25px 0px 25px 0px;
    width: 80%;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: rgb(235, 235, 235);
    color: rgb(40, 40, 40);
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    margin-bottom: 10px;
    outline: none;
}
</style>