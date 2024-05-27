<script setup lang="ts">

const { data } = await useFetch('https://664878da2bb946cf2fa0af05.mockapi.io/api/v1/menu')

const initIndex = ref(0)
const activeSlide = computed(() => data.value[initIndex.value])

function handlePrevSlide() {
  if (initIndex.value !== 0)
    initIndex.value--
  else initIndex.value = data.value.length - 1
}

function handleNextSlide() {
  if (initIndex.value !== data.value.length - 1)
    initIndex.value++
  else initIndex.value = 0
}
</script>

<template>
  <div class="h-full">
      <div class="size-full transition-all" :style="{
    backgroundImage: `url(${activeSlide.image})`,
    backgroundSize: '100% 100%',
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center'
  }">
  <div class="flex flex-col h-full w-full max-w-[1190px] m-auto">
    <header class="flex justify-between py-10 items-center">
        <div class="flex gap-10 items-center">
          <h3 class="text-[24px]/[32px] text-main font-bold">AR.CHI</h3>
        <AppDivider />
        <div class="flex gap-5 items-center">
            <div class="text-sub">RUS</div>
            <div class="bg-text_bg text-sub text-[16px]/[18.7px] font-['FuturaDemiC'] font-semibold cursor-pointer px-[3px] py-[6px] bg-opacity-10 rounded-[5px]">
              ENG
            </div>
        </div>
        </div>

        <div class="flex gap-10">
          <nav>
          <ul class="flex gap-10">
            <li class="text-light"><a href="">About us</a></li>
            <li class="text-light"><a href="">Architecture</a></li>
            <li class="text-light"><a href="">Interior</a></li>
            <li class="text-light"><a href="">Contact</a></li>
            <li class="text-light"><a href="">Shop</a></li>
          </ul>
        </nav>
        <div class="flex gap-5">
          <AppDivider />
          <Icon name="simple-line-icons:magnifier" size="20">search</Icon>
            <AppDivider />
        </div>
        <div>
          <Icon name="menu" />
        </div>
        </div>
    </header>

      <main class="flex flex-col justify-center align-center flex-grow" >
      <div class="w-[666px] flex flex-col gap-10">
        <h1 class="text-dark_green  text-[96px]/[20.73px] font-bold h-[45px] transition-all ease-out">{{ activeSlide.title }}</h1>
        <div class="flex">
          <div class="flex flex-col gap-2.5">
            <h2 class="text-dark_green text-[18px]/[21.06px] font-['FuturaDemiC']">{{ activeSlide.description.col1.title }}</h2>
            <p class="text-light opacity-90 font-['FuturaBookC']">{{ activeSlide.description.col1.description }}</p>
          </div>
          <div class="flex flex-col gap-2.5">
            <h2 class="text-dark_green text-[18px]/[21.06px] font-['FuturaDemiC']">{{ activeSlide.description.col2.title }}</h2>
            <p class="text-light opacity-90 font-['FuturaBookC']">{{ activeSlide.description.col2.description }}</p>
          </div>
        </div>
        <div class="flex gap-10 items-center">
          <div class="relative cursor-pointer hover:bg-dark_green bg-bg_button transition rounded-[5px]">
            <button class="w-[200px] h-[46px]  text-white rounded-[5px] border-none font-['FuturaDemiC']">Read More</button>
            <div class="absolute top-0 w-[200px] h-[46px] border-black -rotate-2 rounded-[5px] border-[0.5px] hover:rotate-0 transition" />
          </div>
          
          <NuxtLink :to="activeSlide.link">
            <div class="flex group items-center gap-[5px] transition">
              <div class="relative group-hover:text-dark_green text-bg_button transition">
                <IconPlayEmpty class="absolute top-[1px] -rotate-[7deg] group-hover:rotate-[10deg] left-[-1px] transition pointer-events-auto" />
                <IconPlay />
              </div>
              <span class="group-hover:text-dark_green text-bg_button transition">View project</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </main>

    <footer class="flex gap-[177px] py-[61px]">
      <ul class="flex gap-[35px]">
        <li><a href="">Facebook</a></li>
        <li><a href="">Vkontakte</a></li>
        <li><a href="">Behance</a></li>
      </ul>
      <div class="flex gap-[20.5px]">
        <div @click="handlePrevSlide" class="cursor-pointer hover:scale-150 transition flex items-center">
          <IconArrowLeft />
        </div>
        <div class="flex gap-[13px] items-center">
          <div class="text-dark">01</div>
          <div class="w-[200px] h-[1px] bg-dark_green bg-opacity-38 relative">
                <div class="bg-dark_green h-[1px] absolute top-0 z-10" :style="{width: `${Math.floor(100 / data.length * (initIndex + 1))}%`}" />
          </div>
          <div class="text-dark">0{{data.length}}</div>
        </div>
        <div @click="handleNextSlide" class="cursor-pointer hover:scale-150 rounded-full transition flex items-center">
          <IconArrowRight />
        </div>
      </div>
    </footer>
  </div>
  </div>
  </div>

  <!-- <NuxtLayout>
    <template #header>
      <BaseHeader />
    </template>
    <NuxtPage />
    <template #footer>
      <BaseFooter />
    </template>
  </NuxtLayout> -->
</template>
