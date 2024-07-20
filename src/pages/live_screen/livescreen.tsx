import AgoraRTC from "agora-rtc-sdk-ng";
import { useEffect, useState, useRef } from "react";
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import '../../styles/livescreen.css';
import { keyframes } from '@mui/system';

interface Message {
  id: number;
  username: string;
  message: string;
}
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const LiveScreen = () => {
  const [token, setToken] = useState('');
  const [messagesToDisplay, setMessagesToDisplay] = useState<Message[]>([]);
  const messageIndexRef = useRef(1);  
  const messages: Message[] = [
    { id: 1, username: 'gn', message: 'nice' },
    { id: 2, username: 'latha', message: 'babrey' },
    { id: 3, username: 'lalli', message: 'Wow superbbbbbbb' },
    { id: 4, username: 'gnanesh', message: 'superrrrrr' },
    { id: 5, username: 'lathaa', message: 'babreyy' },
  ];

  useEffect(() => {
   
    setMessagesToDisplay([messages[0]]);
    
    const tokenLength = Math.floor(Math.random() * (2047 - 1)) + 1;
    setToken(generateToken(tokenLength));

    const interval = setInterval(() => {
      if (messageIndexRef.current < messages.length) {
        setMessagesToDisplay((prevMessages) => [
          ...prevMessages,
          messages[messageIndexRef.current]
        ]);
        messageIndexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  interface RTCParams {
    uid?: string | number;
  }
  



function genetateUID()
{
  return Math.floor(Math.random() * 100)
}
function randomString(length:number, chars:string) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

const   joinChannel=async (role:string)=> {
  // Create a client
  var option = {
    appID: "a5ba118939794f0183a015e60c03d657",
    channel: "Testing",
    uid: 0,
    
    token: "007eJxTYBCUkJCragktFej/5lvxTPDI7LPzLEQ2zq87823Dlcw8yaMKDImmSYmGhhaWxpbmliZpBoYWxokGhqapZgbJBsYpZqbmISL5aQ2BjAzL781gYIRCEJ+dISS1uCQzL52BAQBH4x9707eJxTYJjnlLjHUPJSZ4Zd7/wFm5JXW3sKaMsHGzF6f/JXmJutza7AkGialGhoaGFpbGluaZJmYGhhnGhgaJpqZpBsYJxiZmqeLBiT1hDIyBDBcZ2FkQECQXx2hpDU4pLMvHQGBgBToRtZ",
    key: '',
    secret: '',
    certificate:'1390ebdbe1da47ee90ca398ce756594e'

  interface RTC {
    client: any;
    joined: boolean;
    published: boolean;
    localStream: any;
    remoteStreams: any[];
    params: RTCParams;

  }

  let rtc: RTC = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remoteStreams: [],
    params: {}
  };

  function generateToken(length: number) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }
    return token;
  }

  const joinChannel = async (role: string) => {
    const option = {
      appID: "a5ba118939794f0183a015e60c03d657",
      channel: "Testing",
      uid: 0,
      token: "007eJxTYJjnlLjHUPJSZ4Zd7/wFm5JXW3sKaMsHGzF6f/JXmJutza7AkGialGhoaGFpbGluaZJmYGhhnGhgaJpqZpBsYJxiZmqeLBiT1hDIyBDBcZ2FkQECQXx2hpDU4pLMvHQGBgBToRtZ",
      key: '',
      secret: '',
      certificate: '1390ebdbe1da47ee90ca398ce756594e'
    };

    var client = AgoraRTC.createClient({ mode: "live", codec: "h264" });

    client.join(option.appID, option.channel, option.token, 0).then(async (resp) => {
      rtc.params.uid = resp;
      console.log("join channel: " + option.channel + " success, uid: " + resp);
      if (role === "host") {
        client.setClientRole("host");
        const [microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
        cameraTrack.play('local-stream');
      }
    });
  };

  return (
    <div className={"main"} style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
      <div className={"div_image"} style={{ width: '100vw', height: '100vh', position: 'absolute', overflow: 'hidden' }}>
        <div id='local-stream' style={{ width: '100vw', height: '100vh' }}></div>
        <div className={"header_bar"} style={{ width: '98vw', height: '10vh', top: '10px', display: 'flex', flexDirection: 'row', marginRight: '10px', marginLeft: '10px', position: 'absolute' }}>
          <div className={"headerLeft"} style={{ height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
            <div style={{ width: '40%', backgroundColor: 'rgba(115, 117, 120 ,0.5)', height: 50, marginLeft: 10, borderRadius: '50px', display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '100vw', height: '100%' }}>
                <img
                  src="https://qph.cf2.quoracdn.net/main-qimg-a5987f10b2bc80a793df78805498c3a4"
                  alt="User avatar"
                  style={{ width: '50px', height: '50px', borderRadius: '30px', justifyContent: 'flex-start', display: 'flex', left: '10px', position: 'absolute' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', left: 60, justifyContent: 'center', alignItems: 'flex-start' }}>
                <div style={{ width: '10vw' }}>
                  <h6> Obito Uchiha</h6>
                </div>
                <div>
                  <h6> Gn@009</h6>
                </div>
              </div>
              <div className={"subsButton"}>
                <button style={{ width: '25%', height: '70%', borderRadius: '45px', border: '0px', backgroundColor: '#6597CC', color: '#fff' }}>Subscribe</button>
              </div>
            </div>
            <div className={"div_SubsCountMain"}>
              <button onClick={() => joinChannel('host')}>Join Channel as Host</button>
            </div>
            <div style={{ width: '3%', height: '30%', marginLeft: 10, borderRadius: '100px', marginTop: 10, backgroundColor: '#EFE9DF', position: 'relative', left: '420px' }}>
              <h4 style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', height: '100%', display: 'flex', color: '#fff' }}>X</h4>
            </div>
          </div>
        </div>

        <div className={"header_barbottom"}>
          <div className={"headerLeft"}>
            <div className={"div_SubsCountMain"}>
              <h5 className={"div_h5"}>54585</h5>
            </div>
            <div style={{ width: '3%', height: '30%', marginLeft: 10, borderRadius: '100px', marginTop: 10, backgroundColor: '#EFE9DF', position: 'relative', left: '420px' }}>
              <h4 style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', height: '100%', display: 'flex', color: '#fff' }}>X</h4>
            </div>
          </div>
        </div>
      </div>

      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          bgcolor: 'rgba(240, 240, 240, 0.919)',
          color: 'black',
          p: 2,
          borderRadius: 1,
          width: '400px',
          height: '400px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        {messagesToDisplay.filter(msg => msg !== undefined).map((msg, index) => (
          <Box
            key={msg.id}
            sx={{
              bgcolor: '#6597CC',
              color: 'white',
              p: 1,
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              width: 'fit-content',
              position: 'relative',
              marginBottom: '10px',
              animation: index > 0 ? `${fadeIn} 0.5s ease-in-out` : 'none',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '-10px',
                borderWidth: '10px',
                borderStyle: 'solid',
                borderColor: 'transparent #6597CC transparent transparent',
                transform: 'translateY(-50%)'
              }
            }}
          >
            <Typography sx={{ fontWeight: 'bold' }}>
              {msg.username}
            </Typography>
            <Typography>
              {msg.message}
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default LiveScreen;
