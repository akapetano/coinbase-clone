import { OfferCard } from '../OfferCard/OfferCard';
import { PromosWrapper } from '../PromosWrapper/PromosWrapper';

export const Promos = () => {
  return (
    <PromosWrapper>
      <OfferCard
        title="Yield earned"
        description="Earn up to 2.84% APY on your crypto"
        additionalTextPrimary={'$0.000066'}
        additionalTextSecondary={'2.84% APY'}
      />
      <OfferCard
        title="Learn and Earn"
        description="Earn up to 2.84% APY on your crypto"
        additionalTextPrimary={'Verify Identity'}
        additionalTextColor={'#3773f5'}
      />
    </PromosWrapper>
  );
};
