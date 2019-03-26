<template>
  <div class="share-action">
    <p class="text-center text-gray-40 text-14">分享</p>
    <button class="mx-auto btn btn-icon text-18 copy-link text-gray-50" :data-clipboard-text="copyText" data-toggle="tooltip" title="复制链接">
      <link-variant title="复制链接" /></button>
    <div>
      <a :class="btnClasses" target="_blank" :href="weibo" title="分享到微博">
        <span class="material-design-icon sina-icon">
          <svg t="1528816678350" class="material-design-icon__svg" style="" viewBox="0 0 1260 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1944" xmlns:xlink="http://www.w3.org/1999/xlink" width="17.5" height="14">
            <path d="M1174.286235 110.614403A330.443026 330.443026 0 0 0 858.311759 7.467639a50.406563 50.406563 0 0 0-37.804922 58.34093 50.406563 50.406563 0 0 0 58.34093 37.804922 238.497721 238.497721 0 0 1 226.829535 72.342753 233.363719 233.363719 0 0 1 46.672744 233.36372 46.672744 46.672744 0 0 0 3.267092 37.804922 60.674567 60.674567 0 0 0 27.536919 24.269827 53.673655 53.673655 0 0 0 61.608021-30.804011 351.445761 351.445761 0 0 0-72.342753-329.509572z m0 0" p-id="1945"></path>
            <path d="M1026.800365 412.587056a40.13856 40.13856 0 0 0 51.340018-27.536919 158.220602 158.220602 0 0 0-34.537831-157.753874 167.088423 167.088423 0 0 0-154.486782-51.340019 37.338195 37.338195 0 0 0-30.804011 46.672744 37.338195 37.338195 0 0 0 46.672744 30.804011A79.343665 79.343665 0 0 1 980.127621 280.036463a82.144029 82.144029 0 0 1 17.268915 78.876937A46.672744 46.672744 0 0 0 1026.800365 412.587056z m-82.610757 78.876937c-17.268915-7.000912-30.804011-10.268004-20.536007-30.804011a136.751139 136.751139 0 0 0 0-126.949863c-41.072015-58.34093-154.486782-55.073838-280.036463 0 0 0-41.072015 17.268915-30.804011-13.535096 20.536007-65.341841 17.268915-116.68186-13.535096-147.485871-70.475843-69.075661-255.766636 2.800365-412.587056 161.020967-116.68186 119.948952-186.690975 243.631723-186.690975 353.779398 0 209.56062 267.90155 336.510483 528.802188 336.510483 343.511395 0 569.874202-199.292616 569.874202-357.04649 0-96.145852-82.610757-151.21969-154.486782-175.02279z m-415.38742 456.926162c-209.56062 20.536007-388.783956-75.609845-401.852325-209.56062s144.218778-264.634458 353.779399-285.170465 387.850501 75.609845 401.852324 209.56062-144.218778 264.16773-353.779398 285.170465z m0 0" p-id="1946"></path>
            <path d="M549.338195 556.805834a224.495898 224.495898 0 0 0-253.899726 109.680948A154.020055 154.020055 0 0 0 394.851413 886.782133a222.628988 222.628988 0 0 0 267.90155-113.414767 155.420237 155.420237 0 0 0-113.414768-216.561532z m-75.609845 230.096627a77.476755 77.476755 0 0 1-96.145852 30.804011 54.60711 54.60711 0 0 1-20.536008-82.610756 78.41021 78.41021 0 0 1 93.345488-30.804011 52.273473 52.273473 0 0 1 24.269827 82.610756z m0 0" p-id="1947"></path>
          </svg>
        </span>
      </a>
      <a :class="btnClasses" data-toggle="modal" data-target="#page-wechat-qrcode" title="分享到微信">
        <span class="material-design-icon link-variant-icon"><svg t="1531575816445" class="material-design-icon__svg" viewBox="0 0 1171 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1968" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M331.428571 263.428571q0-23.428571-14.285714-37.714286t-37.714286-14.285714q-24.571429 0-43.428571 14.571429t-18.857143 37.428571q0 22.285714 18.857143 36.857143t43.428571 14.571429q23.428571 0 37.714286-14t14.285714-37.428571zm424.571429 289.714286q0-16-14.571429-28.571429t-37.428571-12.571429q-15.428571 0-28.285714 12.857143t-12.857143 28.285714q0 16 12.857143 28.857143t28.285714 12.857143q22.857143 0 37.428571-12.571429t14.571429-29.142857zm-134.857143-289.714286q0-23.428571-14-37.714286t-37.428571-14.285714q-24.571429 0-43.428571 14.571429t-18.857143 37.428571q0 22.285714 18.857143 36.857143t43.428571 14.571429q23.428571 0 37.428571-14t14-37.428571zm362.857143 289.714286q0-16-14.857143-28.571429t-37.142857-12.571429q-15.428571 0-28.285714 12.857143t-12.857143 28.285714q0 16 12.857143 28.857143t28.285714 12.857143q22.285714 0 37.142857-12.571429t14.857143-29.142857zm-152-226.857143q-17.714286-2.285714-40-2.285714-96.571429 0-177.714286 44t-127.714286 119.142857-46.571429 164.285714q0 44.571429 13.142857 86.857143-20 1.714286-38.857143 1.714286-14.857143 0-28.571429-0.857143t-31.428571-3.714286-25.428571-4-31.142857-6-28.571429-6l-144.571429 72.571429 41.142857-124.571429q-165.714286-116-165.714286-280 0-96.571429 55.714286-177.714286t150.857143-127.714286 207.714286-46.571429q100.571429 0 190 37.714286t149.714286 104.285714 78 148.857143zm338.285714 320.571429q0 66.857143-39.142857 127.714286t-106 110.571429l31.428571 103.428571-113.714286-62.285714q-85.714286 21.142857-124.571429 21.142857-96.571429 0-177.714286-40.285714t-127.714286-109.428571-46.571429-150.857143 46.571429-150.857143 127.714286-109.428571 177.714286-40.285714q92 0 173.142857 40.285714t130 109.714286 48.857143 150.571429z" p-id="1969"></path>
          </svg></span>
      </a>
      <a :class="btnClasses" target="_blank" title="分享到 Twitter" :href="twitter">
        <twitter-icon />
      </a>
      <a :class="btnClasses" target="_blank" title="分享到 Facebook" :href="facebook">
        <facebook-icon />
      </a>
    </div>
  </div>
