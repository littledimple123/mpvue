<template>
  <div>
    <map id="map" longitude="113.324520" latitude="23.099994" scale="14"   :markers="markers" :polyline="polyline" @regionchange="regionchange" show-location style="width: 100%; height: 300px;"></map>
  </div>
</template>
<script>
  export default {
    name: 'List1',
    data () {
      return {
        markers: [{
          iconPath: '',
          id: 0,
          latitude: 23.099994,
          longitude: 113.324520,
          width: 50,
          height: 50
        }],
        polyline: [{
          points: [{
            longitude: 113.3245211,
            latitude: 23.10229
          }, {
            longitude: 113.324520,
            latitude: 23.21229
          }],
          color: '#FF0000DD',
          width: 2,
          dottedLine: true
        }]

      }
    },
    methods: {
      markertap (e) {
        console.log(e.mp.markerId)
      }
    }
  }
</script>
<style scoped>

</style>