<script setup lang="ts">
import { FOOTER_NAV_LINKS } from '~/consts/links';
import type { Slide } from '~/types/slide';

const props = defineProps<{
    slides: Slide[],
    activeIndex: number
}>()

const emits = defineEmits<{
    (e: 'change-slide', value: number): void,
}>()
</script>

<template>
    <footer
        class="flex flex-col-reverse items-center lg:items-start gap-4 lg:gap-[177px] md:flex md:flex-row py-[61px]">
        <ul class="flex gap-[35px]">
            <li v-for="link in FOOTER_NAV_LINKS" :key="link.id"
                class="text-sub text-['FuturaDemiC'] text-[16px]/[18.72px] font-semibold font-sans hover:text-dark_green transition">
                <RouterLink :to="link.path">{{ link.label }}</RouterLink>
            </li>
        </ul>
        <div class="flex gap-[20.5px]">
            <div @click="emits('change-slide', -1)" class="cursor-pointer hover:scale-150 transition flex items-center">
                <IconArrowLeft />
            </div>
            <div v-if="slides" class="flex gap-[13px] items-center">
                <div class="text-dark">01</div>
                <div class="w-[200px] h-[1px] bg-dark_green bg-opacity-38 relative">
                    <div class="bg-dark_green h-[1px] transition absolute top-0 z-10" :style="{
                        width: `${Math.floor(
                            (100 / props.slides.length) * (props.activeIndex + 1)
                        )}%`,
                        transition: 'width',
                    }" />
                </div>
                <div class="text-dark">0{{ slides.length }}</div>
            </div>
            <div @click="emits('change-slide', 1)"
                class="cursor-pointer hover:scale-150 rounded-full transition flex items-center">
                <IconArrowRight />
            </div>
        </div>
    </footer>
</template>