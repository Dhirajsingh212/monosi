import * as React from 'react';

const WebhookLogo = (props: any) => (
  <svg
    className="svg-icon"
    style={{
      width: '1em',
      height: '1em',
      verticalAlign: 'middle',
      fill: 'currentColor',
      overflow: 'hidden',
    }}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M446.293 810.667C384 898.987 262.4 921.173 174.507 859.733 87.04 798.293 66.56 675.84 128 586.667a195.627 195.627 0 0 1 152.747-84.48l2.133 61.013c-38.827 2.987-76.373 23.04-100.693 58.027-42.667 61.44-29.44 144.213 29.013 185.6 58.88 40.96 141.227 25.173 183.893-35.84 13.227-19.2 20.907-40.107 23.894-61.44v-43.094l238.08-1.706 2.986-4.694c22.614-39.253 71.68-52.906 110.08-30.72a81.067 81.067 0 0 1 29.014 110.934c-22.614 38.826-72.107 52.48-110.507 30.293-17.493-9.813-29.867-25.6-35.413-43.52l-173.654.853a211.627 211.627 0 0 1-33.28 82.774m310.614-304.64c107.946 13.226 184.746 110.08 171.52 216.32-13.227 106.666-111.36 182.186-219.307 168.96a197.504 197.504 0 0 1-146.347-94.294l52.907-30.72a137.387 137.387 0 0 0 98.987 61.867c74.666 8.96 140.8-41.813 149.76-113.067 8.96-71.253-43.947-136.533-117.76-145.493-23.04-2.56-45.227.427-65.28 7.68l-36.267 18.773-110.08-203.52h-9.387a81.323 81.323 0 0 1-78.933-83.2C448 264.96 486.4 230.4 531.2 232.107c44.8 2.56 80.213 38.826 78.933 83.2-.853 18.773-8.106 35.84-19.626 49.066l81.066 149.76c26.454-8.533 55.467-11.52 85.334-8.106M352 389.973c-42.667-100.266 2.56-215.04 101.12-256.853 98.987-41.813 213.333 5.547 256 105.813 25.173 58.454 20.053 122.454-8.533 173.654l-52.907-30.72c17.92-34.56 20.907-76.8 3.84-116.48C622.507 197.12 545.28 164.267 479.147 192c-66.56 28.16-96.427 106.667-67.414 174.933 11.947 28.16 32 49.92 56.32 64.427l16.64 8.96-130.986 212.907c1.28 2.133 2.986 4.693 4.266 8.106 20.907 38.827 6.4 87.894-32.853 108.8-38.827 20.907-87.893 5.547-109.227-34.56-20.906-39.68-6.4-88.746 32.854-109.653 16.64-8.96 34.986-11.093 52.48-7.253l98.56-160.854c-20.054-18.346-37.12-41.386-47.787-67.84z" />
  </svg>
);

export default WebhookLogo;
