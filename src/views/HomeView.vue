<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
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
      <Table id="table" class="w-full overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead class="font-bold text-center w-1/4">NAME</TableHead>
            <TableHead class="font-bold text-center w-1/4">EMAIL</TableHead>
            <TableHead class="font-bold text-center w-1/4">CITY</TableHead>
            <TableHead class="font-bold text-center w-1/4">COMPANY</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-for="user in filteredUsers" :key="user.id">
            <TableRow
              class="cursor-pointer"
              @click="$router.push({ name: 'user', params: { id: user.id, username: user.name } })"
            >
              <TableCell class="text-center">{{ user.name }}</TableCell>
              <TableCell class="text-center">{{ user.email }}</TableCell>
              <TableCell class="text-center">{{ user.address.city }}</TableCell>
              <TableCell class="text-center">{{ user.company.name }}</TableCell>
            </TableRow>
          </template>
        </TableBody>
      </Table>
    </main>
  </Suspense>
</template>
<style scoped>
#table::-webkit-scrollbar {
  display: none;
}

#table {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
