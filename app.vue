<script setup lang="ts">
const { data } = await useFetch('https://664878da2bb946cf2fa0af05.mockapi.io/api/v1/menu')

const initIndex = ref(0)
const activeSlide = computed(() => data.value[initIndex.value])
const isActiveSearch = ref(false)

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

const HEADER_NAV_LINKS = [
  { id: 1, label: 'About us', path: '/', },
  { id: 2, label: 'Architecture', path: '/', },
  { id: 3, label: 'Interior', path: '/', },
  { id: 4, label: 'Contact', path: '/', },
  { id: 5, label: 'Shop', path: '/', },
]

const MENU_LINKS = [
  { id: 1, label: 'About us', path: '/', image: '/' },
  { id: 2, label: 'Architecture', path: '/', image: './Architecture.png' },
  { id: 3, label: 'Interior', path: '/', image: './Interior.png' },
  { id: 4, label: 'Contact', path: '/', image: '/' },
  { id: 5, label: 'Shop', path: '/', image: '/' },
]

const FOOTER_NAV_LINKS = [
  { id: 1, label: 'Facebook', path: '/' },
  { id: 2, label: 'Vkontakte', path: '/' },
  { id: 3, label: 'Behance', path: '/' },
]

const activeLang = ref<Language>('ENG')

type Language = 'ENG' | 'RU'

interface ILanguage {
  id: number
  label: Language
}

const LANGUAGES: ILanguage[] = [
  { id: 1, label: 'RU' },
  { id: 2, label: 'ENG' }
]

const hoverImage = ref<typeof MENU_LINKS[0] | null>(null)

function handleChangeHoveredLink(image: typeof MENU_LINKS[0] | null) {
  hoverImage.value = image
}


function handleChangeActiveLang(lang: Language) {
  activeLang.value = lang
}
const showMenu = ref(true)
</script>

