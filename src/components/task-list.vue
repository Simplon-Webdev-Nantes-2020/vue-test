<template>
    <div>
        <ul>
            <Task
                v-for="({ name, done }, index) in list" :key="index"
                :name="name" :done="done"
                @removeTask="removeTask(index)"
            />
        </ul>
        <form @submit="addTask">
            <input type="text" v-model="newTask" >
        </form>
    </div>
</template>

<script>
import Task from "./task.vue";
export default {
    name: "task-list",
    props: ["list"],
    data () {
        return {
            newTask: "",
        };
    },
    components: {
        Task,
    },
    methods: {
        /**
         *
         * @param {Event} event - Original HTML event
         */
        addTask (event) {
            event.preventDefault();
            this.$emit("addTask", this.newTask);
            this.newTask = "";
        },
        removeTask (index) {
            this.$emit("removeTask", index);
        },
    },
};
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>