</template>

<script>
import RelationBtn from './relation-btn'
import LinkVariant from '$icons/LinkVariant'
import VolumeMute from '$icons/VolumeMute'
import VolumeHigh from '$icons/VolumeHigh'
import CheckIcon from '$icons/Check'
import TwitterIcon from '$icons/Twitter'
import FacebookIcon from '$icons/Facebook'
import ClipboardJS from 'clipboard'

export default {
  name: 'share-action',
  components: {
    RelationBtn,
    LinkVariant,
    VolumeMute,
    VolumeHigh,
    CheckIcon,
    TwitterIcon,
    FacebookIcon
  },
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      weibo: '',
      twitter: '',
      facebook: '',
      btnClasses:
        'btn btn-icon d-block mx-auto mt-2 bg-white text-18 text-gray-50',
      hovering: false,
      title: encodeURIComponent(this.item.title + ' -- via ' + document.title)
    }
  },
  computed: {
    copyText () {
      return this.title + '\n\n' + window.location.href
    }
  },
  mounted () {
    let url = encodeURIComponent(window.location.href)
    this.weibo = `https://service.weibo.com/share/share.php?url=${url}&title=${
      this.title
    }&pic=&appkey=`
    this.twitter = `https://twitter.com/intent/tweet?text=${
      this.title
    }&url=${url}`
    this.facebook = `https://www.facebook.com/sharer/sharer.php?u=${url}`

    let btn = new ClipboardJS('.copy-link')

    btn.on('success', () => {
      this.$message.success('链接已复制')
    })
  }
}
</script>

<style lang="scss" scoped>
.share-action {
  .material-design-icon {
    vertical-align: middle;
  }
}
</style>
