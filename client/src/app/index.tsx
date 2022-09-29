import { useContext, useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import { observer } from 'mobx-react-lite';

import { AppContext, Context } from './context';
import './index.css';
import {  Navigation } from './navigation';
import { withProviders } from './providers';




const App = withProviders(() => {
  const { authStore } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      authStore.checkIsAuth();
    }
  }, [authStore]);



  // const ws = useRef<any>();
  // ws.current = new WebSocket('ws://localhost:3000');

  // useEffect(() => {
  //   ws.current = new WebSocket('ws://localhost:3000');

  //   ws.current.onopen = () => setConnected(true)

  //   ws.current.onmessage = (event: any) => {
  //     //console.log(event.data)
  //     //const mes = JSON.parse(event.data)
  //     event.data.text().then( (txt:any) => setMessages((prev: any) => [...prev,txt]))
  //     // setMessage((prev: any) => [mes, ...prev])
  //     // console.log(message)
  //   }

  //   ws.current.onclose = () => console.log('close')
  // },[])

  //console.log(messages)

  // ws.addEventListener('message', (event) => {
  //   console.log(event.data);
  //   if (event.data.type === 'chat_message') {
  //     setMessage(JSON.parse(event.data));
  //   }
  // });

  // const sendMessage = async (event:React.MouseEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const message = {
  //     type: 'chat_message',
  //     user: 'Sergey',
  //     message:value,
  //   }
  //   ws.current.send(
  //     JSON.stringify(message),
  //   )
  //   setValue('')
  // }

  return (
    <AppContext>
      <SnackbarProvider>
        < Navigation />
      </SnackbarProvider>
    </AppContext>
  );
});

export default observer(App);


