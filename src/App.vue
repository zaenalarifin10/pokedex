<template>
      <img alt="Vue logo" class="logo" src="./assets/logo.png" width="125" height="125" />
      <Suspense>
        <template #default>
          <Pokemons />              
        </template>
      <template #fallback>
          <Loading />
      </template>
      </Suspense>
</template>

<script>
import Pokemons from "@/components/Pokemons"
import Loading from "@/components/Loading"

export default {
  name: 'App'
  ,components: {
    Pokemons
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>