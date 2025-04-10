import React from 'react';

import Logoo from '../../cutdm.png';

export function Logo() {
  return (
    <img 
      src={Logoo}
      alt="DM's AI - Business Automation Solutions"
      className="w-8 h-8"
      loading="eager"
      width="32"
      height="32"
    />
  );
}