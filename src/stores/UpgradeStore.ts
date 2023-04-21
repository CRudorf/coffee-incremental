import { defineStore } from 'pinia'

interface CoffeeShopUpgrade  {
    name: string;
    description: string;
    effect: number;
    currentCost: number;
    costMultiplier: number;
    purchased: boolean;
}

interface PurchasedUpgrade extends CoffeeShopUpgrade {
    amount: number;
}

interface UpgradesState {
    purchasedUpgrades: PurchasedUpgrade[];
    availableUpgrades: CoffeeShopUpgrade[];
  }

export const useUpgradeStore = defineStore('upgrade', {
    state: () => ({
        purchasedUpgrades: [],
        availableUpgrades: [
            {
              name: 'Coffee Grinder',
              description: 'Increases the rate of coffee production',
              effect: 0.01, // increase in coffee production per upgrade
              currentCost: 10, // cost of the first upgrade
              costMultiplier: 1.1, // multiplier for cost of each subsequent upgrade
              purchased: false
            },
            {
              name: 'Coffee Bean Storage',
              description: 'Increases the maximum amount of coffee beans that can be stored',
              effect: 100, // increase in storage capacity per upgrade
              currentCost: 100, // cost of the first upgrade
              costMultiplier: 1.2, // multiplier for cost of each subsequent upgrade
              purchased: false
            },
            {
              name: 'Barista Training',
              description: 'Increases the efficiency of each barista',
              effect: 0.1, // increase in coffee production per barista per upgrade
              currentCost: 50, // cost of the first upgrade
              costMultiplier: 1.15, // multiplier for cost of each subsequent upgrade
              purchased: false
            },
            {
              name: 'Espresso Machine',
              description: 'Unlocks the ability to produce espresso',
              effect: 2, // increase in price per cup of espresso per upgrade
              currentCost: 500, // cost of the first upgrade
              costMultiplier: 1.2, // multiplier for cost of each subsequent upgrade
              purchased: false
            },
            {
              name: 'Coffee Roaster',
              description: 'Increases the quality of the coffee beans',
              effect: 0.1, // increase in price per cup of coffee per upgrade
              currentCost: 200, // cost of the first upgrade
              costMultiplier: 1.2 , // multiplier for cost of each subsequent upgrade
              purchased: false
            },
            {
              name: 'Coffee Shop Expansion',
              description: 'Increases the size of the coffee shop',
              effect: 10, // increase in customer capacity per upgrade
              currentCost: 1000, // cost of the first upgrade
              costMultiplier: 1.5 , // multiplier for cost of each subsequent upgrade
              purchased: false
            },
            {
              name: 'Coffee Delivery Service',
              description: 'Unlocks the ability to deliver coffee to customers',
              effect: 50, // increase in maximum delivery capacity per upgrade
              currentCost: 5000, // cost of the first upgrade
              costMultiplier: 1.8 , // multiplier for cost of each subsequent upgrade
              purchased: false
            }
        ],
        coffee: 0
    }),
    getters: {
        // Get the total cost of a purchased upgrade
        totalCost: (state: UpgradesState) => (upgrade: CoffeeShopUpgrade) => {
            const purchasedUpgrade = state.purchasedUpgrades.find((u) => u.name === upgrade.name) as PurchasedUpgrade;
            if (!purchasedUpgrade) {
            return upgrade.currentCost;
            } else {
            return Math.round(upgrade.currentCost * Math.pow(upgrade.costMultiplier, purchasedUpgrade.amount));
            }
        }
    },
    actions: {
        // Buy an upgrade
        buyUpgrade(upgrade: CoffeeShopUpgrade) {
            const upgradeCost = this.totalCost(upgrade);
            if (this.coffee >= upgradeCost) {
                // Deduct the cost from the player's coffee
                this.coffee -= upgradeCost;
                // Add the upgrade to the purchasedUpgrades array
                const purchasedUpgrade: PurchasedUpgrade = {
                    name: upgrade.name,
                    amount: 1,
                    description: upgrade.description,
                    effect: upgrade.effect,
                    currentCost: upgrade.currentCost,
                    costMultiplier: upgrade.costMultiplier,
                    purchased: upgrade.purchased
                };
                this.purchasedUpgrades.push(purchasedUpgrade);
                // Set the purchased flag on the upgrade object to true
                upgrade.purchased = true;
                console.log("Bought " + upgrade.name + " for " + upgradeCost + " coffee");
                upgrade.currentCost = upgradeCost;
            }
        }
    }
})