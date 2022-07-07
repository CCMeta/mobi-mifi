<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'

const router = useRouter()

const get_wifi_settings = await fetching('get_wifi_settings=1&')
const wifiStatus = ref(get_wifi_settings.status === 1 ? true : false)
const ssidHidden = ref(get_wifi_settings.hideSSID === 1 ? true : false)
const ssid = ref(get_wifi_settings.SSIDName)
const password = ref(get_wifi_settings.password)
const channel = ref(get_wifi_settings.channel)

const showPicker = ref(false);
const channelActions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const onConfirm = (value) => {
  channel.value = value;
  showPicker.value = false;
}

const onSubmit = async () => {
  const form = {
    "status": boolToInt(wifiStatus),
    "hideSSID": boolToInt(ssidHidden),
    "SSIDName": ssid.value,
    "password": password.value,
    "channel": channel.value,
  }
  console.log(form)
  const result = await fetching('save_wifi_settings=' + JSON.stringify(form) + '&')
}

function boolToInt(v) {
  if (v.value === true)
    return 1
  return 0
}
const onClickLeft = () => router.go(-1)
</script>

<template>
  <div>
    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true" title="Wifi Setting"
      left-arrow @click-left="onClickLeft" />
    <br />
    <van-cell-group inset>
      <van-cell center title="Wifi Status">
        <template #right-icon>
          <van-switch inactive-color="#EEE" v-model="wifiStatus" size="24" />
        </template>
      </van-cell>
      <van-cell center title="SSID Hidden">
        <template #right-icon>
          <van-switch inactive-color="#EEE" v-model="ssidHidden" size="24" />
        </template>
      </van-cell>
      <van-field v-model="ssid" label="SSID" />
      <van-field v-model="password" type="password" label="Password" />

      <van-field name="channel" v-model="channel" is-link readonly label="Channel" @click="showPicker = true"
        placeholder="Channel 0 is Auto select " />
      <van-popup v-model:show="showPicker" round position="bottom">
        <van-picker :default-index="0" :columns="channelActions" @cancel="showPicker = false" @confirm="onConfirm" />
      </van-popup>

    </van-cell-group>
    <br />
    <van-button block color="#4d68ee" @click="onSubmit">
      Save
    </van-button>
  </div>
</template>

<style lang="less">
</style>
