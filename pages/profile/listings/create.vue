<script setup>
definePageMeta({
  layout: "costum",
});

const {makes} = useCars();

const info = useState('adInfo', () =>{
    return {
        make: '',
        model: '',
        year:'',
        miles: '',
        price: '',
        city: '',
        seats: '',
        features: '',
        description: '',
        image: null,
    }
});

const onChangeInput = (data, name) => {
    info.value[name] = data;
}

const inputs = [{
    id:1,
    title: "Model *",
    name: "model",
    placeholder: "civic"
},{
    id:2,
    title: "Year *",
    name: "year",
    placeholder: "2008"
},{
    id:3,
    title: "Miles *",
    name: "miles",
    placeholder: "10000"
},{
    id:4,
    title: "City *",
    name: "city",
    placeholder: "Porto"
},{
    id:5,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5"
},{
    id:6,
    title: "Features *",
    name: "features",
    placeholder: "leather interior, no accidents"
}]
</script>

<template>
    <div>
        <div class="mt-24">
            <h1 class="text-6xl">Create a new lisitng</h1>
        </div>
        <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
            <CarAdSelect title="Make *" :options="makes" name="make" @change-input="onChangeInput" />
            <CarAdInput v-for="input in inputs" :key="input.id" :title="input.title" :name="input.name" :placeholder="input.placeholder" @change-input="onChangeInput" />
            <CarAdTextarea title="Description *" :name="description" placeholder="" @change-input="onChangeInput" />
            <CarAdImage @change-input="onChangeInput" />
        </div>
    </div>
</template>