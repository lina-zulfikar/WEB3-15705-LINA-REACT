import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/portofolio.css' 
import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout; // membuat konstanta content 
const whyData = [
    {
        // // image: require(`../../../assets/images/simplifying.png`),
        title: ' ',
        description: ' '
    },
    {
        // image: require(`../../../assets/images/news.png`),
        title: ' ',
        description: ' '
    },
    {
        // image: require(`../../../assets/images/both-time.png`),
        title: '',
        description: ' '
    }, 
    {
        // // image: require(`../../../assets/images/tracking.png`),
        title: 'Zodiak',
        description: 'Kebetulan berzodiak virgo.'
    },
    {
        // // image: require(`../../../assets/images/certificate.png`),
        title: 'Makanan Kesukaan',
        description: 'Paling suka sama nasi padang dan bakso. Gak terlalu suka makanan manis kecuali es krim dan coklat.'
    },
    {
        // // image: require(`../../../assets/images/paperless.png`),
        title: 'Kegiatan di Waktu Luang',
        description: 'Paling sering baca cerita di wattpad. Di akhir pekan seringkali menggambar atau melukis di atas kertas. Alhir-akhir ini suka nonton drama korea.'
    },
    {
        // // image: require(`../../../assets/images/simplifying.png`),
        title: ' ',
        description: ' '
    },
    {
        // image: require(`../../../assets/images/news.png`),
        title: ' ',
        description: ' '
    },
    {
        // image: require(`../../../assets/images/both-time.png`),
        title: ' ',
        description: ' '
    },
    {
        // // image: require(`../../../assets/images/simplifying.png`),
        title: ' ',
        description: ' '
    },
    {
        // image: require(`../../../assets/images/news.png`),
        title: ' ',
        description: ' '
    },
    {
        // image: require(`../../../assets/images/both-time.png`),
        title: ' ',
        description: ' '
    }  
]

class PortofolioComponent extends Component{
    render(){
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                    Aku siapa?
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                  Yuk kenalan lebih jauh.
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#4D5AF2',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={24} className="mt-20">
                                <Row
                                    type="flex" justify="center"
                                    className="card-why-container"
                                >
                                    {
                                        whyData.map( data =>
                                            <Col lg={8} md={12} sm={12} className="">
                                                <div className="card-why-content">
                                                    <img src={data.image}  className="card-why-image"/>
                                                    <div className="text-soft-blue semi-bold mt-10">
                                                        {data.title}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.description}
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default PortofolioComponent;