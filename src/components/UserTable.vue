<script setup lang="ts">
defineProps<{ filteredUsers: any }>()
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
</script>
<template>
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
