import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Dwellify | Find The Perfect Home',
  description: 'Find the perfect home with Dwellify',
  keywords: 'dwellify, home, real estate',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
