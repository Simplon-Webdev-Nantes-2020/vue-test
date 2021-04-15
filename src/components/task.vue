<template>
    <li :class="{done}">
        <input type="checkbox" v-model="done" :id="slug">
        <label :for="slug">{{ text }}</label>
        <button @click="remove">❌</button>
    </li>
</template>

<script>
import slugify from "../utils/slugify.js";

export default {
    name: "task",
    props: ["text", "done"],
    methods: {
        remove () {
            this.$emit("removeTask");
        },
    },
    computed: {
        slug () {
            return slugify(this.text);
        }
    }
};
</script>

<style scoped>
    li {
        padding: .5em 1em;
    }
    li.done {
        text-decoration: line-through;
        color: #999;
    }
</style>
