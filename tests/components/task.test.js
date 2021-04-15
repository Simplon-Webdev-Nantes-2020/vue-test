import { shallowMount } from "@vue/test-utils";
import Task from "../../src/components/task.vue";

describe("Task.vue", () => {
    it("renders correctly", () => {
        const name = "It works !";

        const wrapper = shallowMount(Task, {
            propsData: {
                name,
                done: true,
            },
        });

        expect(wrapper.text()).toMatch(name);
        expect(wrapper.find("input").element.value).toBe("on");
    });
});
