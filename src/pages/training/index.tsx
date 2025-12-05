import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Training() {
  useLoad(() => {
    console.log('Training page loaded.')
  })

  return (
    <View className='training'>
      <Text>训练记录</Text>
    </View>
  )
}
