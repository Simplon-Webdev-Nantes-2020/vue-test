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
                    text: "Apprendre Vue",
                    done: true,
                },
                {
                    text: "Apprendre les TU"
                },
                {
                    text: "Become famous !"
                },
            ],
        };
    },
    methods: {
        addTask (text) {
            this.tasks.push({
                text,
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
