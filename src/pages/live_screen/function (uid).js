 function (uid) 
          {
              console.log("join channel: " + option.channel + " success, uid: " + uid);
              rtc.params.uid = uid;
              if (role === "host") {
                  client.setClientRole("host");
                  // Create a local stream
                 localStream = AgoraRTC.createStream({
                      streamID: rtc.params.uid,
                      audio: true,
                      video: true,
                      screen: false,
                  })

                  // Initialize the local stream
                  rtc.localStream.init(function () {
                      console.log("init local stream success");
                      rtc.localStream.play("local_stream");
                      rtc.client.publish(rtc.localStream, function (err) {
                          console.log("publish failed");
                          console.error(err);
                      })
                  }, function (err) {
                      console.error("init local stream failed ", err);
                  });

                  rtc.client.on("connection-state-change", function (evt) {
                      console.log("audience", evt)
                  })


              }
              if (role === "audience") {
                  rtc.client.on("connection-state-change", function (evt) {
                      console.log("audience", evt)
                  })

                  rtc.client.on("stream-added", function (evt) {
                      var remoteStream = evt.stream;
                      var id = remoteStream.getId();
                      if (id !== rtc.params.uid) {
                          rtc.client.subscribe(remoteStream, function (err) {
                              console.log("stream subscribe failed", err);
                          })
                      }
                      console.log('stream-added remote-uid: ', id);
                  });

                  rtc.client.on("stream-removed", function (evt) {
                      var remoteStream = evt.stream;
                      var id = remoteStream.getId();
                      console.log('stream-removed remote-uid: ', id);
                  });

                  rtc.client.on("stream-subscribed", function (evt) {
                      var remoteStream = evt.stream;
                      var id = remoteStream.getId();
                      remoteStream.play("remote_video_");
                      console.log('stream-subscribed remote-uid: ', id);
                  })

                  rtc.client.on("stream-unsubscribed", function (evt) {
                      var remoteStream = evt.stream;
                      var id = remoteStream.getId();
                      remoteStream.pause("remote_video_");
                      console.log('stream-unsubscribed remote-uid: ', id);
                  })
              }
          }, function (err) {
              console.error("client join failed", err)
          })