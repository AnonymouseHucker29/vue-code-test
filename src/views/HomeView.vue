<script setup lang="ts">
import { Input } from '@/components/ui/input'
import UserTable from '@/components/UserTable.vue'
import fetchUsers from '@/api/fetchUsers'
import { ref, computed } from 'vue'
import type { User } from '@/types/User'

const users = ref<User[]>([])
const searchValue = ref<string>('')

const fetchUsersAPI = async () => {
  try {
    const response = await fetchUsers()
    users.value = response
  } catch (error) {
    console.log(error)
  }
}

const filteredUsers = computed(() => {
  return users.value.filter((user) =>
    user.name.toLowerCase().includes(searchValue.value.toLowerCase())
  )
})

fetchUsersAPI()
</script>
<template>
  <Suspense>
    <main class="flex flex-col justify-start items-center gap-y-10 h-screen">
      <Input
        type="search"
        v-model="searchValue"
        class="w-[38rem]"
        placeholder="Search by a user's name"
      />
      <UserTable :filteredUsers="filteredUsers" />
    </main>
  </Suspense>
</template>
