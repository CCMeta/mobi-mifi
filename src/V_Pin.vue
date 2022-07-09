<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'
import { Dialog } from 'vant';

const get_device_info = await fetching('get_device_info=1&')

const router = useRouter()
const pinLockStatus = ref(!(get_device_info?.pinStatus == 0)) //本次开机已验证PIN码 本次PIN锁定已经解锁
const pinChecked = ref(!(get_device_info?.pinEnabled == 0)) //PIN码验证功能 已经打开 区别上一个 
const pinCode = ref('')
const pinCodeClone = ref('')

const onSubmit = async () => {
  const form = {
    "pinEnabled": boolToInt(pinChecked),
    "pinCode": pinCode.value,
  }
  console.log(form)
  const result = await fetching('operate_pin=' + JSON.stringify(form) + '&')
  if (!result || result?.result != 'ok') {
    Dialog({ message: result?.message || "Very Big Exception" });
    return;
  }
  Dialog({ message: 'Save Success' });
};
const onClickLeft = () => router.go(-1)
function boolToInt(v) {
  if (v.value === true)
    return 1
  return 0
}
</script>

<template>
  <div>
    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true" title="PIN Setting"
      left-arrow @click-left="onClickLeft" />
    <br />

    <van-cell-group inset>
      <van-cell center title="Current Login PIN Lock Status (ReadOnly)">
        <template #right-icon>
          <van-switch inactive-color="#EEE" v-model="pinLockStatus" size="24" disabled />
        </template>
      </van-cell>

      <van-cell center title="PIN Lock Function Enable">
        <template #right-icon>
          <van-switch inactive-color="#EEE" v-model="pinChecked" size="24" />
        </template>
      </van-cell>

      <van-field v-model="pinCode" type="digit" label="PIN Code" right-icon="warning-o" placeholder="PIN Code" />
      <van-field v-model="pinCodeClone" type="digit" label="Confirm" right-icon="warning-o"
        placeholder="PIN Code Confirm" />

    </van-cell-group>
    <br />
    <van-button block color="#4d68ee" @click="onSubmit">
      Save
    </van-button>
  </div>
</template>

<style lang="less">
</style>
