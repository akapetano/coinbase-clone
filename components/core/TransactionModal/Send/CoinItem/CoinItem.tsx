import { Box, Flex, ListItem, Text, Icon } from '@chakra-ui/react';
import { CoinIcon } from '../CoinIcon/CoinIcon';
import { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../../../../lib/sanity';
import { FaCheck } from 'react-icons/fa';

export const CoinItem = ({
  token,
  sender,
  selectedToken,
  setSelectedToken,
  sanityTokens,
  thirdwebTokens,
  setAction,
}) => {
  const [balance, setBalance] = useState('Fetching...');
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const getBalance = async () => {
      let activeThirdwebToken;

      thirdwebTokens.map((thirdwebToken) => {
        if (
          thirdwebToken.contractWrapper.readContract.address ===
          token.contractAddress
        ) {
          activeThirdwebToken = thirdwebToken;
        }
      });

      const balance = await activeThirdwebToken.balanceOf(sender);

      return setBalance(balance.displayValue.split('.')[0]);
    };

    const getImgUrl = async () => {
      const imgUrl = imageUrlBuilder(client).image(token.logo).url();
      setImageUrl(imgUrl);
    };

    getBalance();
    getImgUrl();
  }, [sender, thirdwebTokens, token]);

  return (
    <ListItem
      display="flex"
      alignItems="center"
      p="1rem 0.5rem"
      borderRadius="0.5rem"
      mb="0.3rem"
      sx={{ bg: selectedToken.name === token.name && '#141519' }}
      onClick={() => {
        setSelectedToken(token);
        setAction('Send');
      }}
      _hover={{ bg: '#0e0f14', cursor: 'pointer' }}
    >
      <Flex flex="1" alignItems="center" justifyContent="space-between">
        <Flex>
          <CoinIcon imageUrl={imageUrl} selectedToken={selectedToken} />
          <Box fontSize="1.1rem" mb="0.2rem">
            <Text>{token.name}</Text>
            <Text fontSize="0.8rem" color="#888f9b">
              {token.symbol}
            </Text>
          </Box>
        </Flex>
        <Text>
          {balance} {token.symbol}
        </Text>
      </Flex>
      {selectedToken.contractAddress === token.contractAddress ? (
        <Icon as={FaCheck} ml="0.5rem" color="#3773f5" />
      ) : null}
    </ListItem>
  );
};
