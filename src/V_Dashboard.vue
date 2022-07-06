<script setup>
import { ref } from 'vue';
import TopBar from './TopBar.vue';
import TabBar from './TabBar.vue';
import { fetching } from './utils'

// before login can do pin/simlock/language
const get_web_language = await fetching('get_web_language=1&')
const get_simlock_status = await fetching('get_simlock_status=1&')
const get_pin_operate_result = await fetching('get_pin_operate_result=1&')


// const web_login = await fetching('web_login={"passwd":"admin"}&')
// document.cookie = "SessionId=" + web_login.session
const network_speed = await fetching('network_speed=1&')
const navtop_info = await fetching('navtop_info=1&')
const connected_devices = await fetching('connected_devices=1&')



const bit2MB = bit => bit.length > 0 ? (bit / 8 / 1024 / 1024).toFixed(2) : 0
</script>

<template>
  <div>
    <van-nav-bar title="Dashboard" :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true" />

    <div style="z-index: -999;padding-bottom: 5rem;">
      <TopBar />
      <van-grid :border="false" class="state-panel" direction="horizontal" gutter="0" :column-num="2">
        <van-grid-item>
          <h2>
            <van-icon name="sort" />{{ bit2MB(network_speed.upload) }}
          </h2>
          <div>
            <div>Up</div>
            <div>MB/S</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <h2>
            <van-icon name="sort" />{{ bit2MB(network_speed.download) }}
          </h2>
          <div>
            <div>Down</div>
            <div>MB/S</div>
          </div>
        </van-grid-item>
      </van-grid>

      <van-cell-group class="flow-panel" title="Flow Statistics" inset>
        <van-cell title="Session Flow" :value="bit2MB(navtop_info.cur_send)" label="This Session Data" center />
        <van-cell title="Month Flow" :value="bit2MB(navtop_info.total_send)" label="This Month Data" center />
        <van-cell title="Total Flow" :value="bit2MB(navtop_info.total_send)" label="All Time Data" center />
      </van-cell-group>

      <br>
      <van-cell-group class="client-panel" :title="'Clients = ' + connected_devices.totalNum" inset>
        <van-cell :title="device.hostName" :value="device.ip_addr" :label="device.mac_addr" center icon="desktop-o"
          v-for="device in connected_devices.devices" />
      </van-cell-group>
    </div>

    <TabBar />
  </div>
</template>

<style lang="less">
.van-grid-item__content--horizontal {
  border-radius: 5px;
  flex-direction: row;
}

.van-cell__left-icon.van-icon {
  font-size: var(--van-cell-icon-size);
}

:root {
  --van-grid-item-content-background-color: rgba(0, 0, 0, 0.2);
  --van-cell-group-background-color: rgba(0, 0, 0, 0.2);
  --van-cell-group-title-color: #FFF;
  // --van-cell-value-color: #FFF;
  // --van-cell-label-color: #FFF;
  --van-cell-text-color: #FFF;
  --van-cell-background-color: transparent;
  --van-cell-border-color: #CCC;
  --van-cell-icon-size: 30px;

  --van-nav-bar-icon-color: #FFF;
  --van-nav-bar-title-text-color: #FFF;
  --van-nav-bar-background-color: #5064F0;


}

.state-panel {
  margin: 1rem;

  h2 {
    margin: 0;
    padding: 1rem 5px;
  }

  * {
    color: white;
  }

  div {
    padding: 2px;
  }
}
</style>
