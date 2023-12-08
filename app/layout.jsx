import '@styles/globals.css';
import Nav from '@components/nav';
import Provider from '@components/provider';

export const metadata = {
    title: "promptopia",
    description: "discover various prompts for ai web tools like chatgpt bard etc"
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav/>
          {children}
        </main>
        </Provider>
        </body>
    </html>
  )
}

export default Rootlayout;