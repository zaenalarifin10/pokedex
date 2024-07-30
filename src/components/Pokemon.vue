<template>
    <div class="card">
        <div class="container">
            <h4>{{ pokemon.name}}</h4>
        </div>
    </div>
</template>
<script>
import Pokemons from './Pokemons.vue';

export default {
    
    props: {
        Pokemon : Object
    }
}
</script>
<style scoped>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0.2);
        transition: 0.3%;
        margin: 2px;
        max-width: 280px;
        cursor:pointer;
    }
    .card:hover{
        box-shadow: 0 8px 16px 8 rgba(0,0,0.2);
    }
    .container{
        padding: 2px 16px;
    }
</style>