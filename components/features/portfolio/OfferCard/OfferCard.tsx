import { Flex, FlexProps, Heading, Box, Text } from '@chakra-ui/react';

interface IOfferCard extends FlexProps {
  title: string;
  description: string;
  additionalTextPrimary: string;
  additionalTextSecondary?: string;
  additionalTextColor?: string;
}

export const OfferCard = ({
  title,
  description,
  additionalTextPrimary,
  additionalTextSecondary,
  additionalTextColor,
  ...restProps
}: IOfferCard) => {
  return (
    <Flex
      flexDir="column"
      w="21rem"
      h="11rem"
      border="1px solid #282b2f"
      mb="1rem"
      p="1.5rem"
      {...restProps}
    >
      <Heading as="h3" fontSize="1.5rem" fontWeight="700" mb="0.1rem">
        {title}
      </Heading>
      <Text fontSize="1.1rem">{description}</Text>
      <Box flex="1"></Box>
      <Flex
        fontSize="1.1rem"
        fontWeight="700"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text color={additionalTextColor}>{additionalTextPrimary}</Text>
        <Text color="#8a919e" fontSize="1rem">
          {additionalTextSecondary}
        </Text>
      </Flex>
    </Flex>
  );
};
