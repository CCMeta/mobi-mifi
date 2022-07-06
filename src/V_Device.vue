<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'

const router = useRouter()
const get_device_info = await fetching('get_device_info=1&')

const onClickLeft = () => router.go(-1) 
</script>

<template>
  <div>
    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true"
      title="Device Information" left-arrow @click-left="onClickLeft" />

    <van-cell-group class="flow-panel" title="Device Information" inset>
      <van-cell title="SerialNumber" :value="get_device_info.serialNumber" />
      <van-cell title="IMEI" :value="get_device_info.imei" />
      <van-cell title="IMSI" :value="get_device_info.imsi" />
      <van-cell title="MAC" :value="get_device_info.mac" />
      <van-cell title="WanIP" :value="get_device_info.wanIP" />
      <van-cell title="WebUIVersion" :value="get_device_info.webUIVersion" />
      <van-cell title="HardwareVersion" :value="get_device_info.hardwareVersion" />
      <van-cell title="FirmwarewVersion" :value="get_device_info.firmwarewVersion" />
      <van-cell title="SoftwarewVersion" value="" />
      <van-cell title="" :value="get_device_info.softwarewVersion" />
    </van-cell-group>
  </div>
</template>

<style lang="less">
.van-cell__title,
.van-cell__value {
  flex: auto;
}
</style>
