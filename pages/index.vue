<script setup lang="ts">
import { LANGUAGES } from '~/consts/languages';
import { getSlides } from '~/services/slider-service';
import type { Language } from '~/types/language';
import type { Slide } from '~/types/slide';

const slides = ref<Slide[]>([]);
const initIndex = ref(0);
const showMenu = ref(false);
const activeLang = ref<Language>(LANGUAGES[1].label);

const activeSlide = computed(() => slides.value?.[initIndex.value]);

function handleChangeActiveLang(lang: Language) {
    activeLang.value = lang;
}

function handleShowMenu(flag: boolean) {
    showMenu.value = flag;
}

async function loadSlides() {
    try {
        const { data } = await getSlides();
        slides.value = data;
    } catch (e) {
        console.error(e);
    }
}

onMounted(async () => {
    await loadSlides();
});

function handleChangeSlide(value: number) {
    initIndex.value += value

    if (initIndex.value > slides.value!.length - 1) initIndex.value = 0;
    else if (initIndex.value < 0) initIndex.value = slides.value!.length - 1
}
</script>

<template>
    <div class="size-full transition-all" :style="{
        backgroundImage: `url(${activeSlide?.image})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }">
        <div class="flex flex-col h-full w-full max-w-[1190px] px-[10px] m-auto">
            <BaseHeader @show-menu="handleShowMenu" :active-lang="activeLang"
                @change-active-lang="handleChangeActiveLang" />
            <!-- 
            <BaseContent :active-slide="activeSlide" />

            <BaseFooter @change-slide="handleChangeSlide" :active-index="initIndex" :slides="slides" /> -->
        </div>
    </div>
    <!-- <Transition>
        <Menu v-if="showMenu" @show-menu="handleShowMenu" :active-lang="activeLang"
            @change-active-lang="handleChangeActiveLang" />
    </Transition> -->
</template>

<style scoped></style>
