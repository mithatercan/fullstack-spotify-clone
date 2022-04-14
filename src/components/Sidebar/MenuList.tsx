import NextLink from 'next/link';
import {
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
  List,
} from '@chakra-ui/layout';

const MenuList = ({ menu }) => {
  return (
    <List spacing='1'>
      {menu.map((item) => (
        <ListItem
          paddingX='25px'
          paddingY='5px'
          fontSize='16px'
          key={item.name}
          _hover={{
            backgroundColor: 'gray.900',
          }}
        >
          <LinkBox>
            <NextLink href={item.route} passHref>
              <LinkOverlay>
                <ListIcon
                  fontSize='20px'
                  as={item.icon}
                  color='white'
                  marginRight='15px'
                />
                {item.name}
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuList;
