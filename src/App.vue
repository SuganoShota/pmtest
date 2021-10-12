<template>
  <network ref="network"
           :nodes="nodes"
           :edges="edges"
           :options="options"
           style="height: 1500px; width: 1600px"
  >
  </network>
</template>

<script>

export default {
  data() {
    return {
      dates: [],
      variant_option: null,
      targetInventory: "",
      nodes: [],
      edges: [],
      options: {
        edges: {
          font: {
            size: 30,
          },
          smooth: {
            type: "continuous"
          }
        },
        nodes: {
          mass: 3,
          physics: false,
          shape: "box",
          font: {
            size: 30
          }
        },
      }
    }
  }
}
</script>

<style scoped>

</style>
