import { View, Text } from 'react-native'

export default function PrimaryButton({ children }: { children: string }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}
