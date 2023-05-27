import { useEffect, useState } from 'react';
import { getObjectSignedUrl } from '../../s3';

const SignedImage = ({ url, alt = '' }) => {
  const [signedUrl, setSignedUrl] = useState(null);

  useEffect(() => {
    getObjectSignedUrl(url).then((signedUrl) => {
      setSignedUrl(signedUrl);
    });
  }, [url]);

  return <img src={signedUrl} alt={alt} />;
};

export default SignedImage;
