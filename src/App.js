import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
//import { Card } from 'antd';
import logo from './logo.svg';
import './App.css';
import { Card } from 'antd';
const { Header, Content, Footer } = Layout;

const cardData = [
  {
    nama : "Lina Zulfikar",
    job : "Mahasiswa"
  },
  {
    nama : "Abdurrahman Jaisy ",
  },
  {
    nama : "Qhrisna Akbar",
    
  }
]

function App() {
  
 

  return (
    

    <div className="site-card-border-less-wrapper">
      {
        cardData.map( data =>
        
    <Card title="Nama" bordered={false} style={{ width: 300 }}>
      <p>{data.nama}</p>
      <p>{data.nama}</p>
      <p>{data.nama}</p>
      
    </Card>
 
      )
    }
    </div>
  );
}

export default App;
