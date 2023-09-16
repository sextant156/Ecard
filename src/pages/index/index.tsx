import { Component} from 'react'
import { View, Text } from '@tarojs/components'
import { Swiper } from '@tarojs/components'
import { SwiperItem } from '@tarojs/components'
import { Image } from '@tarojs/components'
import { Button } from '@tarojs/components'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import Taro, { addPhoneContact } from '@tarojs/taro'
import { makePhoneCall } from '@tarojs/taro'
import { setClipboardData } from '@tarojs/taro'
import { showToast } from '@tarojs/taro'
interface IImage
{
  id: number;
  url: string;
}
interface IState
{
  datalist: IImage[];
}
export default class Index extends Component<any,IState> 
{
  
  constructor(props: any)
  {
    super(props);
    this.state = 
    {
      datalist: []
    }
  }
  componentDidMount () 
  { 
    let imgList: IImage[] = [];
    for (let i = 0; i < 9; i++)
    {
      imgList.push({id: i, url: 'https://cdn.staticaly.com/gh/sextant156/PicSource@main/img/%E7%8B%99.png'});
    }
    this.setState({
      datalist: imgList
    })
  }


  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  CallPhone = () =>
  {
    makePhoneCall({phoneNumber: '13864199988'})
  }
  AddPhone = () =>
  {
    addPhoneContact({
      firstName: '史承军',
      mobilePhoneNumber: '13864199988',
      weChatNumber:'webjoyxinyue',
    })
  }
  // 收藏对应内容
  onAddToFavorites () 
  {
    // webview 页面返回 webviewUrl
    return {
      title: '你好我是史承军',
      imageUrl: 'https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/info001.jpg',
      query: 'id?=1',
    }
  }
  // 分享对应内容
  onShareAppMessage(res) 
  {
    if (res.from === 'button') 
    {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '你好我是史承军',
      imageUrl: 'https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/info001.jpg',
      path: '/pages/index/index?id=123',
    }
  }
  // 复制微信号到剪切板
  copyWechat = () =>
  {
    // 此处修改不同的微信号
    setClipboardData({data: 'webjoyxinyue',
    success: ()=>
    {
      showToast({title: '复制成功'})
    }
  })
  }
  // 渲染
  render () 
  {
    return (
      <View className='index'>
          <Image
            className='imgCard'
            src='https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/info001.jpg'
          />
        {/* 操作页 */}
        <View className = 'container1'>
          <Button className = 'block' onClick={this.AddPhone} style={{ color: 'white', fontWeight: 'bold', fontFamily: '宋体' }}>保存电话</Button>
          <Button className = 'block' onClick={this.copyWechat} style={{ color: 'white', fontWeight: 'bold', fontFamily: '宋体' }}>复制微信</Button>
          <Button className = 'block' openType='share' style={{ color: 'white', fontWeight: 'bold', fontFamily: '宋体' }}>分享名片</Button>
        </View>
        <View id='img1' style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            mode='aspectFit'
            style={{ width: '50px', height: '40px' }}
            className='logo001'
            src='https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/logo2.png'
          />
          <Text style={{ margin: '0 10px' }}>企业简介</Text>
        </View>
        <View className='textcontainer'>
          <Text className='text2' style={{color:'white',fontFamily:'黑体',fontSize:'14px'}}>济南园林集团景观设计公司是具有专业经验和发展潜力的品牌设计机构，拥有风景园林工程设计甲级资质、建筑工程设计乙级资质和城乡规划编制乙级资质。多年来凭借专业的技术力量、突出的创新能力和全面的团队服务形成了风景园林设计、建筑设计、城乡规划、旅游策划、造价咨询、工程管理、科研生产、文创开发等多版块、多专业共发展模式，完成了众多知名规划设计项目，累计获得国家级、省市级等各级奖项数百项。</Text>
        </View>
        

        <View id='img1' style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            mode='aspectFit'
            style={{ width: '50px', height: '40px' }}
            className='logo001'
            src='https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/logo2.png'
          />
          <Text style={{ margin: '0 10px' }}>企业实力</Text>
        </View>

                <Swiper
          autoplay
          circular
          className='swiper'
        >
          <SwiperItem>
              <Image className='img003' src='https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/%E6%98%9F%E7%A9%BA%E8%90%A5%E5%9C%B0%E5%A4%9C%E6%99%AF%2B%E5%AE%9E%E6%99%AF.jpg' />           
          </SwiperItem>
          <SwiperItem>
            <Image className='img003' src='https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/%E6%B5%B7%E5%8D%97%E5%A4%A9%E6%B6%AF%E6%B5%B7%E8%A7%92.jpg' />
          </SwiperItem>
          <SwiperItem>
            <Image className='img003' src='https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/DSCF0306-%E7%BC%96%E8%BE%91.jpg' />
          </SwiperItem>
          <SwiperItem>
            <Image className='img003' src='https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/%E6%BD%8D%E5%9D%8Acbd.jpg' />
          </SwiperItem>
          <SwiperItem>
            <Image className='img003' src='https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/%E5%A4%A9%E6%B6%AF%E6%B5%B7%E8%A7%92.jpg' />
          </SwiperItem>
          <SwiperItem>
            <Image className='img003' src='https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/%E5%8D%83%E4%BD%9B%E5%B1%B1%E5%8C%97%E5%B9%BF%E5%9C%BA.jpg' />
          </SwiperItem>
          <SwiperItem>
            <Image className='img003' src='https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/%E8%8C%82%E5%B2%AD%E5%B1%B1cbd.jpg' />
          </SwiperItem>
        </Swiper>
        <View style={{ textAlign: 'center' }}>
          <Text style={{color:'white',fontSize:'12px'}}>项目展示</Text>
        </View>
        <Image
            className='img001'
            src='https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/002.png'
        />
        <View style={{ textAlign: 'center' }}>
          <Text style={{color:'white',fontSize:'12px'}}>获奖情况</Text>
        </View>

        <View id='img1' style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            mode='aspectFit'
            style={{ width: '50px', height: '40px' }}
            className='logo001'
            src='https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/logo2.png'
          />
          <Text style={{ margin: '0 10px' }}>企业资质</Text>
        </View>
        <Image
            className='img001'
            src='https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/001.png'
        />
        </View>

    )
  }
}
