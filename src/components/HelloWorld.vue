<template>
  <a-layout>
    <!-- 左侧菜单 -->
    <a-layout-sider>
      <a-menu
        id="dddddd"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        style="width: 100%; background-color: rgb(165, 161, 161)"
        mode="inline"
        @click="handleClick"
      >
        <child-app></child-app>
        <a-sub-menu key="sub2" @titleClick="titleClick">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>目录 Two</template>
          <a-menu-item key="5">菜单 5</a-menu-item>
          <a-menu-item key="6">菜单 6</a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="7">菜单 7</a-menu-item>
            <a-menu-item key="8">菜单 8</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <template #icon>
            <SettingOutlined />
          </template>
          <template #title>目录 Three</template>
          <a-menu-item key="9">菜单 9</a-menu-item>
          <a-menu-item key="10">菜单 10</a-menu-item>
          <a-menu-item key="11">菜单 11</a-menu-item>
          <a-menu-item key="12">菜单 12</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <!-- 右侧内容 -->
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons-vue";
import childApp from "./basic-module/src/components/subMenu.vue";
export default defineComponent({
  name: "HelloWorld",
  components: {
    AppstoreOutlined,
    SettingOutlined,
    childApp,
  },

  setup() {
    const selectedKeys = ref(["1"]);
    const openKeys = ref(["sub1"]);

    const handleClick = (e) => {
      console.log("click", e);
    };

    const titleClick = (e) => {
      console.log("titleClick", e);
    };

    watch(
      () => openKeys,
      (val) => {
        console.log("openKeys", val);
      }
    );
    return {
      selectedKeys,
      openKeys,
      handleClick,
      titleClick,
    };
  },
});
</script>
<style scoped type="scss">
.aa {
  background-color: rgb(165, 161, 161);
}
</style>