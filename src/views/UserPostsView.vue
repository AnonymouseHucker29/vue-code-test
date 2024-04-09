<script setup lang="ts">
import fetchUserPosts from '@/api/fetchUserPosts'
import type { UserPost } from '@/types/UserPost'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const userPosts = ref<UserPost[]>([])
const route = useRoute()

const userId = Number(route.params.id)
const userAuthor = String(route.params.username)

const fetchUserPostAPI = async () => {
  try {
    const response = await fetchUserPosts()
    userPosts.value = response
  } catch (error) {
    console.log(error)
  }
}

fetchUserPostAPI()
</script>
<template>
  <Suspense>
    <main class="flex flex-col justify-start items-center gap-y-24 p-6 h-screen">
      <h1 class="text-2xl font-semibold">{{ userAuthor }}&apos;s post</h1>
      <div class="flex flex-col gap-y-8 text-2xl">
        <h3 class="text-center text-5xl font-bold">{{ userPosts[userId - 1]?.title }}</h3>
        <p class="leading-normal indent-8">{{ userPosts[userId - 1]?.body }}</p>
      </div>
    </main>
  </Suspense>
</template>
