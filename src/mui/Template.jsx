import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LogoutIcon from '@mui/icons-material/Logout';
import MailIcon from '@mui/icons-material/Mail';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';

import DataTable from './DataTable';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="transparent" sx={{backgroundColor: '#dcdcdc'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: 'none' }), }}
          >
            <MenuIcon />
          </IconButton>
          <img src="/img/ck-logo.png" height={32} />
          <Stack spacing={2} direction="row" sx={{ marginLeft: 5, flexGrow: 1 }}>
            <Button variant="text"><ListAltIcon /> 게시판</Button>
            <Button variant="text"><CalendarMonthIcon /> 일정표</Button>
            <Button variant="text"><ManageAccountsIcon />사용자</Button>
            <Button variant="text"><LogoutIcon /> 로그아웃</Button>
            </Stack>
          <Typography noWrap component="div">
            제임스님 환영합니다.
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key="Youtube" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
                sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}
            >
              <ListItemIcon
                  sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}
              >
                <YouTubeIcon />
              </ListItemIcon>
              <ListItemText primary="Youtube" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}
              >
                <ListItemIcon
                  sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}
              >
                <ListItemIcon
                  sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem key="Shopping Mall" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
                sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}
            >
              <ListItemIcon
                  sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}
              >
                <LocalMallIcon />
              </ListItemIcon>
              <ListItemText primary="Shopping Mall" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 4, height: '100vh', width: '100vh' }}>
        <Typography variant="h5" component="h5" sx={{p: 1, fontWeight: 'bold'}}>
          게시판
        </Typography>
        <Divider sx={{mb: 1}} />
        <Card sx={{p: 1, mb: 2}}>
          <Typography paragraph>
            잉글랜드 프로축구 토트넘홋스퍼에서 구단 내 각종 기록을 갈아치우며 
            ‘역사 제조기’로 주목 받는 손흥민이 이번에는 통산 5번째 프리미어리그(EPL) 
            이달의 선수상 수상에 도전장을 냈다.
          </Typography>
          <Typography paragraph>
          손흥민은 지난달 4경기에 출전해 3골 2도움을 기록했다. 
          함께 후보군에 이름을 올린 선수들은 4골 1도움을 기록한 알렉산데르 이사크(뉴캐슬)를 비롯해 
          알렉시스 마크알리스테르(리버풀·1골2도움), 호드리구 무니스(풀럼·4골 1도움), 
          콜 팔머(첼시·3골 2도움), 앙투안 세메뇨(본머스·3골), 벤 화이트(아스널·1골 2도움) 등이다.
          </Typography>
        </Card>
        <Card sx={{p: 1}}>
          <DataTable />
        </Card>
      </Box>
    </Box>
  );
}