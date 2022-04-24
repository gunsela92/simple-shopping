import React from "react";
import useWindowSize from "../../Utils/useWindowSize";
import {useEffect, useMemo, useState} from "react";

const Hoc = (Component) => {
  function WrappedComponent(props) {
    const [device, setDevice] = useState({desktop: false, mobile: false, tablet: false});
    const {width} = useWindowSize();

    useEffect(() => {
      if (width >= 1024 && !device?.desktop) {
        setDevice({...device, desktop: true, tablet: false, mobile: false});
      } else if ((width >= 768 && width < 1024) && !device?.tablet) {
        setDevice({...device, desktop: false, tablet: true, mobile: false});
      } else if (width < 768 && !device?.mobile) {
        setDevice({...device, desktop: false, tablet: false, mobile: true});
      }
    }, [width]);

    return useMemo(() => {
      return <Component isMobile={device?.mobile} isDesktop={device?.desktop} isTablet={device?.tablet} {...props} />
    }, [device?.desktop, device?.mobile, device?.tablet, props]);
  }

  return WrappedComponent;
}

export default Hoc;
