<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'

const router = useRouter()

const showPopover1 = ref(false);
const showPopover2 = ref(false);
const showPopover3 = ref(false);
const showPopover4 = ref(false);
const showPopover5 = ref(false);
const showPopovers = [showPopover1, showPopover2, showPopover3, showPopover4, showPopover5]

const action1 = [
  // { text: 'GPRS', value: "gprs", icon: "friends" },
  // { text: 'APN', value: "apn", icon: "friends" },
  { text: 'SIM', value: "sim", icon: "friends" },
];
const action2 = [
  { text: 'WIFI', value: "wifi", icon: "friends" },
  { text: 'DHCP', value: "dhcp", icon: "friends" },
  // { text: 'Client', value: "client", icon: "friends" },
];
const action3 = [
  { text: 'Protection', value: "protect", icon: "friends" },
  { text: 'PIN', value: "pin", icon: "friends" },
];
const action4 = [
  { text: 'Inbox', value: "inbox", icon: "friends" },
];
const action5 = [
  { text: 'Device', value: "device", icon: "friends" },
  { text: 'Manage', value: "manage", icon: "friends" },
  // { text: 'Update', value: "update", icon: "friends" },
  { text: 'Password', value: "password", icon: "friends" },
];
const onShowPopovers = index => {
  for (const arr_index in showPopovers) {
    // console.log(arr_index == (index - 1))
    if (arr_index == (index - 1))
      showPopovers[arr_index].value = true
    else
      showPopovers[arr_index].value = false
  }
  // showPopovers[index - 1].value = true
}
const popoverOffset = [0, 40];

const tabbarActive = ref(6);

const openUri = action => router.push(action.value)
</script>

