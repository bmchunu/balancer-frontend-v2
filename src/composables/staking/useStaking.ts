import { inject } from 'vue';

import { StakingProviderSymbol } from '@/providers/local/staking/staking.provider';
import { isGnosis } from '../useNetwork';

export const isStakingSupported = computed((): boolean => !isGnosis.value);

export default function useStaking() {
  const providedData = inject(StakingProviderSymbol);
  if (!providedData) {
    throw new Error(
      `useStaking was called from a component that was not a child of <StakingProvider />`
    );
  }
  return providedData;
}
