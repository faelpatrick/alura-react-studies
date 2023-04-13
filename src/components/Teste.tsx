import React, { useEffect, useState } from "react";
import SimpleWebRTC from "simplewebrtc";

const VideoCall: React.FC = () => {
  const [webrtc, setWebrtc] = useState<SimpleWebRTC.Instance | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const webrtcConfig: SimpleWebRTC.Options = {
      // Coloque aqui as configurações do SimpleWebRTC
    };
    const webrtcInstance = new SimpleWebRTC(webrtcConfig);

    webrtcInstance.on("readyToCall", () => {
      webrtcInstance.joinRoom("sala-de-video-chamada");
    });

    webrtcInstance.on("localStream", (stream: MediaStream) => {
      setLocalStream(stream);
    });

    webrtcInstance.on("videoAdded", (video: HTMLVideoElement, peer: SimpleWebRTC.Peer) => {
      setRemoteStream(video.srcObject as MediaStream);
    });

    setWebrtc(webrtcInstance);

    return () => {
      webrtcInstance.leaveRoom();
      webrtcInstance.disconnect();
    };
  }, []);

  return (
    <>
      <div>
        <video srcObject={localStream} autoPlay />
        <video srcObject={remoteStream} autoPlay />
      </div>
    </>
  );
};

export default VideoCall;
