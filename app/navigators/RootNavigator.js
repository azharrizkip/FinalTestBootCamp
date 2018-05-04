import { StackNavigator } from 'react-navigation';

import ProfileList from '../Contacts/screens/ProfileList';
import Profile from '../Contacts/screens/Profile';
import AddProfile from '../Contacts/screens/AddProfile';

const RootNavigator = StackNavigator({
  ProfileList:{
    screen: ProfileList,
    navigationOptions:{
      title: 'Profile List'
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions:{
      header: null
    }
  },
  AddProfile:{
    screen: AddProfile,
    navigationOptions:{
      header: null
    }
  }
})

export default RootNavigator;