import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Body() {
  useLoad(() => {
    console.log('Body page loaded.')
  })

  return (
    <View className='body'>
      <Text>身体记录</Text>
    </View>
  )
}
