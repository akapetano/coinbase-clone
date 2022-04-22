import { useState, useEffect } from 'react';
import { Divider, Box } from '@chakra-ui/react';
import { client } from '../../../../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';
import {
  Wrapper,
  Content,
  QRContainer,
  Row,
  CoinSelectList,
  Title,
  Address,
  CopyButton,
} from '.';
import Image from 'next/image';
import { CoinIcon } from '../../CoinIcon/CoinIcon';
import { CoinName } from '../../CoinName/CoinName';
import { BiCopy } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';

export const Receive = ({ setAction, selectedToken, walletAddress }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url();
    setImageUrl(url);
  }, [selectedToken]);

  const QRImgLoader = () => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${walletAddress}`;
  };

  return (
    <Wrapper>
      <Content>
        <QRContainer>
          <Image
            loader={QRImgLoader}
            width={250}
            height={250}
            src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${walletAddress}`}
            alt="QR code for the receiver wallet address"
            unoptimized
          />
        </QRContainer>
        <Divider borderColor="#282b2f" />
        <Row>
          <CoinSelectList>
            <CoinIcon imageUrl={imageUrl} selectedToken={selectedToken} />
            <CoinName>{selectedToken.name}</CoinName>
          </CoinSelectList>
        </Row>
        <Divider borderColor="#282b2f" />
        <Row>
          <Box>
            <Title>{selectedToken.symbol} Address</Title>
            <Address>{walletAddress}</Address>
          </Box>
          <CopyButton
            onClick={() => {
              navigator.clipboard.writeText(walletAddress);
              setCopied(true);
            }}
          >
            {copied ? <FaCheck color="#27ad75" /> : <BiCopy />}
          </CopyButton>
        </Row>
      </Content>
    </Wrapper>
  );
};
