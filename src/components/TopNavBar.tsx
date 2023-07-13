import { MoonIcon, SunIcon, BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
    Flex,
    Text,
    Button,
    ButtonGroup,
    Box,
    useColorMode,
  } from '@chakra-ui/react';

function TopNavBar({textColor}:{textColor:string}) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
    justifyContent={'flex-end'}
    flex={1.5}
    padding={'4'}
    alignItems={'center'}
  >
    <ButtonGroup backgroundColor={'#191d33'} borderRadius={'3xl'}>
      <Button
        bgColor={colorMode === 'dark' ? 'pink.600' : 'transparent'}
        height={'8'}
        width={'1'}
        borderRadius={'3xl'}
        onClick={toggleColorMode}
        _hover={{ bg: 'pink.600' }}
      >
        <MoonIcon color={colorMode === 'dark' ? 'white' : 'gray'} />
      </Button>
      <Button
        bgColor={colorMode !== 'dark' ? 'pink.600' : 'transparent'}
        height={'8'}
        width={'1'}
        borderRadius={'3xl'}
        onClick={toggleColorMode}
        _hover={{ bg: 'pink.600' }}
      >
        <SunIcon color={colorMode !== 'dark' ? 'white' : 'gray'} />
      </Button>
    </ButtonGroup>
    <Box paddingX={'4'}>
      <BellIcon color={textColor} height={'8'} width={'8'} />
    </Box>
    <Text fontWeight={'medium'} color={textColor}>
      Jessica James
    </Text>
    <Box
      h={'8'}
      w={'8'}
      borderRadius={'3xl'}
      bgColor={'pink'}
      marginX={'4'}
    />
    <ChevronDownIcon color="#fff" height={'4'} width={'4'} />
  </Flex>
  )
}

export default TopNavBar