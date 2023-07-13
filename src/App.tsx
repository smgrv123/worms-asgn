import {
  Flex,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  SearchIcon,
  SmallAddIcon,
} from '@chakra-ui/icons';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';

import Card from './components/card';
import LeftNavBar from './components/LeftNavBar';
import TopNavBar from './components/TopNavBar';

function App() {
  const bg = useColorModeValue('white', '#080a11');
  const textColor = useColorModeValue('black', 'white');
  const bgCard = useColorModeValue('white', '#15182B');
  const images = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
  ];

  const cardData = [
    {
      cardName: 'Code-Hackathon',
      qualifyingColor: 'teal',
      textColor,
      bgCard,
    },
    {
      cardName: 'Design Hackathon',
      qualifyingColor: 'yellow',
      textColor,
      bgCard,
    },
    {
      cardName: 'Managerial Hire',
      qualifyingColor: 'teal',
      textColor,
      bgCard,
    },
    {
      cardName: 'Non Technical',
      qualifyingColor: 'teal',
      textColor,
      bgCard,
    },
    {
      cardName: 'Java',
      qualifyingColor: 'red',
      textColor,
      bgCard,
    },
    {
      cardName: 'Hiring Drive',
      qualifyingColor: 'teal',
      textColor,
      bgCard,
    },
  ];

  return (
    <Flex
      flex={1}
      flexDir={'row'}
      backgroundColor={bg}
      height={'100vh'}
      width={'100vw'}
    >
      <LeftNavBar images={images} />
      <Flex flex={9} flexDir={'column'}>
    <TopNavBar textColor={textColor} />
        <Flex
          flex={1.5}
          flexDir={'column'}
          justifyContent={'space-evenly'}
          padding={'4'}
        >
          <Text fontSize={'2xl'} fontWeight={'bold'} color={textColor}>
            Candidate Assessments
          </Text>
          <Flex
            flexDir={'row'}
            marginTop={'2'}
            justifyContent={'space-between'}
          >
            <InputGroup w={'75%'} bgColor={bgCard}>
              <Input placeholder="Search Assesments" />
              <InputRightElement>
                <SearchIcon w={4} h={4} color={textColor} />
              </InputRightElement>
            </InputGroup>

            <Button
              leftIcon={<SmallAddIcon />}
              backgroundColor={'pink.700'}
              color={'#fff'}
            >
              Create New
            </Button>
          </Flex>
        </Flex>
        <Flex flex={7} flexDir={'row'} flexWrap={'wrap'} padding={'8'}>
          {cardData.map((cardProps) => (
            <Card {...cardProps} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
