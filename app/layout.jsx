import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse',
  description: 'Find your dream rental property',
  keywords: 'rental, property, find rentals, find properties'
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout