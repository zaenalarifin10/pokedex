import { reactive, toRefs } from 'vue'

const state = reactive({
    error : null,
    pokemons : null,
    loaded : false,
    loading : false,
    temp : null,
})

export default function usePokemons(){
    const load = async () => {
        if(!state.loaded){
            try{
                const pokemonsResponse = await fetch(
                    "http://localhost/arifin/pokemon.json"
                )
                state.pokemons = await pokemonsResponse.json();
                state.temp = state.pokemons;
            }
        catch(e)
        {
            state.error = e;
        }
        }
    }
    return{ ...toRefs(state), load}
}