<template>
  <van-tabbar style="z-index:0;" :border="false" :fixed="true" :safe-area-inset-bottom="true" :placeholder="false"
    v-model="tabbarActive">
    <van-tabbar-item
      icon="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOTAgOTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwIDkwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGO30NCgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRjt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ1LDg5LjVjLTI0LjUsMC00NC41LTIwLTQ0LjUtNDQuNWMwLTI0LjUsMjAtNDQuNSw0NC41LTQ0LjVzNDQuNSwyMCw0NC41LDQ0LjVDODkuNSw2OS41LDY5LjUsODkuNSw0NSw4OS41eg0KCSBNNDUsMy41QzIyLjEsMy41LDMuNSwyMi4xLDMuNSw0NWMwLDIyLjksMTguNiw0MS41LDQxLjUsNDEuNVM4Ni41LDY3LjksODYuNSw0NUM4Ni41LDIyLjEsNjcuOSwzLjUsNDUsMy41eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ1LDM0LjVjLTUuMSwwLTkuMy00LjItOS4zLTkuM3M0LjItOS4zLDkuMy05LjNzOS4zLDQuMiw5LjMsOS4zUzUwLjEsMzQuNSw0NSwzNC41eiBNNDUsMTguOA0KCWMtMy41LDAtNi4zLDIuOC02LjMsNi4zczIuOCw2LjMsNi4zLDYuM3M2LjMtMi44LDYuMy02LjNTNDguNSwxOC44LDQ1LDE4Ljh6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjIuOSw2OGMtMC44LDAtMS41LTAuNy0xLjUtMS41VjQ2LjJjMC02LjEtNC45LTExLTExLTExSDM5LjZjLTYuMSwwLTExLDQuOS0xMSwxMXYyMC4zYzAsMC44LTAuNywxLjUtMS41LDEuNQ0KCXMtMS41LTAuNy0xLjUtMS41VjQ2LjJjMC03LjcsNi4zLTE0LDE0LTE0aDEwLjhjNy43LDAsMTQsNi4zLDE0LDE0djIwLjNDNjQuNCw2Ny4zLDYzLjcsNjgsNjIuOSw2OHoiLz4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNC41LDczLjJMMzQuNSw3My4yYy0xLjEsMC0yLTAuOS0yLTJ2LTQuOGMwLTEuMSwwLjktMiwyLTJoMGMxLjEsMCwyLDAuOSwyLDJ2NC44DQoJCUMzNi41LDcyLjMsMzUuNiw3My4yLDM0LjUsNzMuMnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDEuNSw3My4yTDQxLjUsNzMuMmMtMS4xLDAtMi0wLjktMi0ydi04LjFjMC0xLjEsMC45LTIsMi0yaDBjMS4xLDAsMiwwLjksMiwydjguMQ0KCQlDNDMuNCw3Mi4zLDQyLjYsNzMuMiw0MS41LDczLjJ6Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ4LjUsNzMuMkw0OC41LDczLjJjLTEuMSwwLTItMC45LTItMlY1OS44YzAtMS4xLDAuOS0yLDItMmgwYzEuMSwwLDIsMC45LDIsMnYxMS40DQoJCUM1MC40LDcyLjMsNDkuNiw3My4yLDQ4LjUsNzMuMnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTUuNSw3My4zTDU1LjUsNzMuM2MtMS4xLDAtMi0wLjktMi0yVjU1YzAtMS4xLDAuOS0yLDItMmgwYzEuMSwwLDIsMC45LDIsMnYxNi4zDQoJCUM1Ny40LDcyLjQsNTYuNiw3My4zLDU1LjUsNzMuM3oiLz4NCjwvZz4NCjwvc3ZnPg0K"
      name="wan" :onclick="_ => onShowPopovers(1)">
      <van-popover :offset="popoverOffset" v-model:show="showPopover1" placement="top-start" :actions="action1"
        @select="openUri">
        <template #reference>WAN</template>
      </van-popover>
    </van-tabbar-item>
    <van-tabbar-item name="wlan"
      icon="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOTAgOTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwIDkwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojZmZmO30NCgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I2ZmZjt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ1LDg5LjVjLTI0LjUsMC00NC41LTIwLTQ0LjUtNDQuNWMwLTI0LjUsMjAtNDQuNSw0NC41LTQ0LjVzNDQuNSwyMCw0NC41LDQ0LjVDODkuNSw2OS41LDY5LjUsODkuNSw0NSw4OS41eg0KCSBNNDUsMy41QzIyLjEsMy41LDMuNSwyMi4xLDMuNSw0NWMwLDIyLjksMTguNiw0MS41LDQxLjUsNDEuNVM4Ni41LDY3LjksODYuNSw0NUM4Ni41LDIyLjEsNjcuOSwzLjUsNDUsMy41eiIvPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwLjksMzIuN2MtMC44LDAtMS41LTAuNy0xLjUtMS41VjE3LjRMMzMuNywyM2MtMC42LDAuNi0xLjUsMC42LTIuMSwwcy0wLjYtMS41LDAtMi4xbDguMi04LjINCgkJYzAuNC0wLjQsMS4xLTAuNiwxLjYtMC4zYzAuNiwwLjIsMC45LDAuOCwwLjksMS40djE3LjVDNDIuNCwzMiw0MS43LDMyLjcsNDAuOSwzMi43eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OS43LDQxLjRjLTAuMiwwLTAuNCwwLTAuNi0wLjFjLTAuNi0wLjItMC45LTAuOC0wLjktMS40VjIyLjVjMC0wLjgsMC43LTEuNSwxLjUtMS41czEuNSwwLjcsMS41LDEuNXYxMy44DQoJCWw1LjYtNS42YzAuNi0wLjYsMS41LTAuNiwyLjEsMHMwLjYsMS41LDAsMi4xTDUwLjgsNDFDNTAuNSw0MS4zLDUwLjEsNDEuNCw0OS43LDQxLjR6Ii8+DQo8L2c+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDEuNCw2NS43Yy0yLDEuOS0yLDUuMSwwLDcuMWMxLjksMiw1LjEsMiw3LjEsMGMyLTEuOSwyLTUuMSwwLTcuMUM0Ni42LDYzLjgsNDMuNCw2My44LDQxLjQsNjUuN3ogTTM0LjQsNTguNg0KCWMwLDAtMS43LDEuOCwwLDMuNWMxLjcsMS43LDMuNSwwLDMuNSwwYzMuOS0zLjksMTAuMy0zLjksMTQuMiwwYzAsMCwxLjgsMS44LDMuNSwwYzEuOC0xLjgsMC0zLjUsMC0zLjUNCglDNDkuOCw1Mi44LDQwLjIsNTIuOCwzNC40LDU4LjZMMzQuNCw1OC42TDM0LjQsNTguNnogTTI3LjMsNTEuNWMwLDAtMS44LDEuOCwwLDMuNWMxLjgsMS44LDMuNSwwLDMuNSwwYzcuOC03LjgsMjAuNS03LjgsMjguMywwLjENCgljMCwwLDEuOCwxLjgsMy41LDBjMS44LTEuOCwwLTMuNSwwLTMuNUM1Myw0MS44LDM3LjEsNDEuOCwyNy4zLDUxLjVMMjcuMyw1MS41eiIvPg0KPC9zdmc+DQo="
      :onclick="_ => onShowPopovers(2)">
      <van-popover :offset="popoverOffset" v-model:show="showPopover2" placement="top" :actions="action2"
        @select="openUri">
        <template #reference>LAN</template>
      </van-popover>
    </van-tabbar-item>


    <van-tabbar-item name="security"
      icon="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOTAgOTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwIDkwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDUsODkuNWMtMjQuNSwwLTQ0LjUtMjAtNDQuNS00NC41YzAtMjQuNSwyMC00NC41LDQ0LjUtNDQuNXM0NC41LDIwLDQ0LjUsNDQuNUM4OS41LDY5LjUsNjkuNSw4OS41LDQ1LDg5LjV6DQoJIE00NSwzLjVDMjIuMSwzLjUsMy41LDIyLjEsMy41LDQ1YzAsMjIuOSwxOC42LDQxLjUsNDEuNSw0MS41Uzg2LjUsNjcuOSw4Ni41LDQ1Qzg2LjUsMjIuMSw2Ny45LDMuNSw0NSwzLjV6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTUuNyw2OC4zSDM0LjNjLTIuOCwwLTUtMi4yLTUtNVY0NS45YzAtMi44LDIuMi01LDUtNWgyMS40YzIuOCwwLDUsMi4yLDUsNXYxNy40QzYwLjcsNjYsNTguNSw2OC4zLDU1LjcsNjguMw0KCXoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MC43LDM4LjljLTAuOCwwLTEuNS0wLjctMS41LTEuNWMwLTcuOC02LjQtMTQuMi0xNC4yLTE0LjJjLTcuOCwwLTE0LjIsNi40LTE0LjIsMTQuMmMwLDAuOC0wLjcsMS41LTEuNSwxLjUNCglzLTEuNS0wLjctMS41LTEuNWMwLTkuNSw3LjctMTcuMiwxNy4yLTE3LjJjOS41LDAsMTcuMiw3LjcsMTcuMiwxNy4yQzYyLjIsMzguMiw2MS41LDM4LjksNjAuNywzOC45eiIvPg0KPC9zdmc+DQo="
      :onclick="_ => onShowPopovers(3)">
      <van-popover :offset="popoverOffset" v-model:show="showPopover3" placement="top" :actions="action3"
        @select="openUri">
        <template #reference>Security</template>
      </van-popover>
    </van-tabbar-item>

    <van-tabbar-item name="sms"
      icon="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOTAgOTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwIDkwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojZmZmO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDUsODkuNWMtMjQuNSwwLTQ0LjUtMjAtNDQuNS00NC41YzAtMjQuNSwyMC00NC41LDQ0LjUtNDQuNXM0NC41LDIwLDQ0LjUsNDQuNUM4OS41LDY5LjUsNjkuNSw4OS41LDQ1LDg5LjV6DQoJIE00NSwzLjVDMjIuMSwzLjUsMy41LDIyLjEsMy41LDQ1YzAsMjIuOSwxOC42LDQxLjUsNDEuNSw0MS41Uzg2LjUsNjcuOSw4Ni41LDQ1Qzg2LjUsMjIuMSw2Ny45LDMuNSw0NSwzLjV6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjEuNCw2MkgyOC42Yy01LjUsMC05LjktNC40LTkuOS05LjlWMzcuNWMwLTUuNSw0LjQtOS45LDkuOS05LjloMzIuOWM1LjUsMCw5LjksNC40LDkuOSw5Ljl2MTQuNg0KCUM3MS4zLDU3LjYsNjYuOSw2Miw2MS40LDYyeiBNMjguNiwzMC42Yy0zLjgsMC02LjksMy4xLTYuOSw2Ljl2MTQuNmMwLDMuOCwzLjEsNi45LDYuOSw2LjloMzIuOWMzLjgsMCw2LjktMy4xLDYuOS02LjlWMzcuNQ0KCWMwLTMuOC0zLjEtNi45LTYuOS02LjlIMjguNnoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NSw0OS4xYy0xLjYsMC0zLjMtMC40LTQuOC0xLjJsLTEwLjctNS43Yy0wLjctMC40LTEtMS4zLTAuNi0yYzAuNC0wLjcsMS4zLTEsMi0wLjZsMTAuNyw1LjcNCgljMi4yLDEuMiw0LjgsMS4xLDctMC4xbDkuNi01LjZjMC43LTAuNCwxLjYtMC4yLDIuMSwwLjVjMC40LDAuNywwLjIsMS42LTAuNSwyLjFsLTkuNiw1LjZDNDguNiw0OC42LDQ2LjgsNDkuMSw0NSw0OS4xeiIvPg0KPC9zdmc+DQo="
      :onclick="_ => onShowPopovers(4)">SMS</van-tabbar-item>

    <van-tabbar-item name="system"
      icon="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOTAgOTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkwIDkwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojZmZmO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDUsODkuNWMtMjQuNSwwLTQ0LjUtMjAtNDQuNS00NC41YzAtMjQuNSwyMC00NC41LDQ0LjUtNDQuNXM0NC41LDIwLDQ0LjUsNDQuNUM4OS41LDY5LjUsNjkuNSw4OS41LDQ1LDg5LjV6DQoJIE00NSwzLjVDMjIuMSwzLjUsMy41LDIyLjEsMy41LDQ1YzAsMjIuOSwxOC42LDQxLjUsNDEuNSw0MS41Uzg2LjUsNjcuOSw4Ni41LDQ1Qzg2LjUsMjIuMSw2Ny45LDMuNSw0NSwzLjV6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzIuNSw3OC45aC0zVjM5YzAtMC40LTAuMi0wLjktMC40LTEuMkw1NC42LDIxLjNjLTAuOC0wLjktMS4yLTItMS4yLTMuMlYzLjNoM3YxNC44YzAsMC40LDAuMiwwLjksMC40LDEuMg0KCWwxNC41LDE2LjVjMC44LDAuOSwxLjIsMiwxLjIsMy4yVjc4Ljl6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzUuNiw3Mi4yaC0zVjQ2LjljMC0wLjUtMC4yLTAuOS0wLjUtMS4zTDE3LjgsMzEuNWMtMC45LTAuOS0xLjQtMi4xLTEuNC0zLjR2LTE3aDN2MTdjMCwwLjUsMC4yLDAuOSwwLjUsMS4zDQoJbDE0LjIsMTQuMWMwLjksMC45LDEuNCwyLjEsMS40LDMuNFY3Mi4yeiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTYzLDg0LjdoLTNWNDVjMC0wLjUtMC4yLTAuOS0wLjUtMS4yTDQ1LjYsMjguN2MtMC44LTAuOS0xLjMtMi0xLjMtMy4zVjJoM3YyMy40YzAsMC41LDAuMiwwLjksMC41LDEuMg0KCWwxMy45LDE1LjFjMC44LDAuOSwxLjMsMiwxLjMsMy4zVjg0Ljd6Ii8+DQo8cmVjdCB4PSI1MC40IiB5PSI1Mi42IiBjbGFzcz0ic3QwIiB3aWR0aD0iMyIgaGVpZ2h0PSIzMy42Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDQsODhoLTNWNDIuNWMwLTAuNS0wLjItMC45LTAuNS0xLjJMMzIuNiwzM2MtMC45LTAuOS0xLjMtMi4xLTEuMy0zLjNWMTkuM2gzdjEwLjRjMCwwLjUsMC4yLDAuOSwwLjUsMS4yDQoJbDcuOSw4LjJjMC45LDAuOSwxLjMsMi4xLDEuMywzLjNWODh6Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI1MS45IiBjeT0iNTIuNiIgcj0iMy42Ii8+DQo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMi44IiBjeT0iMTkuMyIgcj0iMy42Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODMuMSw2My43bC01LTUuMmMtMC45LTAuOS0xLjMtMi4xLTEuMy0zLjNWNDQuOGgzdjEwLjRjMCwwLjUsMC4yLDAuOSwwLjUsMS4ybDUsNS4yTDgzLjEsNjMuN3oiLz4NCjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9Ijc4LjMiIGN5PSI0NC44IiByPSIzLjYiLz4NCjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjM0LjEiIGN5PSI3My43IiByPSIzLjYiLz4NCjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjEzLjQiIGN5PSI0NC41IiByPSIzLjYiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNS4yLDgyLjRoLTNWNTUuOGMwLTAuNS0wLjItMS0wLjUtMS4zTDExLjMsNDQuNGwyLjEtMi4ybDEwLjQsMTAuMWMwLjksMC45LDEuNSwyLjIsMS41LDMuNFY4Mi40eiIvPg0KPC9zdmc+DQo="
      :onclick="_ => onShowPopovers(5)">
      <van-popover :offset="popoverOffset" v-model:show="showPopover5" placement="top-end" :actions="action5"
        @select="openUri" @closed="">
        <template #reference>System</template>
      </van-popover>
    </van-tabbar-item>
  </van-tabbar>
</template>

<style lang="less">
:root {
  --van-tabbar-background-color: rgba(45, 45, 65, 1);
  --van-tabbar-item-active-background-color: #4D68EE;
  --van-tabbar-item-active-color: #fff;
  --van-tabbar-item-text-color: #fff;
  --van-tabbar-height: 70px;
  --van-tabbar-item-icon-size: 25px;
  --van-tabbar-z-index: -1;

  --van-popover-light-background-color: rgba(25, 25, 25, 0.9);
  --van-popover-light-text-color: #FFF;
}

.van-badge__wrapper.van-tabbar-item__icon {
  transform: scale(1.5);
  padding: 5px 0;
}

div.van-popup {
  overflow-y: visible;
  background: transparent;
}
</style>
