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
    <List spacing='3'>
      {menu.map((item) => (
        <ListItem paddingX='25px' fontSize='16px' key={item.name}>
          <LinkBox>
            <NextLink href={item.route} passHref>
              <LinkOverlay display='flex' alignItems='center'>
                <ListIcon
                  fontSize='25px'
                  as={item.icon}
                  color='white'
                  size='24px'
                  marginRight='20px'
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
