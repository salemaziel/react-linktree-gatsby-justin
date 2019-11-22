import React from 'react';
import './app.css'
import Layout1 from './components/Layout1'
import Layout2 from './components/Layout2'
import Layout3 from './components/Layout3'

import './css/cardcontent.css'
import './css/main.css'
import Layout2sales from './components/Layout2sales';

function App() {
   

    return(
        
        <div className='Wrapper'>
            <Layout1 />
            <Layout2 />
            <Layout2sales />
            {/**<Layout3 />**/}
        </div>
    );
}

export default App;