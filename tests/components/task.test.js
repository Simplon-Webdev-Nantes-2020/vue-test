import { shallowMount } from "@vue/test-utils";
import Task from "../../src/components/task.vue";

describe("Task.vue", () => {
    it("renders correctly", () => {
        const text = "It works !";

        const wrapper = shallowMount(Task, {
            propsData: {
                text,
                done: true,
            },
        });

        expect(wrapper.text()).toMatch(text);
        expect(wrapper.find("input").element.value).toBe("on");
    });
});
