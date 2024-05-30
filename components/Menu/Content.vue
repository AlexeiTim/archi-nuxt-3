<script setup lang="ts">
import { MENU_LINKS } from "~/consts/links";

const hoverImage = ref<(typeof MENU_LINKS)[0] | null>(null);

function handleChangeHoveredLink(image: (typeof MENU_LINKS)[0] | null) {
  hoverImage.value = image;
}
</script>

<template>
  <div class="flex-grow text-center flex items-center justify-center">
    <div class="w-[271px] lg:h-[475px] relative">
      <nav>
        <ul class="flex flex-col gap-10">
          <li
            @mouseenter="handleChangeHoveredLink(link)"
            @mouseleave="handleChangeHoveredLink(null)"
            v-for="(link, index) in MENU_LINKS"
            :key="link.id"
            class="text-[24px]/[28px] md:text-[48px]/[63.98px] text-light transition-all"
            :class="{
              '!text-light opacity-40': hoverImage && hoverImage.id !== link.id,
              '!text-dark_green': hoverImage && hoverImage.id === link.id,
            }"
          >
            <RouterLink :to="link.path">{{ link.label }}</RouterLink>
            <Transition>
              <div
                v-if="hoverImage && link.image === hoverImage.image"
                class="absolute z-30 bottom-0 md:top-[50%] translate-y-[-50%] md:translate-y-[-50%] w-[105px] h-[150px] md:w-[217px] md:h-[316px]"
                :class="
                  index % 2 === 0
                    ? 'left-[-50px] md:left-[-250px]  md:translate-x-[10%] '
                    : 'right-[-50px] md:right-[-250px]'
                "
                :style="{
                  backgroundImage: `url(${link.image})`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  borderImageWidth: '0px',
                }"
              />
            </Transition>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
