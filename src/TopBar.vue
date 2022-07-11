<script setup>
import { fetching } from './utils'
import { ref } from 'vue';


const colors = {
  off: "#ef5350",
  on: "#80FF00",
  warn: "#ffee58",
  idle: "#FFF",
}
const network_info = await fetching('network_info=1&')
const navtop_info = await fetching('navtop_info=1&')

const gprsStatusColor = network_info.gprsStatus === '1' ? colors.on : colors.off
const battrayStatusColor = navtop_info.batteryRemain > '20' ? colors.on : colors.off
const smsStatusColor = navtop_info.tobeReadSMS > '0' ? colors.warn : colors.idle
const wifiStatusColor = navtop_info.apStatus === '1' ? colors.on : colors.off

function string2Unicode(str) {
  var arr;
  var unicode = [];
  if (str.lastIndexOf(".") === str.length - 1) { str = str.substring(0, str.lastIndexOf(".")); }
  arr = str.split(".");
  for (let i = 0; i < arr.length; i++) { unicode += String.fromCharCode("0x" + arr[i]); }
  return unicode;
}
function unicode2String(unicode) {
  var arr = [];
  for (let i = 0; i < unicode.length; i++) { arr.push(unicode.charCodeAt(i).toString(16)); }
  return arr.join(".");
}
</script>

<template>
  <div style="padding: 2px 5px;">
    <van-row align="center" gutter="0">
      <van-col span="14">
        <van-icon size="20" :color="gprsStatusColor" style="vertical-align: middle;float: left;">
          <svg class="van-icon__image" fill="currentColor" viewBox="0 0 1280 1024">
            <path
              d="M432 576h-96c-17.68 0-32 14.32-32 32v384c0 17.68 14.32 32 32 32h96c17.68 0 32-14.32 32-32V608c0-17.68-14.32-32-32-32zM176 768H80c-17.68 0-32 14.32-32 32v192c0 17.68 14.32 32 32 32h96c17.68 0 32-14.32 32-32v-192c0-17.68-14.32-32-32-32z m512-384h-96c-17.68 0-32 14.32-32 32v576c0 17.68 14.32 32 32 32h96c17.68 0 32-14.32 32-32V416c0-17.68-14.32-32-32-32z m256-192h-96c-17.68 0-32 14.32-32 32v768c0 17.68 14.32 32 32 32h96c17.68 0 32-14.32 32-32V224c0-17.68-14.32-32-32-32z"
              p-id="2058"></path>
          </svg>
        </van-icon>
        <span style="font-size:small;vertical-align: bottom;padding: 0 5px;color:#FFF;">
          {{ string2Unicode(network_info?.networkName) }}
        </span>
        <span style="font-size:small;vertical-align: bottom;color:#FFF;">{{ network_info?.networkType }}</span>
      </van-col>
      <!-- <van-col span="4">
        <span style="font-size:small;color:#FFF;">00:00:00</span>
      </van-col> -->
      <van-col span="10" style="text-align:end;">

        <van-icon size="20" :color="smsStatusColor" style=" padding: 0 5px; vertical-align: middle;;">
          <svg class="van-icon__image" fill="currentColor" viewBox="0 0 512 512">
            <path
              d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" />
          </svg>
        </van-icon>

        <van-icon size="20" :color="wifiStatusColor" style=" padding: 0 5px; vertical-align: middle;;">
          <svg class="van-icon__image" fill="currentColor" viewBox="0 0 640 512">
            <path
              d="M319.1 351.1c-35.35 0-64 28.66-64 64.01s28.66 64.01 64 64.01c35.34 0 64-28.66 64-64.01S355.3 351.1 319.1 351.1zM320 191.1c-70.25 0-137.9 25.6-190.5 72.03C116.3 275.7 115 295.9 126.7 309.2C138.5 322.4 158.7 323.7 171.9 312C212.8 275.9 265.4 256 320 256s107.3 19.88 148.1 56C474.2 317.4 481.8 320 489.3 320c8.844 0 17.66-3.656 24-10.81C525 295.9 523.8 275.7 510.5 264C457.9 217.6 390.3 191.1 320 191.1zM630.2 156.7C546.3 76.28 436.2 32 320 32S93.69 76.28 9.844 156.7c-12.75 12.25-13.16 32.5-.9375 45.25c12.22 12.78 32.47 13.12 45.25 .9375C125.1 133.1 220.4 96 320 96s193.1 37.97 265.8 106.9C592.1 208.8 600 211.8 608 211.8c8.406 0 16.81-3.281 23.09-9.844C643.3 189.2 642.9 168.1 630.2 156.7z" />
          </svg>
        </van-icon>

        <van-icon size="20" :color="battrayStatusColor" style=" padding: 0 5px; vertical-align: middle;;">
          <svg class="van-icon__image" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M0 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2zm14 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z">
            </path>
            <path :d="` M2 6h${navtop_info?.batteryRemain / 10.00}v4H2V6z `"></path>
          </svg>
        </van-icon>

        <span style="font-size:small;vertical-align: bottom;color:#FFF;;">
          {{ navtop_info?.batteryRemain }}%
        </span>

      </van-col>
    </van-row>
  </div>
</template>

<style lang="less">
</style>
