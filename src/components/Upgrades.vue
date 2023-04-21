<script setup lang="ts">
import { useUpgradeStore } from '../stores/UpgradeStore'

const upgradeStore = useUpgradeStore();


</script>

<template>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Effect</th>
                <th>Base Cost</th>
                <th>Cost Multiplier</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="upgrade in upgradeStore.availableUpgrades" :key="upgrade.name">
                <td>{{ upgrade.name }}</td>
                <td>{{ upgrade.description }}</td>
                <td>{{ upgrade.effect }}</td>
                <td>{{ upgradeStore.totalCost(upgrade) }}</td>
                <td>{{ upgrade.costMultiplier }}</td>
                <td>
                    <button type="button" @click="upgradeStore.buyUpgrade(upgrade)">Buy</button>
                </td>
            </tr>
        </tbody>
    </table>

</template>