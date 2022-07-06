<script setup>
import { fetching } from './utils'

const network_info = await fetching('network_info=1&')

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
      <van-col span="10">
        <van-icon size="20" color="#FFF" style="vertical-align: middle;">
          <svg class="van-icon__image" fill="currentColor" viewBox="0 0 1280 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M432 576h-96c-17.68 0-32 14.32-32 32v384c0 17.68 14.32 32 32 32h96c17.68 0 32-14.32 32-32V608c0-17.68-14.32-32-32-32zM176 768H80c-17.68 0-32 14.32-32 32v192c0 17.68 14.32 32 32 32h96c17.68 0 32-14.32 32-32v-192c0-17.68-14.32-32-32-32z m512-384h-96c-17.68 0-32 14.32-32 32v576c0 17.68 14.32 32 32 32h96c17.68 0 32-14.32 32-32V416c0-17.68-14.32-32-32-32z m256-192h-96c-17.68 0-32 14.32-32 32v768c0 17.68 14.32 32 32 32h96c17.68 0 32-14.32 32-32V224c0-17.68-14.32-32-32-32z"
              p-id="2058"></path>
          </svg>
        </van-icon>
        <span style="font-size:small;vertical-align: bottom;padding: 0 5px;color:#FFF;">
          {{ string2Unicode(network_info.networkName) }}
        </span>
        <span style="font-size:small;vertical-align: bottom;color:#FFF;">4G</span>
      </van-col>
      <van-col span="4">
        <span style="font-size:small;color:#FFF;">00:00:00</span>
      </van-col>
      <van-col span="10">
        <van-icon size="20" color="rgb(128,255,0)" style=" padding: 0 5px; vertical-align: middle;float: right;">
          <svg class="van-icon__image" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" />
          </svg>
        </van-icon>
        <van-icon size="20" color="#ef5350" style=" padding: 0 5px; vertical-align: middle;float: right;">
          <svg class="van-icon__image" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
              d="M319.1 351.1c-35.35 0-64 28.66-64 64.01s28.66 64.01 64 64.01c35.34 0 64-28.66 64-64.01S355.3 351.1 319.1 351.1zM320 191.1c-70.25 0-137.9 25.6-190.5 72.03C116.3 275.7 115 295.9 126.7 309.2C138.5 322.4 158.7 323.7 171.9 312C212.8 275.9 265.4 256 320 256s107.3 19.88 148.1 56C474.2 317.4 481.8 320 489.3 320c8.844 0 17.66-3.656 24-10.81C525 295.9 523.8 275.7 510.5 264C457.9 217.6 390.3 191.1 320 191.1zM630.2 156.7C546.3 76.28 436.2 32 320 32S93.69 76.28 9.844 156.7c-12.75 12.25-13.16 32.5-.9375 45.25c12.22 12.78 32.47 13.12 45.25 .9375C125.1 133.1 220.4 96 320 96s193.1 37.97 265.8 106.9C592.1 208.8 600 211.8 608 211.8c8.406 0 16.81-3.281 23.09-9.844C643.3 189.2 642.9 168.1 630.2 156.7z" />
          </svg>
        </van-icon>
        <van-icon size="20" color="#ffee58" style=" padding: 0 5px; vertical-align: middle;float: right;">
          <svg class="van-icon__image" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              d="M288 320H96V192H288V320zM0 176C0 131.8 35.82 96 80 96H464C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0 380.2 0 336V176zM80 160C71.16 160 64 167.2 64 176V336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80z" />
          </svg>
        </van-icon>
      </van-col>
    </van-row>
  </div>
</template>

<style lang="less">
</style>
