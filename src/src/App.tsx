import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from "./Components/MenuBar/MenuBar";
import { Layout, Menu, Breadcrumb } from 'antd';
import HeaderBar from "./Components/Header/HeaderBar";
import HomePage from "./Pages/HomePage/HomePage";


const { Header, Content, Sider, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
          <Header>
              <HeaderBar></HeaderBar>
          </Header>
          <Layout>
              <Sider width={250}>
                  <MenuBar></MenuBar>
              </Sider>
              <Content>
                  <HomePage/>
              </Content>
          </Layout>
          <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
