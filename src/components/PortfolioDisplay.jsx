import { Image } from 'antd';
import { useState } from 'react';

const PortfolioDisplay = () => {
    const [visible, setVisible] = useState(false);

    return ( 
        <>
              <Image
                preview={{
                visible: false,
                }}
                width={"100%"}
                src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
                onClick={() => setVisible(true)}
                />
            <div
                style={{
                    display: 'none',
                }}
            >
                <Image.PreviewGroup
                preview={{
                    visible,
                    onVisibleChange: (vis) => setVisible(vis),
                }}
                >
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />   
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                </Image.PreviewGroup>
            </div>
        </>
     );
}
 
export default PortfolioDisplay;