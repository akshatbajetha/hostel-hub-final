import React, { useEffect } from "react";

const useScript = (src, integrity, crossOrigin="anonymous") => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = src;
        script.integrity = integrity;
        script.crossOrigin = crossOrigin;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script)
        };
      }, [src, integrity, crossOrigin]);
};

export default useScript;
