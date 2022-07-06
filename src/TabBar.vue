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
    <van-tabbar-item icon="/icons/Network.svg" name="wan" :onclick="_ => onShowPopovers(1)">
      <van-popover :offset="popoverOffset" v-model:show="showPopover1" placement="top-start" :actions="action1"
        @select="openUri">
        <template #reference>WAN</template>
      </van-popover>
    </van-tabbar-item>
    <van-tabbar-item name="wlan" icon="/icons/wifi.svg" :onclick="_ => onShowPopovers(2)">
      <van-popover :offset="popoverOffset" v-model:show="showPopover2" placement="top" :actions="action2"
        @select="openUri">
        <template #reference>LAN</template>
      </van-popover>
    </van-tabbar-item>


    <van-tabbar-item name="security" icon="/icons/security.svg" :onclick="_ => onShowPopovers(3)">
      <van-popover :offset="popoverOffset" v-model:show="showPopover3" placement="top" :actions="action3"
        @select="openUri">
        <template #reference>Security</template>
      </van-popover>
    </van-tabbar-item>

    <van-tabbar-item name="sms" icon="/icons/SMS.svg" :onclick="_ => onShowPopovers(4)">SMS</van-tabbar-item>

    <van-tabbar-item name="system" icon="/icons/System.svg" :onclick="_ => onShowPopovers(5)">
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
