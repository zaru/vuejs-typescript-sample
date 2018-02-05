<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">inc</button>
  </div>
</template>

<!-- .vue ファイルは ts-loader を通すため、 TypeScript じゃないとコンパイルできない… -->
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'

@Component
export default class HelloWorld extends Vue {
  @Getter count: any
  @Mutation increment: void
}

</script>

<style scoped>
</style>
