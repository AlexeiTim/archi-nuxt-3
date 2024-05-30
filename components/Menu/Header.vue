<script setup lang="ts">
import { LANGUAGES } from '~/consts/languages';
import type { Language } from '~/types/language';

const props = defineProps<{
    activeLang: string
}>()

const emits = defineEmits<{
    (e: 'show-menu', flag: boolean): void,
    (e: 'cange-active-lang', value: Language): void
}>()
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="flex gap-10 items-center py-10">
            <RouterLink to="/">
                <h3 class="text-[24px]/[32px] text-main font-bold">AR.CHI</h3>
            </RouterLink>
            <AppDivider class="text-black opacity-20" />
            <div class="flex gap-5 items-center">
                <div v-for="language in LANGUAGES" :key="language.id"
                    class="text-sub cursor-pointer transition-all text-[16px]/[18.7px]"
                    @click="emits('cange-active-lang', language.label)"
                    :class="props.activeLang === language.label && `bg-text_bg font-['FuturaDemiC'] font-semibold cursor-pointer px-[3px] py-[6px] bg-opacity-10 rounded-[5px]`">
                    {{ language.label }}
                </div>
            </div>
        </div>

        <div class="flex group items-center gap-[14px] py-10 cursor-pointer  hover:scale-105 transition"
            @click="emits('show-menu', false)">
            <span
                class="text-['FuturaDemiC'] group-hover:text-dark_green font-semibold text-[16px]/[18.92px] text-black">Close</span>
            <IconClose class="size-[20px] group-hover:text-dark_green" />
        </div>
    </div>
</template>