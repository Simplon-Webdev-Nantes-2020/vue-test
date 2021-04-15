<template>
    <main>
        <h1>Todo</h1>
        <TaskList :list="tasks"
                  @addTask="addTask"
                  @removeTask="removeTask"
        />
    </main>
</template>

<script>
import TaskList from "../components/task-list.vue";

export default {
    name: "home",
    components: {
        TaskList,
    },
    data () {
        return {
            tasks: [
                {
                    name: "Apprendre Vue",
                    done: true,
                },
                {
                    name: "Apprendre les TU"
                },
                {
                    name: "Become famous !"
                },
            ],
        };
    },
    methods: {
        addTask (name) {
            this.tasks.push({
                name,
            });
        },
        removeTask (index) {
            this.tasks.splice(index, 1);
        },
    },
};
</script>

<style scoped>

</style>
