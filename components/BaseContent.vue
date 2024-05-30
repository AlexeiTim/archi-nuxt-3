<script setup lang="ts">
import type { Slide } from '~/types/slide';

const props = defineProps<{
    activeSlide: Slide
}>()
</script>

<template>
    <main class="flex flex-col flex-grow">
        <div class="w-[666px] mt-[305px] flex flex-col gap-10">
            <h1 class="text-dark_green text-[96px]/[20.73px] mb-[47px] font-bold transition-all ease-out">
                {{ props.activeSlide?.title }}
            </h1>
            <div class="flex gap-[58px]">
                <div v-for="description in props.activeSlide?.description" class="flex flex-col gap-2.5 w-[285px]">
                    <h2 class="text-dark_green text-[18px]/[21.06px] font-['FuturaDemiC'] font-bold">
                        {{ description.title }}
                    </h2>
                    <p class="text-light opacity-90 text-[14px]/[18px] font-['FuturaBookC'] font-normal">
                        {{ description.description }}
                    </p>
                </div>
            </div>
            <div class="flex gap-10 items-center">
                <div class="relative cursor-pointer hover:bg-dark_green bg-bg_button transition rounded-[5px]">
                    <button
                        class="w-[200px] h-[46px] text-white rounded-[5px] border-none font-['FuturaDemiC'] font-bold">
                        Read More
                    </button>
                    <div
                        class="absolute top-0 w-[200px] h-[46px] border-black -rotate-2 rounded-[5px] border-[0.5px] hover:rotate-0 transition" />
                </div>

                <NuxtLink :to="props.activeSlide?.link">
                    <div class="flex group items-center gap-[5px] transition">
                        <div class="relative group-hover:text-dark_green text-bg_button transition">
                            <IconPlayEmpty
                                class="absolute top-[1px] -rotate-[7deg] group-hover:rotate-[10deg] left-[-1px] transition pointer-events-auto" />
                            <IconPlay />
                        </div>
                        <span class="group-hover:text-dark_green text-bg_button transition font-bold">View
                            project</span>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </main>
</template>