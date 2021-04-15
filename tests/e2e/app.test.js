import { mount } from "@vue/test-utils";
import Home from "../../src/views/home.vue";

describe("Home.vue", () => {
    it("work as expected", async () => {
        const wrapper = mount(Home);

        expect(wrapper.find("h1").text()).toMatch("Todo");

        expect(wrapper.findAll("li").length).toBe(3);

        await wrapper.find("li:nth-child(2) button").trigger("click");
        expect(wrapper.findAll("li").length).toBe(2);
    });
});
