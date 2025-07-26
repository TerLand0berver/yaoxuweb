import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  // Vercel OG a absolute URL is required.
  // You can use `process.env.NEXT_PUBLIC_SITE_URL` or `process.env.VERCEL_URL` to build the absolute URL.
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'https://your-domain.com';
  const logoUrl = `${siteUrl}/images/logo.webp`;

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={logoUrl}
          alt="YaoXu Favicon"
          width={32}
          height={32}
        />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}