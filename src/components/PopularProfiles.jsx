import { Row, Col, Card, Layout } from "antd";
import styled from "styled-components";

const { Meta } = Card;

const StyledCard = styled.div`
    display: flex;
    justify-content: center;
`

const PopularProfiles = () => {
    return ( 
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
                <StyledCard>
                <Card
                    hoverable
                    style={{
                    width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </StyledCard>
            </Col>

            <Col className="gutter-row" span={6}>
                <StyledCard>
                <Card
                    hoverable
                    style={{
                    width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </StyledCard>
            </Col>

            <Col className="gutter-row" span={6}>
                <StyledCard>
                <Card
                    hoverable
                    style={{
                    width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </StyledCard>
            </Col>

            <Col className="gutter-row" span={6}>
                <StyledCard>
                <Card
                    hoverable
                    style={{
                    width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </StyledCard>
            </Col>
            </Row>

    );
}
 
export default PopularProfiles;