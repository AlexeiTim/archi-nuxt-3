<script setup lang="ts">
import { FOOTER_NAV_LINKS } from '~/consts/links';

</script>

<template>
    <div class="py-[60px] flex justify-center">
        <ul class="flex gap-[35px]">
            <li v-for="link in FOOTER_NAV_LINKS" :key="link.id"
                class="text-sub text-['FuturaDemiC'] text-[16px]/[18.72px] font-semibold font-sans hover:text-dark_green transition">
                <RouterLink :to="link.path">{{ link.label }}</RouterLink>
            </li>
        </ul>
    </div>
</template>