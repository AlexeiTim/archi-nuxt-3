<script setup lang="ts">
import type { Language } from '~/types/language';

const props = defineProps<{
    activeLang: Language
}>()

const emits = defineEmits<{
    (e: 'change-active-lang', value: Language): void,
    (e: 'show-menu', value: boolean): void
}>()
</script>

<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 bg-white z-20" :style="{
        backgroundImage: `url('./menu-bg.png')`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }">
        <div class="flex flex-col h-full w-full max-w-[1190px] m-auto px-2">
            <MenuHeader @cange-active-lang="(value: Language) => emits('change-active-lang', value)"
                :active-lang="props.activeLang" @show-menu="(value: boolean) => emits('show-menu', value)" />
            <MenuContent />
            <MenuFooter />
        </div>
    </div>
</template>