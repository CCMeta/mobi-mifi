<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'
import { Dialog } from 'vant';


const router = useRouter()

const get_dhcp_setting = await fetching('get_dhcp_setting=1&')
const Serverchecked = ref(get_dhcp_setting.dhcpStatus === "1" ? true : false)
const beginAddress = ref(IPChecker(get_dhcp_setting.startIP))
const endAddress = ref(IPChecker(get_dhcp_setting.endIP))
const leaseTime = ref(get_dhcp_setting.leaseTime)

const onSubmit = async () => {
  const form = {
    "startIP": IPChecker(beginAddress.value),
    "endIP": IPChecker(endAddress.value),
    "leaseTime": leaseTime.value,
    "dhcpStatus": boolToInt(Serverchecked),
  }
  console.log(form)
  const result = await fetching('save_dhcp=' + JSON.stringify(form) + '&')
  if (!result || result?.result != 'ok') {
    Dialog({ message: result?.message || "Very Big Exception" });
    return;
  }
  Dialog({ message: 'Save Success' });
};

const onClickLeft = () => router.push('/')
function boolToInt(v) {
  if (v.value === true)
    return 1
  return 0
}
function IPChecker(ip) {
  if (ip.indexOf("192.168.") > -1)
    return ip.replace("192.168.1.", "")
  else
    return "192.168.1." + ip
}
</script>

<template>
  <div>


    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true" title="DHCP Setting"
      left-arrow @click-left="onClickLeft" />
    <br />
    <van-cell-group inset>
      <van-cell center title="DHCP Server">
        <template #right-icon>
          <van-switch inactive-color="#EEE" v-model="Serverchecked" size="24" />
        </template>
      </van-cell>


      <van-field v-model="beginAddress" type="digit" label="192.168.1." right-icon="warning-o"
        placeholder="DHCP Begin Address" />
      <van-field v-model="endAddress" type="digit" label="192.168.1." right-icon="warning-o"
        placeholder="DHCP End Address" />

      <van-cell center title="Lease Duration (Hour)">
        <template #right-icon>
          <van-stepper v-model="leaseTime" theme="round" min="1" max="24" button-size="24" />
        </template>
      </van-cell>
    </van-cell-group>

    <br>
    <van-button block color="#4d68ee" @click="onSubmit">
      Save
    </van-button>
  </div>
</template>

<style lang="less">
:root {
  --van-field-input-text-color: rgba(255, 255, 255, 0.8);
  --van-stepper-input-text-color: rgba(255, 255, 255, 0.8);
  --van-switch-on-background-color: #4d68ee;
}
</style>
