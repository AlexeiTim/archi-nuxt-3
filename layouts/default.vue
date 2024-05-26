<script setup lang="ts">
    console.log('loaded')
</script>

<template>
    <div class="flex flex-col justify-between size-full">
        <header class="text-red">
            <slot name="header" />
        </header>
        <main class="flex-grow">
            <slot />
        </main>
        <footer>
            <slot name="footer" />
        </footer>
    </div>
</template>

<style scoped>

</style>