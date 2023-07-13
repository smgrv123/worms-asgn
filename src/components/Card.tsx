import { CopyIcon, AttachmentIcon } from '@chakra-ui/icons';
import {
  Flex,
  Button,
  Divider,
  Progress,
  Switch,
  Box,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

type CardProps = {
  cardName: string;
  qualifyingColor: string;
  bgCard:string;
  textColor:string
};

const Card: FC<CardProps> = ({ cardName, qualifyingColor, bgCard, textColor }) => {
  return (
    <Flex
      backgroundColor={bgCard}
      width={'390px'}
      height={'280px'}
      flexDir={'column'}
      margin={'4'}
      padding={'4'}
      borderRadius={'lg'}
    >
      <Flex flex={1} flexDir={'row'} justifyContent={'space-between'}>
        <Box>
          <Text color={textColor} fontSize={'xl'} fontWeight={'bold'}>
            {cardName}
          </Text>
          <Text color={textColor} fontWeight={'thin'} fontSize={'medium'}>
            Pranathi, 10 Nov'22
          </Text>
        </Box>
        <Button
          backgroundColor={'transparent'}
          color={textColor}
          border="2px"
          borderColor={'pink.700'}
        >
          View
        </Button>
      </Flex>
      <Flex flexDir={'row'} flex={1} justifyContent={'center'}>
        <Flex flex={1} flexDir={'column'}>
          <Flex justifyContent={'space-between'}>
            <Text color={textColor} fontWeight={'semibold'}>
              Invited
            </Text>
            <Text color={textColor}>120</Text>
          </Flex>
          <Flex justifyContent={'space-between'}>
            <Text color={textColor} fontWeight={'semibold'}>
              Evaluated
            </Text>
            <Text color={textColor}>100</Text>
          </Flex>
        </Flex>
        <Flex
          flex={1}
          flexDir={'row'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Divider
            bg={'purple.800'}
            orientation="vertical"
            width={'2px'}
            border={'0'}
          />
        </Flex>
        <Flex flex={1} flexDir={'column'}>
          <Flex justifyContent={'space-between'}>
            <Text color={textColor} fontWeight={'semibold'}>
              Dropped Off
            </Text>
            <Text color={textColor}>03</Text>
          </Flex>
          <Flex justifyContent={'space-between'}>
            <Text color={textColor} fontWeight={'semibold'}>
              Qualified
            </Text>
            <Text color={textColor}>98</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flex={1} flexDir={'column'}>
        <Text color={qualifyingColor}>Qualifying</Text>
        <Flex
          flexDir={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Progress
            value={70}
            width={'100%'}
            colorScheme={qualifyingColor}
            borderRadius={'lg'}
            size="sm"
          />
          <Text color={textColor} paddingLeft={'2'}>
            70%
          </Text>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Flex flexDir={'row'}>
            <Flex flexDir={'column'} alignItems={'center'} margin={'2'}>
              <CopyIcon color={textColor} height={'6'} width={'6'} />
              <Text color={textColor} fontSize={'sm'}>
                Duplicate
              </Text>
            </Flex>
            <Flex flexDir={'column'} alignItems={'center'} margin={'2'}>
              <AttachmentIcon color={textColor} height={'6'} width={'6'} />
              <Text color={textColor} fontSize={'sm'}>
                Copy Link
              </Text>
            </Flex>
          </Flex>
          <Switch />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
