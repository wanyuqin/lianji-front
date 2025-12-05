import { View, Text, ScrollView } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { useSelector } from 'react-redux'
import { Button, Progress, Avatar, Tag } from '@nutui/nutui-react-taro'
import { Notice, Check, PlayStart, Edit } from '@nutui/icons-react-taro'
import { RootState } from '../../store'
import './index.scss'

export default function Index() {
  const user = useSelector((state: RootState) => state.user)
  const training = useSelector((state: RootState) => state.training)
  const diet = useSelector((state: RootState) => state.diet)
  const body = useSelector((state: RootState) => state.body)

  useLoad(() => {
    console.log('Page loaded.')
  })

  const handleNavigate = (url: string, isTab = false) => {
    if (isTab) {
      Taro.switchTab({ url })
    } else {
      Taro.navigateTo({ url })
    }
  }

  return (
    <ScrollView className='index-page' scrollY>
      {/* Header */}
      <View className='header'>
        <View className='header-left'>
          <Notice size={20} color='#000' />
        </View>
        <View className='header-title'>
          <Text className='app-name'>练记</Text>
        </View>
        <View className='header-right'>
          <Avatar size='small' src={user.avatar} />
        </View>
      </View>

      {/* Date & Status */}
      <View className='status-section'>
        <Text className='date-text'>2024年1月15日 星期一</Text>
        <View className='plan-info'>
          <Text className='plan-days'>第{user.planDay}天</Text>
          <View className='divider' />
          <Text className='plan-name'>{user.planName}</Text>
        </View>
      </View>

      {/* Progress Dashboard */}
      <View className='card progress-card'>
        <View className='card-header'>
          <Text className='card-title'>📊 今日进度</Text>
        </View>
        <View className='progress-grid'>
          <View className='progress-item'>
            <Text className='label'>训练</Text>
            <Text className='value'>{training.isCompleted ? '1/1' : '0/1'}</Text>
            <Progress percent={training.isCompleted ? 100 : 0} color='var(--primary-color)' strokeWidth='6' />
          </View>
          <View className='progress-item'>
            <Text className='label'>饮食</Text>
            <Text className='value'>{diet.currentCalories}/{diet.targetCalories}</Text>
            <Progress percent={(diet.currentCalories / diet.targetCalories) * 100} color='var(--warning-color)' strokeWidth='6' />
          </View>
          <View className='progress-item'>
            <Text className='label'>身体</Text>
            <Text className='value'>-</Text>
            <Text className='sub-value'>待记录</Text>
          </View>
        </View>
      </View>

      {/* Training Card */}
      <View className='card training-card'>
        <View className='card-header'>
          <Text className='card-title'>🏋️ 今日训练</Text>
          <Tag type='primary' plain>{training.todayTitle}</Tag>
        </View>
        <View className='exercise-list'>
          {training.exercises.map(exercise => (
            <View className='exercise-item' key={exercise.id}>
              <View className='exercise-info'>
                <Text className='exercise-name'>{exercise.id}. {exercise.name}</Text>
                <Text className='exercise-target'>{exercise.sets}</Text>
              </View>
              <Text className='exercise-history'>上次: {exercise.lastRecord}</Text>
            </View>
          ))}
        </View>
        <Button type='primary' block className='action-btn' onClick={() => handleNavigate('/pages/training/index', true)}>
          <PlayStart size={16} style={{ marginRight: 4 }} /> 开始训练
        </Button>
      </View>

      {/* Diet Card */}
      <View className='card diet-card'>
        <View className='card-header'>
          <Text className='card-title'>🍽️ 今日饮食</Text>
        </View>
        <View className='diet-summary'>
          <View className='summary-row'>
            <Text className='label'>目标</Text>
            <Text className='value'>{diet.targetCalories}卡 | {diet.targetProtein}P / {diet.targetCarbs}C / {diet.targetFat}F</Text>
          </View>
          <View className='summary-row'>
            <Text className='label'>已摄入</Text>
            <Text className='value highlight'>{diet.currentCalories}卡 | {diet.currentProtein}P / {diet.currentCarbs}C / {diet.currentFat}F</Text>
          </View>
        </View>
        <View className='meal-list'>
          {diet.meals.map(meal => (
            <View className={`meal-item ${meal.status === 'completed' ? 'completed' : ''}`} key={meal.id}>
              <View className={`meal-icon ${meal.status === 'pending' ? 'pending' : ''}`}>
                {meal.status === 'completed' && <Check size={12} color='#fff' />}
              </View>
              <Text className='meal-name'>{meal.name}</Text>
              <Text className='meal-status'>{meal.status === 'completed' ? '已记录' : '待记录'}</Text>
            </View>
          ))}
        </View>
        <Button block className='action-btn secondary-btn' onClick={() => handleNavigate('/pages/diet/index', true)}>
          <Edit size={16} style={{ marginRight: 4 }} /> 记录饮食
        </Button>
      </View>

      {/* Body Data Card */}
      <View className='card body-card'>
        <View className='card-header'>
          <Text className='card-title'>📝 今日身体数据</Text>
        </View>
        <View className='data-row'>
          <View className='data-item'>
            <Text className='label'>晨重</Text>
            <View className='value-group'>
              <Text className='value'>{body.weight}</Text>
              <Text className='unit'>kg</Text>
            </View>
            <Text className={`comparison ${body.weight > body.prevWeight ? 'up' : 'down'}`}>
              {body.weight > body.prevWeight ? '↑' : '↓'}{(Math.abs(body.weight - body.prevWeight)).toFixed(1)} (昨日: {body.prevWeight})
            </Text>
          </View>
          <View className='data-item'>
            <Text className='label'>体脂</Text>
            <View className='value-group'>
              <Text className='value'>{body.bodyFat}</Text>
              <Text className='unit'>%</Text>
            </View>
            <Text className='comparison stable'>- (稳定)</Text>
          </View>
        </View>
        <Button block className='action-btn secondary-btn' onClick={() => handleNavigate('/pages/body/index', true)}>
          <Edit size={16} style={{ marginRight: 4 }} /> 记录数据
        </Button>
      </View>
      
      <View className='footer-spacer' />
    </ScrollView>
  )
}
