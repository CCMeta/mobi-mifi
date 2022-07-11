<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'
import { Dialog } from 'vant';

const router = useRouter()
const showPicker = ref(false);

const get_protection_setting = await fetching('network_setting=1&')
const NetworkChecked = ref(get_protection_setting.gprsStatus === "1" ? true : false);
const RoamingChecked = ref(get_protection_setting.roamingStatus === "1" ? true : false);
const ThresholdChecked = ref(get_protection_setting.networkMode === "1" ? true : false);
const modelActions = ['Auto', '4G', '3G']
const modelResult = ref(networkModeMap(get_protection_setting.networkMode));

const onSubmit = async () => {
  const form = {
    "gprsStatus": boolToInt(NetworkChecked),
    "roamingStatus": boolToInt(RoamingChecked),
    "networkMode": networkModeMap(modelResult.value),
  }
  console.log(form)
  const result = await fetching('set_network_config=' + JSON.stringify(form) + '&')
  if (!result || result?.result != 'ok') {
    Dialog({ message: result?.message || "Very Big Exception" });
    return;
  }
  Dialog({ message: 'Save Success' });
}

const onConfirm = (value) => {
  modelResult.value = value;
  showPicker.value = false;
}

const onClickLeft = () => router.push('/')


function boolToInt(v) {
  if (v.value === true)
    return 1
  return 0
}
function networkModeMap(v) {
  switch (v) {
    case 'Auto':
      return 0
    case '4G':
      return 1
    case '3G':
      return 2
    case "0":
      return 'Auto'
    case "1":
      return '4G'
    case "2":
      return '3G'
    default:
      alert("Something is wrong")
      break;
  }
}

</script>

<template>
  <div>
    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true" title="Sim Setting"
      left-arrow @click-left="onClickLeft" />
    <br />

    <van-cell-group inset>
      <van-cell center title="Network">
        <template #right-icon>
          <van-switch inactive-color="#EEE" v-model="NetworkChecked" size="24" />
        </template>
      </van-cell>
      <van-cell center title="Roaming">
        <template #right-icon>
          <van-switch inactive-color="#EEE" v-model="RoamingChecked" size="24" />
        </template>
      </van-cell>
      <van-cell center title="Threshold">
        <template #right-icon>
          <van-switch inactive-color="#EEE" v-model="ThresholdChecked" size="24" />
        </template>
      </van-cell>


      <van-field name="model" v-model="modelResult" is-link readonly label="Model" @click="showPicker = true" />
      <van-popup v-model:show="showPicker" round position="bottom">
        <van-picker :default-index="0" :columns="modelActions" @cancel="showPicker = false" @confirm="onConfirm" />
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
