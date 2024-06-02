
import AgoraRTC from "agora-rtc-sdk-ng";
// import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
// import { RtcTokenBuilder } from "agora-token";
import { useEffect,useState } from "react";
import '../../styles/livescreen.css'
// import { IAgoraRTCClient, useRTCClient } from "agora-rtc-react";
const LiveScreen=()=> {

  const [token,setToken]=useState('');
  // let clientRTC: IAgoraRTCClient=  useRTCClient();
  useEffect(()=>{
   
    const tokenLength = Math.floor(Math.random() * (2047 - 1)) + 1; // Random length between 1 and 2047
//  setToken(generateToken(tokenLength));
  },[])

  // const appId = 'a5ba118939794f0183a015e60c03d657';
  interface RTCParams {
    uid?: string | number;
  }
    
//   var rtc = {
//     client: null,
//     joined: false,
//     published: false,
//     localStream: null,
//     remoteStreams: [],
//     params: {}
// };

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
}




function generateToken(length:number) {
  // Define a string containing all ASCII characters
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  // Initialize an empty token string
  let token = '';

  // Loop through the specified length and randomly select characters from the character string
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters[randomIndex];
  }
  // RtcTokenBuilder.buildTokenWithUserAccount(appId:'',channelName:'Testing')

  return token;
}

// function generateToken(channelName) {
//   // Replace 'YOUR_APP_ID', 'YOUR_APP_CERTIFICATE', and 'YOUR_UID' with your actual values
//   const APP_ID = 'YOUR_APP_ID';
//   const APP_CERTIFICATE = 'YOUR_APP_CERTIFICATE';
//   const UID = 'YOUR_UID';

//   // Generate a token
//   const expirationTimeInSeconds = 3600;
//   const currentTimestamp = Math.floor(Date.now() / 1000);
//   const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
//   const token = AgoraRTC.generateToken(APP_ID, APP_CERTIFICATE, channelName, UID, AgoraRTC.Role.PUBLISHER, privilegeExpiredTs);
  
//   return token;
// }



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
    
    token: "007eJxTYJjnlLjHUPJSZ4Zd7/wFm5JXW3sKaMsHGzF6f/JXmJutza7AkGialGhoaGFpbGluaZJmYGhhnGhgaJpqZpBsYJxiZmqeLBiT1hDIyBDBcZ2FkQECQXx2hpDU4pLMvHQGBgBToRtZ",
    key: '',
    secret: '',
    certificate:'1390ebdbe1da47ee90ca398ce756594e'
  }
