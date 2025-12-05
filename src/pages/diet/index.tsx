import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Diet() {
  useLoad(() => {
    console.log('Diet page loaded.')
  })

  return (
    <View className='diet'>
      <Text>饮食记录</Text>
    </View>
  )
}
