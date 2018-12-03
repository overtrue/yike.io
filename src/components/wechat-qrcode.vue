<template>
  <div class="modal fade" id="page-wechat-qrcode" ref="pageWechatQrcode" tabindex="-1" role="dialog" aria-labelledby="qrcode-wechat" aria-hidden="true">
    <div class="modal-dialog modal-sm modal-dialog-centered" role="document" style="z-index: 99999">
      <div class="modal-content">
        <div class="modal-body text-center">
          <canvas id="page-wechat-qrcode-canvas"></canvas>
          <p>使用微信扫一扫识别上方二维码</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
  name: 'wechat-qrcode',
  mounted () {
    setTimeout(() => {
      QRCode.toCanvas(
        document.getElementById('page-wechat-qrcode-canvas'),
        window.location.href,
        { width: 200 }
      )
    }, 500)

    document.body.appendChild(this.$refs['pageWechatQrcode'])
  }
}
</script>

<style scoped>
</style>
