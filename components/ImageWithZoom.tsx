import React, { useCallback, useState } from "react";
import Image from "next/image";
import { Controlled as Zoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Box } from "@chakra-ui/react";

interface Props {
  imageSrc: string;
  blurDataURL: string;
}

const ImageWithZoom = ({ imageSrc, blurDataURL }: Props) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomImage = useCallback(() => {
    setIsZoomed(true);
  }, []);

  const handleZoomChange = useCallback((shouldZoom: boolean) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <Box position="relative" display="block" height='252px' width='434px' mr="2">
      <Zoom
        isZoomed={isZoomed}
        onZoomChange={handleZoomChange}
        overlayBgColorEnd="rgba(0,0,0,0.9)"
        overlayBgColorStart="rgba(0,0,0,0.1)">
        <Image
          alt="screenshot"
          src={imageSrc}
          blurDataURL={blurDataURL}
          style={{ borderRadius: '5px', }}
          placeholder="blur"
          width={1600}
          height={900}
          quality="100"
          layout="intrinsic"
          objectFit={isZoomed ? "contain" : "cover"}
          loading="lazy"
          className="image"/>
      </Zoom>
      <Box
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width="100%"
        zIndex="20"
        cursor="pointer"
        onClick={handleZoomImage}/>
    </Box>
  );
}

export default ImageWithZoom;
