<script setup>
import { DataTable, DataTableCell, DataTableCellHeader, DataTableRow } from '@/components'
import { AdminWrapper } from '@/modules/admin'

const users = [
    { id: 1, name: 'Amos', email: 'amos@example.com', role: 'Admin' },
    { id: 2, name: 'Lucie', email: 'lucie@example.com', role: 'User' },
    { id: 3, name: 'Julien', email: 'julien@example.com', role: 'Editor' },
    { id: 4, name: 'Mélanie', email: 'melanie@example.com', role: 'User' },
    { id: 5, name: 'Karim', email: 'karim@example.com', role: 'Admin' },
    { id: 6, name: 'Sophie', email: 'sophie@example.com', role: 'User' },
    { id: 7, name: 'Lucas', email: 'lucas@example.com', role: 'Editor' },
    { id: 8, name: 'Chloé', email: 'chloe@example.com', role: 'User' },
    { id: 9, name: 'Paul', email: 'paul@example.com', role: 'Admin' },
    { id: 10, name: 'Emma', email: 'emma@example.com', role: 'User' },
    { id: 11, name: 'Victor', email: 'victor@example.com', role: 'Editor' },
    { id: 12, name: 'Laura', email: 'laura@example.com', role: 'User' },
    { id: 13, name: 'Nicolas', email: 'nicolas@example.com', role: 'Admin' },
    { id: 14, name: 'Claire', email: 'claire@example.com', role: 'User' },
    { id: 15, name: 'Hugo', email: 'hugo@example.com', role: 'Editor' },
    { id: 16, name: 'Julie', email: 'julie@example.com', role: 'User' },
    { id: 17, name: 'Alex', email: 'alex@example.com', role: 'Admin' },
    { id: 18, name: 'Marie', email: 'marie@example.com', role: 'User' },
    { id: 19, name: 'Thomas', email: 'thomas@example.com', role: 'Editor' },
    { id: 20, name: 'Anaïs', email: 'anais@example.com', role: 'User' },
]
</script>

<template>
    <AdminWrapper>
        <DataTable :rows="users">
            <template #thead>
                <DataTableRow :is-header="true">
                    <DataTableCellHeader label="#" sortable columnKey="id" />
                    <DataTableCellHeader label="Nom" sortable columnKey="name" />

                    <DataTableCellHeader label="Email" sortable columnKey="email" />
                    <DataTableCellHeader label="Rôle" columnKey="role" />
                    <DataTableCellHeader label="Action" />
                </DataTableRow>
            </template>

            <template #tbody="{ rows }">
                <DataTableRow v-for="(u, index) in rows" :key="index">
                    <DataTableCell>{{ u.id }}</DataTableCell>
                    <DataTableCell>{{ u.name }}</DataTableCell>
                    <DataTableCell>{{ u.email }}</DataTableCell>
                    <DataTableCell>{{ u.role }}</DataTableCell>
                    <DataTableCell> </DataTableCell>
                </DataTableRow>
            </template>
        </DataTable>
    </AdminWrapper>
</template>

<style scoped></style>
