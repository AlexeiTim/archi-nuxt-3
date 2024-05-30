import type { Slide } from "~/types/slide";

export const getSlides = () => useNuxtApp().$axiosApiClient.get<Slide[]>('api/v1/menu')
 