<template>
  <div class="h-full">
    <div class="size-full transition-all" :style="{
      backgroundImage: `url(${activeSlide.image})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }">
      <div class="flex flex-col h-full w-full max-w-[1190px] m-auto">
        <header class="flex justify-between py-10 items-center">
          <div class="flex gap-10 items-center">
            <RouterLink to="/">
              <h3 class="text-[24px]/[32px] text-main font-bold">AR.CHI</h3>
            </RouterLink>
            <AppDivider class="text-black opacity-20" />
            <div class="flex gap-5 items-center">
              <div v-for="language in LANGUAGES" :key="language.id"
                class="text-sub cursor-pointer transition-all text-[16px]/[18.7px]"
                @click="handleChangeActiveLang(language.label)"
                :class="activeLang === language.label && `bg-text_bg font-['FuturaDemiC'] font-semibold cursor-pointer px-[3px] py-[6px] bg-opacity-10 rounded-[5px]`">
                {{ language.label }}
              </div>
            </div>
          </div>

          <div class="flex gap-10 items-center">
            <nav v-if="!isActiveSearch">
              <ul class="flex gap-10">
                <li v-for="link in HEADER_NAV_LINKS" :key="link.id"
                  class="text-light text-['FuturaDemiC'] text-[16px]/[18.72px] font-semibold font-sans hover:text-dark_green transition">
                  <RouterLink :to="link.path">{{ link.label }}</RouterLink>
                </li>
              </ul>
            </nav>
            <div class="flex items-center gap-5 border-black border-opacity-20 relative ">
              <div v-if="isActiveSearch" class="w-full h-[1px] absolute bottom-[-10px] bg-black opacity-20" />
              <AppDivider class="text-black opacity-20" />
              <Icon v-if="!isActiveSearch" name="simple-line-icons:magnifier"
                class="cursor-pointer hover:scale-[1.1] hover:text-dark_green transition" size="20"
                @click="isActiveSearch = true" />
              <div v-else="isActiveSearch" class="relative w-full">
                <Icon name="simple-line-icons:magnifier"
                  class="cursor-pointer hover:text-dark_green hover:scale-[1.1] transition absolute top-0.5 left-[10px]"
                  size="20" />
                <input placeholder="What are you looking for?"
                  class="w-[586px] pl-10 pr-[50px] bg-transparent outline-none placeholder:font-['FuturaBookC']" />
                <IconClose
                  class="text-light hover:text-dark_green hover:scale-[1.1] transition absolute cursor-pointer top-1 w-[14px] right-[26px]"
                  @click="isActiveSearch = false" />
              </div>
              <AppDivider class="text-black opacity-20" />
            </div>
            <div>
              <IconBurger @click="showMenu = true" class="cursor-pointer hover:text-dark_green transition" />
            </div>
          </div>
        </header>

        <main class="flex flex-col justify-center align-center flex-grow">
          <div class="w-[666px] flex flex-col gap-10">
            <h1 class="text-dark_green  text-[96px]/[20.73px] font-bold h-[45px] transition-all ease-out">{{
              activeSlide.title }}</h1>
            <div class="flex">
              <div class="flex flex-col gap-2.5">
                <h2 class="text-dark_green text-[18px]/[21.06px] font-['FuturaDemiC']">{{
                  activeSlide.description.col1.title }}</h2>
                <p class="text-light opacity-90 font-['FuturaBookC']">{{ activeSlide.description.col1.description }}</p>
              </div>
              <div class="flex flex-col gap-2.5">
                <h2 class="text-dark_green text-[18px]/[21.06px] font-['FuturaDemiC']">{{
                  activeSlide.description.col2.title }}</h2>
                <p class="text-light opacity-90 font-['FuturaBookC']">{{ activeSlide.description.col2.description }}</p>
              </div>
            </div>
            <div class="flex gap-10 items-center">
              <div class="relative cursor-pointer hover:bg-dark_green bg-bg_button transition rounded-[5px]">
                <button class="w-[200px] h-[46px]  text-white rounded-[5px] border-none font-['FuturaDemiC']">Read
                  More</button>
                <div
                  class="absolute top-0 w-[200px] h-[46px] border-black -rotate-2 rounded-[5px] border-[0.5px] hover:rotate-0 transition" />
              </div>

              <NuxtLink :to="activeSlide.link">
                <div class="flex group items-center gap-[5px] transition">
                  <div class="relative group-hover:text-dark_green text-bg_button transition">
                    <IconPlayEmpty
                      class="absolute top-[1px] -rotate-[7deg] group-hover:rotate-[10deg] left-[-1px] transition pointer-events-auto" />
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
            <li v-for="link in FOOTER_NAV_LINKS" :key="link.id"
              class="text-sub text-['FuturaDemiC'] text-[16px]/[18.72px] font-semibold font-sans hover:text-dark_green transition">
              <RouterLink :to="link.path">{{ link.label }}</RouterLink>
            </li>
          </ul>
          <div class="flex gap-[20.5px]">
            <div @click="handlePrevSlide" class="cursor-pointer hover:scale-150 transition flex items-center">
              <IconArrowLeft />
            </div>
            <div class="flex gap-[13px] items-center">
              <div class="text-dark">01</div>
              <div class="w-[200px] h-[1px] bg-dark_green bg-opacity-38 relative">
                <div class="bg-dark_green h-[1px] transition absolute top-0 z-10"
                  :style="{ width: `${Math.floor(100 / data.length * (initIndex + 1))}%`, transition: 'width' }" />
              </div>
              <div class="text-dark">0{{ data.length }}</div>
            </div>
            <div @click="handleNextSlide"
              class="cursor-pointer hover:scale-150 rounded-full transition flex items-center">
              <IconArrowRight />
            </div>
          </div>
        </footer>
      </div>
    </div>
    <Transition>
      <div v-if="showMenu" class="fixed top-0 left-0 right-0 bottom-0 bg-white z-20" :style="{
        backgroundImage: `url('./menu-bg.png')`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }">
        <div class="flex flex-col h-full w-full max-w-[1190px] m-auto">
          <div class="flex items-center justify-between">
            <div class="flex gap-10 items-center py-10">
              <RouterLink to="/">
                <h3 class="text-[24px]/[32px] text-main font-bold">AR.CHI</h3>
              </RouterLink>
              <AppDivider class="text-black opacity-20" />
              <div class="flex gap-5 items-center">
                <div v-for="language in LANGUAGES" :key="language.id"
                  class="text-sub cursor-pointer transition-all text-[16px]/[18.7px]"
                  @click="handleChangeActiveLang(language.label)"
                  :class="activeLang === language.label && `bg-text_bg font-['FuturaDemiC'] font-semibold cursor-pointer px-[3px] py-[6px] bg-opacity-10 rounded-[5px]`">
                  {{ language.label }}
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2 py-10 cursor-pointer hover:text-dark_green hover:scale-125 transition"
              @click="showMenu = false">
              <div>Close</div>
              <IconClose />
            </div>
          </div>

          <div class="flex-grow text-center flex items-center justify-center">
            <div class="w-[271px] h-[475px] relative">
              <nav>
                <ul class="flex flex-col gap-10">
                  <li @mouseenter="handleChangeHoveredLink(link)" @mouseleave="handleChangeHoveredLink(null)"
                    v-for="(link, index) in MENU_LINKS" :key="link.id"
                    class="text-[48px]/[63.98px] text-light transition"
                    :class="{ '!text-light opacity-40': hoverImage && hoverImage.id !== link.id, '!text-dark_green': hoverImage && hoverImage.id === link.id }">
                    <RouterLink :to="link.path">{{ link.label }}</RouterLink>
                    <Transition>
                      <div v-if="hoverImage && link.image === hoverImage.image"
                        class="absolute z-30 top-[50%] translate-y-[-50%] w-[217px] h-[316px]"
                        :class="index % 2 !== 0 ? 'left-[-250px]' : 'right-[-250px]'" :style="{
                          backgroundImage: `url(${link.image})`,
                          backgroundSize: '100% 100%',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          borderImageWidth: '0px'
                        }" />
                    </Transition>
                  </li>
                </ul>
              </nav>
            </div>

          </div>

          <div class="py-[60px] flex justify-center">
            <ul class="flex gap-[35px]">
              <li v-for="link in FOOTER_NAV_LINKS" :key="link.id"
                class="text-sub text-['FuturaDemiC'] text-[16px]/[18.72px] font-semibold font-sans hover:text-dark_green transition">
                <RouterLink :to="link.path">{{ link.label }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </Transition>
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

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>