import {
  Flex,
  Image,
} from '@chakra-ui/react';

function LeftNavBar({ images }: { images: { image: string; }[]}) {
  return (
    <Flex
      flex={1}
      backgroundColor={'#15182B'}
      flexDir={'column'}
      alignItems={'center'}
      marginBottom={'10%'}
    >
      {images.map(({ image }) => (
        <>
          <div style={{ height: '32px' }} />
          <Image src={image} height={'42px'} width={'42px'} />
        </>
      ))}
    </Flex>
  );
}

export default LeftNavBar;
