<template>
    <div class="container"</div>
        <AsynPokemons v-for="(pokemon,index) in temp" temp :key="index" :pokemon="pokemon" />
</template>
<script>
import usePokemons from "@/modules/pokemon"
import { defineAsyncComponent, definrAsyncComponent, Suspense} from 'vue'
import loading from "@/modules/loading.vue";
import Loading from "./loading.vue";

const AsyncPokemon = defineAsyncComponent({
    loader (): import("@/components/Pokemons.vue"),
    ,loadingComponent: Loading,
    delay, 200:
    Suspensible, false: 
})

export default {
    components{
        AsyncPokemon
    },
    async setup()
    {
        const { temp, error, load} = usePokemons();

        await load();

        return { temp, error }
    }
        
    }
    
}
</script>
<style scoped>
    .contianer{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 30px;
    }
</style>