//   var rtc = {
//     client: null,
//     joined: false,
//     published: false,
//     localStream: null,
//     remoteStreams: [],
//     params: {}
// };
  
  // clientRTC.join(option.appID,option.channel,option.token).then(resp=>  console.log("channeljoined",resp))

 var client = AgoraRTC.createClient({ mode: "live", codec: "h264"});
 var localStream;
  // Initialize the client
 
  // rtc.client.join(option.appID, function () {
  
      console.log("init success",client);
    

      // Join a channel
    client.join(option.appID,
          option.channel,option.token  ,  0).then(async (resp)=>{
            rtc.params.uid= resp;
            console.log("join channel: " + option.channel + " success, uid: " + resp);
            if (role === "host") {
              client.setClientRole("host");
              // Create a local stream
              const [microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
            //  client.createMicrophoneAndCameraTracks()
            cameraTrack.play('local-stream');
             
            //  AgoraRTC.createStream({
            //       streamID: rtc.params.uid,
            //       audio: true,
            //       video: true,
            //       screen: false,
            //   })
            }
          })
        

  // }, (err) => {
  //     console.error(err);
  // });
}
 
  // useEffect(()=>{
  //   // AgoraRTC.init(appId);
  //   const agrtcClient=AgoraRTC.createClient({mode:'live',codec:'h264',role:'host'})
  //   console.log(agrtcClient);
  
  // })
  // client.join()
  
  return (
    <div className={"main"} style={{ display: 'flex',minHeight: '100vh',
      /* position: absolute; */
      overflow: 'hidden'}}>
      {/* <img className={styles.image} src="https://s3-alpha-sig.figma.com/img/5b64/f65b/9cbe96edee4d88b61b8d5e2d37ec7813?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CbF0AP4eBdEx6br1lI4sNQghhD~8uVaOEr2XtmKk9xYX5l0fY9cVIL0wgjYhMfAcrJft9VEXR-ghJR6cJeQ5wANl4oP9CHmnFEujgXjI55RQg-n95bmDHyoTzGVlg8uVIwPb~2nrUwsj4abldRqRTMcLE1OLekZE~ZKI0Auv-cPyQC-UL9-3VpfcB3lugR75kB4NjMEXuJAmZuueUNhEIf-tW2hulIU4DrNgrQR5qd9pa4lNiWbfNe8Eu4nmn~VSB~H0wh8HR413Bb3EtG2ct~WUR8SrzpCxceSP8IPMvCso1YSD5hlkP6K2xZ3dpegr55qgP7KMm9kvTuDIFiwRZg__" /> */}
      {/* https://s3-alpha-sig.figma.com/img/5b64/f65b/9cbe96edee4d88b61b8d5e2d37ec7813?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CbF0AP4eBdEx6br1lI4sNQghhD~8uVaOEr2XtmKk9xYX5l0fY9cVIL0wgjYhMfAcrJft9VEXR-ghJR6cJeQ5wANl4oP9CHmnFEujgXjI55RQg-n95bmDHyoTzGVlg8uVIwPb~2nrUwsj4abldRqRTMcLE1OLekZE~ZKI0Auv-cPyQC-UL9-3VpfcB3lugR75kB4NjMEXuJAmZuueUNhEIf-tW2hulIU4DrNgrQR5qd9pa4lNiWbfNe8Eu4nmn~VSB~H0wh8HR413Bb3EtG2ct~WUR8SrzpCxceSP8IPMvCso1YSD5hlkP6K2xZ3dpegr55qgP7KMm9kvTuDIFiwRZg__ */}
      <div className={"div_image"} style={{width: '100vw',
    height: '100vh',
    position: 'absolute',
    overflow: 'hidden'}}>
     <div id='local-stream' style={{width:'100vw',height:'100vh'}}></div>
        <div className={"header_bar"}  style={{ width: '98vw',height: '10vh',top: '10px',display: 'flex',flexDirection: 'row',marginRight: '10px',
    marginLeft: '10px',
    position: 'absolute'}}>
        <div className={"headerLeft"} style={{ height:'100%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width: '100%'}}>
          <div style={{width:'40%', backgroundColor: 'rgba(115, 117, 120 ,0.5)',
                    height:50,marginLeft:10,borderRadius:'50px',display:'flex',flexDirection:'row',}}>
                      <div style={{ width: '100vw',
    
    height: '100%'}}>
                        <img src="https://qph.cf2.quoracdn.net/main-qimg-a5987f10b2bc80a793df78805498c3a4" 
                          style={{width: '50px',
                            height: '50px',
                            borderRadius: '30px',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            left: '10px',
                            /* margin-left: 10px; */
                            position: 'absolute'}}/>
                      </div>
                      <div style={{display:'flex',flexDirection:'column'
                            ,position:'relative',left: 60,justifyContent:'center',alignItems:'flex-start'}}>
                      <div style={{width: '10vw'}}>
                        <h6> Obito Uchiha</h6>
                      </div>
                      <div>
                        <h6> Gn@009</h6>
                      </div>
                        
                      </div>
                      <div className={"subsButton"} >
                        <button style={{width: '25%', height: '70%', borderRadius: '45px',border:'0px',
                         backgroundColor: '#6597CC',color: '#fff'}}>Subscribe</button>
                      </div>
                    
          </div>
          <div className={"div_SubsCountMain"} >
            {/* <h5 className={styles.div_h5}>54585</h5> */}
            <button onClick={() => joinChannel('host')}>Join Channel as Host</button>
          </div>
          <div style={{width:'3%',
                    height:'30%',marginLeft:10,borderRadius:'100px',marginTop:10,backgroundColor:'#EFE9DF',position:'relative',left:'420px'}} >
            <h4 style={{justifyContent:'center',textAlign:'center',
            alignItems:'center',height:'100%',display:'flex',color:'#fff'}}>X</h4>
          </div>

        </div>
      </div>


      <div className={"header_barbottom"} >
        <div className={"headerLeft"}>
          <div style={{width:'40%', backgroundColor: 'rgba(115, 117, 120 ,0.5)',
                    height:50,marginLeft:10,borderRadius:'50px',display:'flex',flexDirection:'row',}}>
                      <div style={{    width: '100vw',
    
    height: '100%'}}>
                        <img src="https://qph.cf2.quoracdn.net/main-qimg-a5987f10b2bc80a793df78805498c3a4" 
                          style={{width: '50px',
                            height: '50px',
                            borderRadius: '30px',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            left: '10px',
                            /* margin-left: 10px; */
                            position: 'absolute'}}/>
                      </div>
                      <div style={{display:'flex',flexDirection:'column'
                            ,position:'relative',left: 60,justifyContent:'center',alignItems:'flex-start'}}>
                      <div style={{width: '10vw'}}>
                        <h6> Obito Uchiha</h6>
                      </div>
                      <div>
                        <h6> Gn@009</h6>
                      </div>
                        
                      </div>
                      <div className={"subsButton"} >
                        <button style={{width: '25%', height: '70%', borderRadius: '45px',border:'0px',
                         backgroundColor: '#6597CC',color: '#fff'}}>Subscribe</button>
                      </div>
                    
          </div>
          <div className={"div_SubsCountMain"} >
            <h5 className={"div_h5"}>54585</h5>
          </div>
          <div style={{width:'3%',
                    height:'30%',marginLeft:10,borderRadius:'100px',marginTop:10,backgroundColor:'#EFE9DF',position:'relative',left:'420px'}} >
            <h4 style={{justifyContent:'center',textAlign:'center',
            alignItems:'center',height:'100%',display:'flex',color:'#fff'}}>X</h4>
          </div>

        </div>
      </div>
      </div>
     
      </div>
  );
}

export default LiveScreen