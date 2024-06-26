<script setup lang="ts">
import { LANGUAGES } from "~/consts/languages";
import { HEADER_NAV_LINKS } from "~/consts/links";
import type { Language } from "~/types/language";

const props = defineProps<{
  activeLang: Language;
}>();

const emits = defineEmits<{
  (e: "show-menu", flag: boolean): void;
  (e: "change-active-lang", lang: Language): void;
}>();

const isActiveSearch = ref(false);
</script>

<template>
  <header class="flex justify-between py-2 md:py-10 items-center">
    <div class="flex gap-4 lg:gap-10 items-center">
      <RouterLink to="/">
        <h3 class="text-[24px]/[32px] text-main font-bold">AR.CHI</h3>
      </RouterLink>
      <AppDivider class="text-black opacity-20 hidden md:block" />
      <div class="gap-2 lg:gap-5 items-center hidden md:flex">
        <div
          v-for="language in LANGUAGES"
          :key="language.id"
          class="text-sub cursor-pointer transition-all text-[16px]/[18.7px]"
          @click="emits('change-active-lang', language.label)"
          :class="
            (props.activeLang === language.label &&
              `bg-text_bg hover:backdrop-brightness-80 font-['FuturaDemiC'] font-semibold cursor-pointer px-[3px] py-[6px] bg-opacity-10 rounded-[5px]`,
            activeLang !== language.label && 'hover:scale-105')
          "
        >
          {{ language.label }}
        </div>
      </div>
    </div>

    <div class="flex gap-2 md:gap-10 items-center">
      <nav v-if="!isActiveSearch" class="hidden md:block">
        <ul class="flex gap-4 xl:gap-10 lg:gap-8 md:gap-6">
          <li
            v-for="link in HEADER_NAV_LINKS"
            :key="link.id"
            class="text-light text-['FuturaDemiC'] text-[14px]/[16.72px] lg:text-[16px]/[16.72px] font-semibold font-sans hover:text-dark_green transition"
          >
            <RouterLink :to="link.path">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </nav>
      <div
        class="flex items-center gap-5 border-black border-opacity-20 relative"
      >
        <div
          v-if="isActiveSearch"
          class="w-full h-[1px] absolute bottom-[-10px] bg-black opacity-20"
        />
        <AppDivider class="text-black opacity-20" />
        <Icon
          v-if="!isActiveSearch"
          name="simple-line-icons:magnifier"
          class="cursor-pointer hover:scale-[1.1] hover:text-dark_green transition"
          size="20"
          @click="isActiveSearch = true"
        />
        <div v-else="isActiveSearch" class="relative w-full">
          <Icon
            name="simple-line-icons:magnifier"
            class="cursor-pointer hover:text-dark_green hover:scale-[1.1] transition absolute top-0.5 left-[-15px]"
            size="20"
          />
          <input
            placeholder="What are you looking for?"
            class="xl:w-[586px] lg:w-[250px] w-[150px] sm:w-[200px] pr-[20px] pl-[15px] xl:pl-[10px] lg:pl-[12px] bg-transparent outline-none placeholder:font-['FuturaBookC']"
          />
          <IconClose
            class="text-light hover:text-dark_green hover:scale-[1.1] transition absolute cursor-pointer top-1 w-[14px] right-0"
            @click="isActiveSearch = false"
          />
        </div>
        <AppDivider class="text-black opacity-20" />
      </div>
      <div>
        <IconBurger
          @click="emits('show-menu', true)"
          class="cursor-pointer hover:text-dark_green transition"
        />
      </div>
    </div>
  </header>
</template>
