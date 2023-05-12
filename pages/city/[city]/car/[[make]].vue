<script setup>
const route = useRoute();
const {data: cars, refresh} = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
});

watch(
  () => route.query, 
  () => {
    window.location.reload(true)
  }
  )
</script>

<template>
  <div>
      <CarCards v-if="cars.length" :cars="cars" />
      <h1 class="text-red-400" v-else>No cars found with Filters</h1>
  </div>
</template>
