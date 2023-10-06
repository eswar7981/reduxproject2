import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import {useSelector,useDispatch} from 'react-redux'

function App() {

  const auth=useSelector(state=>state.auth.isAuthenticated)
  return (
    <>
   {auth && <Header></Header>}
   <Auth></Auth>
    </>
  );
}

export default App;
