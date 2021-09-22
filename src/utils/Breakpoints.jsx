const size = {
    mobile: '375px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '2560px'
  }

 const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`
  };

  export default device;