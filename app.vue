<template>
  <div class="flex flex-col h-full max-w-[1190px] m-auto">
    <header class="flex justify-between py-10">
        <div class="flex gap-10">
          <div>AR.CHI</div>
        <AppDivider />
        <div class="flex">
            <div>RUS</div>
            <div>ENG</div>
        </div>
        </div>

        <div class="flex gap-10">
          <nav>
          <ul class="flex gap-10">
            <li><a href="">About us</a></li>
            <li><a href="">Architecture</a></li>
            <li><a href="">Interior</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Shop</a></li>
          </ul>
        </nav>
        <div class="flex gap-5">
          <AppDivider />
          <div>search</div>
            <AppDivider />
        </div>
        <div>
          menu
        </div>
        </div>
    </header>
    <main class="flex-grow">
      content
    </main>
    <footer>
      Footer
    </footer>
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
