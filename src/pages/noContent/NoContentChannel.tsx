import React from 'react';
import { styled } from '@mui/system';
import { Box, Card, CardContent, Typography, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import UploadIcon from '@mui/icons-material/CloudUpload';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Avatar from '@mui/joy/Avatar';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

const BackgroundContainer = styled(Box)({
  height: '100vh',
  backgroundImage: 'url(/bgimage_nocontent.png)', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  position: 'relative',
});

const StyledCard = styled(Card)({
  width: '100vw',
  borderRadius: '50px 50px 0 0',
  backgroundColor: 'white',
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  paddingTop: '85px', 
  boxSizing: 'border-box', 
});

const StyledBottomNavigation = styled(BottomNavigation)({
  boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.1)', 
  borderRadius: '30px 30px 30px 30px',
  margin: 40,
});

const LargeAvatar = styled(Avatar)({
  width: '180px',
  height: '180px',
  position: 'absolute',
  top: 'calc(100vh - 79vh - 79px)', 
  left: 'calc(10% - 0px)', 
  border: '4px solid #26E3BB', 
  zIndex: 2, 
});

const Username = styled(Typography)({
  position: 'absolute',
  top: 'calc(100vh - 79vh + 110px)', 
  left: 'calc(12% - 0px)',
  zIndex: 2, 
  color: '#000', 
  fontWeight: 'bold',
});

const TabListStyled = styled(TabList)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

const TabsRightIcons = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  paddingRight: '20px', 
});

const CenterImage = styled('img')({
  display: 'block',
  margin: '20px auto',
  maxWidth: '100%',
  maxHeight: '300px', 
});

const NoContentChannel: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BackgroundContainer>
      <LargeAvatar alt="Gnanesh" src="/profile-picture.png" /> 
      <Username>@Gnanesh_009</Username>
      <StyledCard>
        <CardContent>
          <Box sx={{ display: 'flex', gap: 2 }}>
            
          </Box>
          <Tabs aria-label="Tabs with icons" value={value} sx={{ marginTop: 10 }}>
            <TabListStyled>
              <Box sx={{ display: 'flex', gap: 9 }}>
                <Tab sx={{ fontWeight: value === 0 ? 'bold' : 'normal', color: value === 0 ? 'black' : 'gray', marginLeft: 10 }}>Videos</Tab>
                <Tab sx={{ fontWeight: value === 1 ? 'bold' : 'normal', color: value === 1 ? 'black' : 'gray' }}>Shorts</Tab>
                <Tab sx={{ fontWeight: value === 2 ? 'bold' : 'normal', color: value === 2 ? 'black' : 'gray' }}>Live</Tab>
                <Tab sx={{ fontWeight: value === 3 ? 'bold' : 'normal', color: value === 3 ? 'black' : 'gray' }}>Community</Tab>
                <Tab sx={{ fontWeight: value === 4 ? 'bold' : 'normal', color: value === 4 ? 'black' : 'gray' }}>Series</Tab>
                <SearchIcon sx={{ color: 'gray' }} />
              </Box>
              <TabsRightIcons sx={{ marginRight: 20 }}>
                <HomeIcon sx={{ color: 'gray', marginRight: 6 }} />
                <PersonIcon sx={{ color: 'gray', marginRight: 6 }} />
                <NotificationsIcon sx={{ color: 'gray', marginRight: 6 }} />
              </TabsRightIcons>
            </TabListStyled>
          </Tabs>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <UploadIcon sx={{ color: 'gray', marginRight: 1,marginLeft:10  }} />
              <Typography sx={{ color: 'gray', fontWeight: 'bold'}}>Your uploads</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: 'gray', fontWeight: 'bold', marginRight: 1 }}>150 videos</Typography>
              <VideoLibraryIcon sx={{ color: 'gray',marginRight:10  }} />
            </Box>
          </Box>
          <CenterImage src="/bookicon.png" alt="Centered" sx={{ width: 100, height: 100, marginTop: 17 }} />
        </CardContent>
        <StyledBottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
          <BottomNavigationAction label="Notifications" icon={<NotificationsIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </StyledBottomNavigation>
      </StyledCard>
    </BackgroundContainer>
  );
}

export default NoContentChannel;
